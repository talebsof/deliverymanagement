<?php

namespace App\Http\Controllers;

use App\Http\Resources\TourneesResource;
use Illuminate\Http\Request;
use App\Models\Tournees;
use Illuminate\Validation\Rule;
use App\Http\Resources\TourneeResource;

class TourneesController extends Controller
{
    public function index()
    {
        return TourneeResource::collection(Tournees::paginate());
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'livreur_id' => 'required|exists:livreurs,id',
        ]);

        $tournee = Tournees::create($validatedData);

        return new TourneeResource($tournee);
    }

    public function show(Tournees $tournee)
    {
        return new TourneeResource($tournee);
    }

    public function update(Request $request, Tournees $tournee)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'livreur_id' => 'required|exists:livreurs,id',
        ]);

        $tournee->update($validatedData);

        return new TourneeResource($tournee);
    }

    public function destroy(Tournees $tournee)
    {
        $tournee->delete();

        return response()->json(null, 204);
    }
}
