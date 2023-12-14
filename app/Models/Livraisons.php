<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livraisons extends Model
{
    use HasFactory;

    protected $fillable = ['pickup_adress', 'dropoff_adress', 'tournee_id'];

    public function tournees()
    {
        return $this->belongsTo(Tournees::class);
    }
}
