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
            'pickup_address' => $this->pickup_address,
            'dropoff_address' => $this->dropoff_address,
            'status' => $this->status,
            'receiver_name' => $this->receiver_name,
            'receiver_phone' => $this->receiver_phone,
            'delivery_latitude' => $this->delivery_latitude,
            'delivery_longitude' => $this->delivery_longitude,
        ];
    }
}
