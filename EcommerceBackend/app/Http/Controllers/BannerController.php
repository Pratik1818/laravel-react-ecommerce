<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BannerController extends Controller
{

    // list all banners
    public function index()
    {
        return Banner::latest()->get();
    }

    /* Store new Banner*/
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:20000',
            'status' => 'required|in:active,inactive',
        ]);

        $path = $request->file('image')->store('banners', 'public');

        $banner = Banner::create([
            'title' => $request->title,
            'image' => $path,
            'status' => $request->status,
        ]);

        return response()->json($banner, 201);
    }

    /* show single banner*/
    public function show(Banner $banner)
    {
        return $banner;
    }

    /* Update Banner */
    public function update(Request $request, Banner $banner)
    {
        $request->validate([
             'title' => 'nullable|string|max:255',
             'image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:9048',
             'status' => 'required|in:active,inactive',
        ]);

        if($request->hasFile('image'))
        {
            if($banner->image && Storage::disk('public')->exists($banner->image))
            {
                Storage::disk('public')->delete($banner->image);
            }
            $path = $request->file('image')->store('banners', 'public');
            $banner->image = $path;
        }
        $banner->title = $request->title;
        $banner->status = $request->status;
        $banner->save();

        return response()->json($banner);
    }

    /* Delete Banner*/
    public function destroy(Banner $banner)
    {
        if($banner->image && Storage::disk('public')->exists($banner->image)){
            Storage::disk('public')->delete($banner->image);
            
        }
        $banner->delete();

        return response()->json(['message' => 'Banner deleted successfully']);
    }
}
