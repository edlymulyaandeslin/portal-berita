<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sosmed extends Model
{
    /** @use HasFactory<\Database\Factories\SosmedFactory> */
    use HasFactory;

    protected $guarded = ['id'];
}