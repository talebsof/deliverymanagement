<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Livraisons;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Resources\LivraisonResource;

class LivraisonsController extends Controller
{
    public function index()
    {
        return LivraisonResource::collection(Livraisons::paginate());
    }

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

    public function show(Livraisons $livraison)
    {
        return new LivraisonResource($livraison);
    }

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

    public function destroy(Livraisons $livraison)
    {
        $livraison->delete();

        return response()->json(null, 204);
    }
}
