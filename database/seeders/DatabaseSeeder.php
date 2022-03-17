<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\BlogPost::truncate();
        \App\Models\BlogPost::factory()->count(5)->create();
        $this->call(ContactSeeder::class);
        $this->call(FriendSeeder::class);
        $this->call(FriendPlaceRecommendationSeeder::class);
    }
}
