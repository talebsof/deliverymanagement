<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LivraisonsController;
use App\Http\Controllers\LivreursController;
use App\Http\Controllers\TourneesController;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Livraisons Routes
Route::apiResource('livraisons', LivraisonsController::class);

// Livreurs Routes
Route::apiResource('livreurs', LivreursController::class);

// Tournees Routes
Route::apiResource('tournees', TourneesController::class);

Route::post('/register', [Controller::class, 'register']);
Route::post('/login', [Controller::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [Controller::class, 'logout']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
