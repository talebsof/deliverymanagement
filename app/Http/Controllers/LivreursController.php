<?php

namespace App\Http\Controllers;

use App\Models\Livreurs;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Resources\LivreurResource;


class LivreursController extends Controller
{
    /**
     * @OA\Get(
     *     path="/livreurs",
     *     tags={"Livreurs"},
     *     summary="Get list of livreurs",
     *     description="Returns list of livreurs",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/LivreurResource"))
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function index()
    {
        return LivreurResource::collection(Livreurs::paginate());
    }

    /**
     * @OA\Post(
     *     path="/livreurs",
     *     tags={"Livreurs"},
     *     summary="Store a new livreur",
     *     description="Stores a new livreur and returns it",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name", "surname", "phone_number", "status"},
     *             @OA\Property(property="name", type="string"),
     *             @OA\Property(property="surname", type="string"),
     *             @OA\Property(property="phone_number", type="string"),
     *             @OA\Property(property="status", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/LivreurResource")
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'surname' => 'required',
            'phone_number' => 'required',
            'status' => 'required',
        ]);

        $livreur = Livreurs::create($validatedData);

        return new LivreurResource($livreur);
    }


    /**
     * @OA\Get(
     *     path="/livreurs/{livreur}",
     *     tags={"Livreurs"},
     *     summary="Get specific livreur",
     *     description="Returns data about a specific livreur",
     *     @OA\Parameter(
     *         name="livreur",
     *         in="path",
     *         required=true,
     *         description="Livreur ID",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/LivreurResource")
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function show(Livreurs $livreur)
    {
        return new LivreurResource($livreur);
    }


    /**
     * @OA\Put(
     *     path="/livreurs/{livreur}",
     *     tags={"Livreurs"},
     *     summary="Update a livreur",
     *     description="Updates and returns a specific livreur",
     *     @OA\Parameter(
     *         name="livreur",
     *         in="path",
     *         required=true,
     *         description="Livreur ID",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/LivreurRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/LivreurResource")
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function update(Request $request, Livreurs $livreur)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'surname' => 'required',
            'phone_number' => 'required',
            'status' => 'required',
        ]);

        $livreur->update($validatedData);

        return new LivreurResource($livreur);
    }


    /**
     * @OA\Delete(
     *     path="/livreurs/{livreur}",
     *     tags={"Livreurs"},
     *     summary="Delete a livreur",
     *     description="Deletes a specific livreur",
     *     @OA\Parameter(
     *         name="livreur",
     *         in="path",
     *         required=true,
     *         description="Livreur ID",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Livreur successfully deleted"
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function destroy(Livreurs $livreur)
    {
        $livreur->delete();

        return response()->json(null, 204);
    }
}
