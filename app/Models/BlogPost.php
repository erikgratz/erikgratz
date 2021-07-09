<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = ['title','user_id','posted','edited','subtitle','body','is_public'];

    protected $dates = ['posted','edited'];

    protected $casts = ['is_public' => 'bool'];

    const NOT_POSTED = 'not posted';
    const NOT_EDITED = 'never edited';

    //on-save, update edited / posted
    protected static function boot()
    {
        static::saving(function($blogPost){
            if($blogPost->posted == self::NOT_POSTED && $blogPost->is_public == true){
                $blogPost->posted = Carbon::now()->toDateTime();
            }
            $blogPost->edited = Carbon::now()->toDateTime();

        });
        parent::boot(); // TODO: Change the autogenerated stub
    }

    //accessors & mutators
    public function getPostedAttribute($value){
        return $value !== null ? Carbon::parse($value)->diffForHumans(Carbon::now()) . ' now' : self::NOT_POSTED;
    }
    public function getEditedAttribute($value){
        return $value !== null ? Carbon::parse($value)->diffForHumans(Carbon::now()) . ' now' : self::NOT_EDITED;
    }

    //scopes
    public function scopePublic($query){
        return $query->where('is_public', true);
    }

    //relations
    public function author(){
        return $this->hasOne(\App\Models\User::class, 'id', 'user_id');
    }
}
