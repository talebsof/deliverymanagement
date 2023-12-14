<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livreurs extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'surname', 'phone_number', 'status'];

    public function tournees()
    {
        return $this->hasMany(Tournees::class);
    }
}
