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
        Schema::create('livreurs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname');
            $table->string('phone_number');
            $table->enum('status', ['available', 'unavailable'])->default('unavailable');
        });
        DB::statement('ALTER TABLE livreurs ADD CONSTRAINT check_phone_number CHECK (phone_number ~ E\'^\+?[0-9]{1,15}$\')');

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livreurs');
    }
};


/* data to insert for testing :
INSERT INTO livreurs (name, surname, phone_number, status) VALUES
  ('John', 'Doe', '+1234567890', 'unavailable'),
  ('Jane', 'Doe', '+9876543210', 'available'),
  ('Alice', 'Smith', '+1122334455', 'unavailable'),
  ('Bob', 'Johnson', '+9988776655', 'available'),
  ('Charlie', 'Brown', '+5544332211', 'unavailable'),
  ('David', 'Miller', '+6677889900', 'available'),
  ('Eva', 'Wilson', '+1122337788', 'unavailable'),
  ('Frank', 'Taylor', '+4455667788', 'available'),
  ('Grace', 'Moore', '+9988772233', 'unavailable'),
  ('Henry', 'Jones', '+7788990011', 'available'),
  ('Ivy', 'Clark', '+1122334455', 'unavailable'),
  ('Jack', 'Martin', '+3366998877', 'available'),
  ('Katie', 'White', '+1122334455', 'unavailable'),
  ('Leo', 'Adams', '+1122334455', 'available'),
  ('Mia', 'Hill', '+1122334455', 'unavailable');

  */
