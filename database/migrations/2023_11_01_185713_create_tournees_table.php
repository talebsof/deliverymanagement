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
            $table->double('starting_point_latitude', 10, 8);
            $table->double('starting_point_longitude', 11, 8);
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();
        });
        DB::statement('ALTER TABLE tournees ADD CONSTRAINT check_end_date_after_start_date CHECK (end_date > start_date)');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournees');
    }
};

/* script to insert for testing :
-- Insert data into the tournees table
INSERT INTO tournees (starting_point_latitude, starting_point_longitude, start_date, end_date) VALUES
  (37.7749, -122.4194, '2023-01-01', '2023-01-10'),
  (40.7128, -74.0060, '2023-02-15', '2023-02-25'),
  (51.5074, -0.1278, '2023-03-20', '2023-04-01'),
  (-33.8688, 151.2093, '2023-05-05', '2023-05-15'),
  (35.6895, 139.6917, '2023-06-10', '2023-06-20'),
  (25.7617, -80.1918, '2023-07-15', '2023-07-25'),
  (48.8566, 2.3522, '2023-08-20', '2023-08-30'),
  (-22.9083, -43.1964, '2023-09-05', '2023-09-15'),
  (34.0522, -118.2437, '2023-10-10', '2023-10-20'),
  (51.1657, 10.4515, '2023-11-15', '2023-11-25'),
  (55.7558, 37.6176, '2023-12-01', '2023-12-10'),
  (-34.6076, -58.4371, '2024-01-05', '2024-01-15'),
  (41.9028, 12.4964, '2024-02-10', '2024-02-20'),
  (37.5665, 126.9780, '2024-03-15', '2024-03-25'),
  (19.0760, 72.8777, '2024-04-10', '2024-04-20'),
  (55.7558, 37.6176, '2024-05-05', '2024-05-15');

*/
