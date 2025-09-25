<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $table = 'product_images';
    protected $primaryKey = 'id';

    protected $fillable = ['product_id','image_url','is_main','view_type'];

    public function product()
    {
        return $this->belongsTo(ProductInfo::class, 'product_id', 'product_id');
    }
}
?>