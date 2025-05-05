<?php

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $posts = Post::latest()->paginate(10);
    return Inertia::render('Home', [
        'posts' => $posts
    ]);
});

Route::get("/post/{post:slug}", function (Post $post) {
    return Inertia::render("Posts/Show", [
        'post' => $post
    ]);
})->name("post.show");

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';