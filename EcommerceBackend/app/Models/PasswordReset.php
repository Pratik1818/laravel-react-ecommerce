<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    protected $table = 'password_resets';
    public $timestamps = false; // created_at is manually set
    protected $fillable = ['email', 'token', 'created_at'];
    public $incrementing = false; // no id column
    protected $primaryKey = null; // important so Eloquent doesn't expect an id
}
