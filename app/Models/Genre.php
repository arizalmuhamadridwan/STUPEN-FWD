<?php

namespace App\Models;

class Genre
{
    public static function all()
    {
        return [
            ['id' => 1, 'name' => 'penjualan', 'description' => 'untuk keperluan jualan umkm'],
            ['id' => 2, 'name' => 'sekolah', 'description' => 'untuk keperluan edukasi'],
            ['id' => 3, 'name' => 'perusahaan', 'description' => 'untuk keperluan sistem perusahaan'],
            ['id' => 4, 'name' => 'toko online', 'description' => 'untuk keperluan penjualan online'],
            ['id' => 5, 'name' => 'pemerintahan', 'description' => 'untuk keperluan layanan pemerintahan'],
        ];
    }
}
