<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tournees extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'start_date', 'end_date', 'starting_point_latitude','starting_point_longitude'];


}
