<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tournees extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'start_date', 'end_date', 'livreur_id'];

    public function livreurs()
    {
        return $this->belongsTo(Livreurs::class, 'livreur_id');
    }

    public function livraisons()
    {
        return $this->hasMany(Livraisons::class);
    }
}
