<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Genre::create([
            'name'=>'umkm',
            'description'=>'memajukan usaha menjadi negara'
        ]);

        Genre::create([
            'name'=>'Pemerintah',
            'description'=>'memberikan pelayanan pemerintah terbaik'
        ]);

        Genre::create([
            'name'=>'Layanan',
            'description'=>'memberikan jasa terbaik dari pelosok negri'
        ]);

        Genre::create([
            'name'=>'Pendidikan',
            'description'=>'menyediakan pendidikan nomor 1'
        ]);

        Genre::create([
            'name'=>'Data',
            'description'=>'manajemen terbaik seleuruh negri'
        ]);
    }
}
