<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livraisons extends Model
{
    use HasFactory;

    protected $fillable = ['pickup_address', 'dropoff_address','status', 'receiver_name', 'receiver_phone', 'delivery_latitude', 'delivery_longitude'];

}
