<?php

namespace App\Http\Controllers;

use App\Http\Resources\TourneesResource;
use Illuminate\Http\Request;
use App\Models\Tournees;
use Illuminate\Validation\Rule;
use App\Http\Resources\TourneeResource;


class TourneesController extends Controller
{
    /**
     * @OA\Get(
     *     path="/tournees",
     *     tags={"Tournees"},
     *     summary="Get list of tournees",
     *     description="Returns list of tournees",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/TourneeResource"))
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function index()
    {
        return TourneeResource::collection(Tournees::paginate());
    }

    /**
     * @OA\Post(
     *     path="/tournees",
     *     tags={"Tournees"},
     *     summary="Store a new tournee",
     *     description="Stores a new tournee and returns it",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/TourneeRequest")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/TourneeResource")
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'starting_point_longitude' => 'required',
            'starting_point_latitude' => 'required'
        ]);

        $tournee = Tournees::create($validatedData);

        return new TourneeResource($tournee);
    }

    /**
     * @OA\Get(
     *     path="/tournees/{tournee}",
     *     tags={"Tournees"},
     *     summary="Get specific tournee",
     *     description="Returns data about a specific tournee",
     *     @OA\Parameter(
     *         name="tournee",
     *         description="Tournee ID",
     *         required=true,
     *         in="path",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/TourneeResource")
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */

    public function show(Tournees $tournee)
    {
        return new TourneeResource($tournee);
    }


    /**
     * @OA\Put(
     *     path="/tournees/{tournee}",
     *     tags={"Tournees"},
     *     summary="Update a tournee",
     *     description="Updates and returns a tournee",
     *     @OA\Parameter(
     *         name="tournee",
     *         description="Tournee ID",
     *         required=true,
     *         in="path",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/TourneeRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/TourneeResource")
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function update(Request $request, Tournees $tournee)
    {
        $validatedData = $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'starting_point_longitude' => 'required',
            'starting_point_latitude' => 'required'
        ]);

        $tournee->update($validatedData);

        return new TourneeResource($tournee);
    }


    /**
     * @OA\Delete(
     *     path="/tournees/{tournee}",
     *     tags={"Tournees"},
     *     summary="Delete a tournee",
     *     description="Deletes a specific tournee",
     *     @OA\Parameter(
     *         name="tournee",
     *         description="Tournee ID",
     *         required=true,
     *         in="path",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Successful operation",
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function destroy(Tournees $tournee)
    {
        $tournee->delete();

        return response()->json(null, 204);
    }
}
