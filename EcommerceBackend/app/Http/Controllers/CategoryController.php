<?php 

// app/Http/Controllers/CategoryController.php
namespace App\Http\Controllers;

use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        // Fetch parent categories with recursive children
        $categories = Category::whereNull('parent_category_id')
            ->with('subcategories.subcategories') // eager load nested
            ->get();

        return response()->json($categories);
    }

    public function topCategories()
    {
        $categories = Category::whereNull('parent_category_id')->get();
        return response()->json($categories);
    }
}

?>