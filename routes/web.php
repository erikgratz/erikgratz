<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
$exitCode = \Illuminate\Support\Facades\Artisan::call('storage:link', [] );
//echo $exitCode; // 0 exit code for no errors.

Route::get('/', function () {
    //\Illuminate\Support\Facades\Log::error('FUCKING LOGGED');
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/play', function() {
    return Inertia::render('Playground', [
        //...
    ]);
});

Route::get('/mock/{page}', function($page) {
    return Inertia::render('Mocks', [
        'page' => $page,
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'phone' => config('contact.phone'),
        'email' => config('contact.email'),
        'resumeUrl' => config('contact.resumeUrl'),
        'submitButtonText' => \Illuminate\Support\Collection::make(['Validate me...', 'I\'m hungry, feed me words.', 'I love you.', 'You matter.'])->random(),
    ]);
})->name('contact');

Route::get('/wedding', function(){
    return Inertia::render('Wedding', []);
});

//Route::post('/contact', function(\Illuminate\Http\Request $request){
//    $to_name = 'erikgratz.com contact message';
//    $to_email = 'erikgratz110@gmail.com';
//    $form = $request->all();
//    $data = array(
//        'name' => (string)$form['name'],
//        "contact" => (string)$form['contact'],
//        "messages" => (string)$form['message']);
//\Illuminate\Support\Facades\Mail::send('emails.mail', $data, function($message) use ($to_name, $to_email) {
//    $message->to($to_email, $to_name)
//        ->subject('Message Received!');
//    $message->from('chkltlabs@gmail.com','Message Messenger');
//});
//return response()->redirectTo('/donate');
//});

Route::resource('contacts', \App\Http\Controllers\ContactController::class)->except('update','delete');

Route::get('/blog', function(){
    return Inertia::render('Blog', [
        'posts' => \App\Models\BlogPost::public()->with('author')->get(),
        'inspire' => \Illuminate\Support\Collection::make(config('inspire'))->random(),
    ]);
});

Route::get('/portfolio', function(){
    return Inertia::render('Portfolio', [
        'portfolioThings' => config('portfolio')
    ]);
});

Route::get('/donate', function() {
    return Inertia::render('Donate', [
        'walletCodes' => config('crypto.walletPublicCodes'),
        'iconSvgPaths' => config('crypto.coinIcons'),
        'socials' => config('socials'),
        'charities' => config('charity'),
    ]);
});

Route::middleware(['auth', 'verified'])->group(function (){
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/blog/listing', function(){
        return Inertia::render('BlogList', [
            'BlogPosts' => \App\Models\BlogPost::with('author')->get(),
        ]);
    })->name('posts');

    Route::resource('contacts', \App\Http\Controllers\ContactController::class)->only('update','delete');

    Route::get('/blog/edit/{blog_post_id}', function($blog_post_id){
        //getting existing tags
        $posts = \App\Models\BlogPost::all('tags')->toArray();
        $posts = array_column($posts, 'tags');
        $tags = [];
        foreach($posts as $tagArr){
            if($tagArr){
                $tags = array_merge($tags, $tagArr);
            }
        }
        $tags = array_unique($tags);
        $tags = array_combine(array_values($tags),array_values($tags));
        return Inertia::render('BlogEdit', [
            'BlogPost' => \App\Models\BlogPost::with('author')->find($blog_post_id),
            'mode' => 'edit',
            'multiOptions' => $tags
            ]);
    });

    Route::post('/blog/edit/{blog_post_id}', function(\Illuminate\Http\Request $request, $blog_post_id){
        if($blog_post_id == $request->get('id')){
            $post = \App\Models\BlogPost::find($blog_post_id)->update($request->all());
            return redirect('/blog/listing')->with('success', 'BlogPost saved!');
        }
        return redirect()->back()->with('error', 'Post not saved! ID Mismatch!');
    });

    Route::get('/blog/new', function(){
       return Inertia::render('BlogEdit', [
           'BlogPost' => new \App\Models\BlogPost(),
           'mode' => 'new',
       ]);
    });

    Route::post('/blog/new', function(\Illuminate\Http\Request $request){
        \App\Models\BlogPost::create($request->all());
        return redirect('/blog/listing')->with('success', 'BlogPost saved!');
    });

});


require __DIR__.'/auth.php';
