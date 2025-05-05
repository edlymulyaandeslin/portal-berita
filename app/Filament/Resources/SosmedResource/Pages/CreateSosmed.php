<?php

namespace App\Filament\Resources\SosmedResource\Pages;

use App\Filament\Resources\SosmedResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateSosmed extends CreateRecord
{
    protected static string $resource = SosmedResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        // Hapus data lama sebelum menyimpan data baru
        static::getModel()::query()->delete();

        return $data;
    }
}