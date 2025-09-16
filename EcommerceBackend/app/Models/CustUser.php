<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class CustUser extends Authenticatable
{
    use HasFactory;

    protected $table = 'cust_users'; // ✅ table name

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'mobile',
        'password',
    ];

    protected $hidden = [
        'password',
    ];
}
