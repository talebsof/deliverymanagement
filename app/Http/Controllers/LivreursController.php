<?php

namespace App\Http\Controllers;

use App\Models\Livreurs;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Resources\LivreurResource;

class LivreursController extends Controller
{
    public function index()
    {
        return LivreurResource::collection(Livreurs::paginate());
    }

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

    public function show(Livreurs $livreur)
    {
        return new LivreurResource($livreur);
    }

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

    public function destroy(Livreurs $livreur)
    {
        $livreur->delete();

        return response()->json(null, 204);
    }
}
