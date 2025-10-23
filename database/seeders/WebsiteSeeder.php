<?php

namespace Database\Seeders;

use App\Models\Website;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WebsiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Website::create([
            'title'=>'Maju Lancar',
            'description'=>'Website pusat pembelian material',
            'prize'=>2000000,
            'image'=>'foto web',
            'genre_id'=>1,
            'author_id'=>1
        ]);

        Website::create([
            'title'=>'Dinas Kesehatan',
            'description'=>'Website pelayanan kesehatan masyarakat',
            'prize'=>2500000,
            'image'=>'ft web',
            'genre_id'=>2,
            'author_id'=>2
        ]);

        Website::create([
            'title'=>'Santo Suruh',
            'description'=>'Website pelayanan jasa',
            'prize'=>1500000,
            'image'=>'foto web',
            'genre_id'=>3,
            'author_id'=>3
        ]);

        Website::create([
            'title'=>'Elearning SMK Mars',
            'description'=>'Website pembelajaran sekolah',
            'prize'=>10000000,
            'image'=>'foto web',
            'genre_id'=>4,
            'author_id'=>4
        ]);

        Website::create([
            'title'=>'Alfa Cloud',
            'description'=>'Website Penyimpanan awan',
            'prize'=>5000000,
            'image'=>'foto web',
            'genre_id'=>5,
            'author_id'=>5  
        ]);
    }
}
