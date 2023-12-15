<?php
namespace App;

/**
 * @OA\Info(
 *      title="Delivery Managment API",
 *      version="1.0.0",
 *      description="gestion de livraison api",
 *      @OA\Contact(
 *          email="laid.taleb-benkhlouf@univ-rouen.fr"
 *      )
 * )
 *
 * @OA\Schema(
 *     schema="LivraisonResource",
 *     type="object",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="pickup_address", type="string"),
 *     @OA\Property(property="dropoff_address", type="string"),
 *     @OA\Property(property="tournee", type="object", ref="#/components/schemas/TourneeResource")
 * )
 *
 * @OA\Schema(
 *     schema="LivreurResource",
 *     type="object",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="name", type="string"),
 *     @OA\Property(property="surname", type="string"),
 *     @OA\Property(property="phone_number", type="string"),
 *     @OA\Property(property="status", type="string"),
 *     @OA\Property(property="tournees", type="array", @OA\Items(ref="#/components/schemas/TourneeResource"))
 * )
 *
 * @OA\Schema(
 *     schema="TourneeResource",
 *     type="object",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="name", type="string"),
 *     @OA\Property(property="start_date", type="string", format="date"),
 *     @OA\Property(property="end_date", type="string", format="date"),
 *     @OA\Property(property="livreur_id", type="integer"),
 *     @OA\Property(property="livraisons", type="array", @OA\Items(ref="#/components/schemas/LivraisonResource"))
 * )
 */
