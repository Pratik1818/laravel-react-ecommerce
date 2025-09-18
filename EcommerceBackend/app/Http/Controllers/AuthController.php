<?php
namespace App\Http\Controllers;

use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\UpdateProfileRequest;
use App\Models\CustUser;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
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
            'message' => 'Registration successful! Redirecting to login...',
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

    // Prepare clean user data
    $userData = [
        'id'         => $user->id,
        'first_name' => $user->first_name,
        'last_name'  => $user->last_name,
        'email'      => $user->email,
    ];

    return response()->json([
        'message' => 'Login successful',
        'user'    => $userData,
        'token'   => $token,
    ]);
}

 // Get logged in user data
    public function getProfile()
    {
        $user = Auth::user();
        return response()->json([
            'user' => $user
        ]);
    }

    // Update profile
   public function updateProfile(UpdateProfileRequest $request)
{
    $user = Auth::user();

    // Update using correct column names
    $user->update([
        'first_name' => $request->firstName,
        'last_name'  => $request->lastName,
        'email'      => $request->email,
        'mobile'     => $request->mobile,
    ]);

    return response()->json([
        'message' => 'Profile updated successfully',
        'user' => $user
    ]);
}

}
