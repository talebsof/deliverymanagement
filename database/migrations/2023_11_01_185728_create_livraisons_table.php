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
        Schema::create('livraisons', function (Blueprint $table) {
            $table->id();
            $table->string('address');
            $table->enum('status', ['pending', 'completed', 'cancelled']);
            $table->string('receiver_name');
            $table->string('receiver_phone');
            $table->double('delivery_latitude', 10, 8);
            $table->double('delivery_longitude', 11, 8);
            $table->string('pickup_address');
            $table->string('dropoff_address');
            $table->foreignId('tournee_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livraisons');
    }
};
