<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Livraisons;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Resources\LivraisonResource;

class LivraisonsController extends Controller
{
    /**
     * @OA\Get(
     *     path="/livraisons",
     *     tags={"Livraisons"},
     *     summary="Get list of livraisons",
     *     description="Returns list of livraisons",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/LivraisonResource"))
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function index()
    {
        return LivraisonResource::collection(Livraisons::paginate());
    }

    /**
     * @OA\Post(
     *     path="/livraisons",
     *     tags={"Livraisons"},
     *     summary="Store a new livraison",
     *     description="Stores a new livraison and returns it",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"pickup_address", "dropoff_address", "tournee_id"},
     *             @OA\Property(property="pickup_address", type="string"),
     *             @OA\Property(property="dropoff_address", type="string"),
     *             @OA\Property(property="tournee_id", type="integer", description="Tournee ID")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/LivraisonResource")
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'pickup_address' => 'required',
            'dropoff_address' => 'required',
            'tournee_id' => 'required|exists:tournees,id',
        ]);

        $livraison = Livraisons::create($validatedData);

        return new LivraisonResource($livraison);
    }


    /**
     * @OA\Get(
     *     path="/livraisons/{livraison}",
     *     tags={"Livraisons"},
     *     summary="Get specific livraison",
     *     description="Returns data about a specific livraison",
     *     @OA\Parameter(
     *         name="livraison",
     *         in="path",
     *         required=true,
     *         description="Livraison ID",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/LivraisonResource")
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function show(Livraisons $livraison)
    {
        return new LivraisonResource($livraison);
    }


    /**
     * @OA\Put(
     *     path="/livraisons/{livraison}",
     *     tags={"Livraisons"},
     *     summary="Update a livraison",
     *     description="Updates and returns a specific livraison",
     *     @OA\Parameter(
     *         name="livraison",
     *         in="path",
     *         required=true,
     *         description="Livraison ID",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/LivraisonRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/LivraisonResource")
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function update(Request $request, Livraisons $livraison)
    {
        $validatedData = $request->validate([
            'pickup_address' => 'required',
            'dropoff_address' => 'required',
            'tournee_id' => 'required|exists:tournees,id',
        ]);

        $livraison->update($validatedData);

        return new LivraisonResource($livraison);
    }


    /**
     * @OA\Delete(
     *     path="/livraisons/{livraison}",
     *     tags={"Livraisons"},
     *     summary="Delete a livraison",
     *     description="Deletes a specific livraison",
     *     @OA\Parameter(
     *         name="livraison",
     *         in="path",
     *         required=true,
     *         description="Livraison ID",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Livraison successfully deleted"
     *     ),
     *     security={{"bearerAuth":{}}}
     * )
     */
    public function destroy(Livraisons $livraison)
    {
        $livraison->delete();

        return response()->json(null, 204);
    }
}
