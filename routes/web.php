<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::view('/dashboard','sections.dashboard')->name('dashboard');
Route::view('/storage','sections.storage')->name('storage');
Route::view('/fix_issues','sections.fix_issues')->name('fix_issues');
Route::view('/comments','sections.comments')->name('comments');
Route::view('/settings','sections.settings')->name('settings');
Route::get('/template', function () {
    return view('template');
})->name('template');
