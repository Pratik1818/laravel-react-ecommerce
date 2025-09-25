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

     public function getCategoryProducts($category_id)
    {
        // Fetch subcategories of this category
        $subcategories = Category::where('parent_category_id', $category_id)->get();

        if ($subcategories->isNotEmpty()) {
            // If category has child categories, get 1 product per subcategory
            $products = [];

            foreach ($subcategories as $subcategory) {
                $product = ProductInfo::where('category_id', $subcategory->category_id)
                    ->with(['images' => function($q){
                        $q->where('is_main', 1);
                    }])
                    ->first(); // only one product

                if ($product) {
                    // Update image URLs
                    $product->images->transform(function ($img) {
                        $img->image_url = asset('storage/'.$img->image_url);
                        return $img;
                    });

                    $products[] = [
                        'subcategory_id' => $subcategory->category_id,
                        'subcategory_name' => $subcategory->category_name,
                        'product' => $product
                    ];
                }
            }

            return response()->json([
                'type' => 'category_preview', // frontend can render category preview
                'data' => $products
            ]);

        } else {
            // If no child categories, return all products of this category
            $products = ProductInfo::where('category_id', $category_id)
                ->with(['images' => function($q){
                    $q->where('is_main',1);
                }])
                ->get();

            $products->transform(function ($product) {
                $product->images->transform(function ($img) {
                    $img->image_url = asset('storage/'.$img->image_url);
                    return $img;
                });
                return $product;
            });

            return response()->json([
                'type' => 'product_listing', // frontend can render product listing
                'data' => $products
            ]);
        }
    }
}

?>