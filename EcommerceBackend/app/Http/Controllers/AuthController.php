<?php
namespace App\Http\Controllers;

use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\CustUser;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = CustUser::create([
            'first_name' => $request->firstName,
            'last_name'  => $request->lastName,
            'email'      => $request->email,
            'mobile'     => $request->mobile,
            'password'   => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'Registration successful',
            'user'    => $user,
        ], 201);
    }

    public function login(LoginRequest $request)
    {
        $user = CustUser::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password.'
            ], 401);
        }

        // Issue Sanctum token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'user'    => $user,
            'token'   => $token,
        ]);
    }
}
