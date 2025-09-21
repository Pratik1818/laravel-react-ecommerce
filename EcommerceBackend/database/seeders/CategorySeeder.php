<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::table('categories')->insert([
        ['category_name' => 'Technology', 'parent_category_id' => null],
        ['category_name' => 'FURNITURE & INTERIORS', 'parent_category_id' => null],
        ['category_name' => 'SCHOOL SUPPLIES', 'parent_category_id' => null],
        ['category_name' => 'HOME & KITCHEN', 'parent_category_id' => null], 
        ['category_name' => 'Fashion', 'parent_category_id' => null]
        ]);

}
}
