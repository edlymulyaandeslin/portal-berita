<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SosmedResource\Pages;
use App\Models\Sosmed;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SosmedResource extends Resource
{
    protected static ?string $model = Sosmed::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('link_ig')
                    ->label("Link Instagram")
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('link_fb')
                    ->label("Link Facebook")
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('link_yt')
                    ->label("Link Youtube")
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('link_tiktok')
                    ->label("Link Tiktok")
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('link_ig')
                    ->searchable(),
                Tables\Columns\TextColumn::make('link_fb')
                    ->searchable(),
                Tables\Columns\TextColumn::make('link_yt')
                    ->searchable(),
                Tables\Columns\TextColumn::make('link_tiktok')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSosmeds::route('/'),
            'create' => Pages\CreateSosmed::route('/create'),
            'edit' => Pages\EditSosmed::route('/{record}/edit'),
        ];
    }
}