<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LivraisonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'pickup_address' => $this->pickup_address, // Assuming there's a field like this
            'dropoff_address' => $this->dropoff_address, // Assuming there's a field like this
            'tournee' => new TourneeResource($this->whenLoaded('tournee'))
        ];
    }
}
