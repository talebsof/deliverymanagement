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
            $table->enum('status', ['pending', 'completed', 'cancelled'])->default('pending');;
            $table->string('receiver_name');
            $table->string('receiver_phone');
            $table->double('delivery_latitude', 10, 8);
            $table->double('delivery_longitude', 11, 8);
            $table->string('pickup_address')->nullable(false);
            $table->string('dropoff_address');
            $table->timestamps();
        });
        DB::statement("ALTER TABLE livraisons ADD CONSTRAINT check_receiver_phone CHECK (receiver_phone ~ E'^\\\\+?[0-9]{1,15}$')");

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livraisons');
    }
};


/* script to insert for testing :
-- Insert data into the livraisons table
INSERT INTO livraisons (status, receiver_name, receiver_phone, delivery_latitude, delivery_longitude, pickup_address, dropoff_address) VALUES
  ('pending', 'John Doe', '+1234567890', 37.7749, -122.4194, '123 Main St, Cityville', '456 Oak St, Townsville'),
  ('completed', 'Jane Smith', '+9876543210', 40.7128, -74.0060, '789 Elm St, Villageton', '101 Pine St, Hamletville'),
  ('pending', 'Alice Johnson', '+1122334455', 51.5074, -0.1278, '456 Birch St, Countryside', '789 Maple St, Farmland'),
  ('cancelled', 'Bob Brown', '+9988776655', -33.8688, 151.2093, '789 Cedar St, Riverside', '234 Oak St, Hilltown'),
  ('completed', 'Charlie White', '+5544332211', 35.6895, 139.6917, '789 Pine St, Mountainside', '567 Walnut St, Valleyville'),
  ('pending', 'David Black', '+6677889900', 25.7617, -80.1918, '123 Oak St, Laketown', '890 Cedar St, Riverdale'),
  ('completed', 'Eva Green', '+1122337788', 48.8566, 2.3522, '789 Elm St, Lakeside', '345 Maple St, Riverside'),
  ('pending', 'Frank Taylor', '+4455667788', -22.9083, -43.1964, '456 Pine St, Countryside', '678 Birch St, Farmland'),
  ('cancelled', 'Grace Moore', '+9988772233', 34.0522, -118.2437, '789 Maple St, Hilltown', '901 Cedar St, Riverside'),
  ('completed', 'Henry Jones', '+7788990011', 51.1657, 10.4515, '789 Cedar St, Riverside', '123 Oak St, Countryside'),
  ('pending', 'Ivy Clark', '+1122334455', 55.7558, 37.6176, '456 Walnut St, Valleyville', '234 Pine St, Mountainside'),
  ('cancelled', 'Jack Martin', '+3366998877', 41.9028, 12.4964, '789 Oak St, Countryside', '567 Elm St, Farmland'),
  ('completed', 'Katie White', '+1122334455', 37.5665, 126.9780, '789 Birch St, Hilltown', '890 Cedar St, Riverside'),
  ('pending', 'Leo Adams', '+1122334455', 19.0760, 72.8777, '456 Cedar St, Countryside', '678 Pine St, Farmland'),
  ('cancelled', 'Mia Hill', '+1122334455', 55.7558, 37.6176, '789 Maple St, Valleyville', '901 Walnut St, Mountainside'),
  ('completed', 'Nathan Gray', '+1122334455', 45.4215, -75.6993, '123 Pine St, Riverside', '234 Elm St, Countryside');

*/
