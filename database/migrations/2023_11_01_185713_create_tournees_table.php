<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tournees', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->double('starting_point_latitude', 10, 8);
            $table->double('starting_point_longitude', 11, 8);
            $table->date('start_date');
            $table->date('end_date');
            $table->foreignId('livreur_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournees');
    }
};
