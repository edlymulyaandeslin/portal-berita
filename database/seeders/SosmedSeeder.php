<?php

namespace Database\Seeders;

use App\Models\Sosmed;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SosmedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Sosmed::create([
            'link_ig' => 'https://www.instagram.com/edlymulyaandeslin',
            'link_fb' => 'https://www.facebook.com/edlymulyaandeslin',
            'link_yt' => 'https://youtube.com/@edlymulyaandeslin',
            'link_tiktok' => 'https://www.tiktok.com/@superlin',
        ]);
    }
}