<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Affiliate extends Model
{
    use HasFactory;

    protected $guarded = [
        "id",
        "created_at",
        "updated_at"
    ];

    protected $hidden = [

    ];

    public function getCoordinate(){
        return Coordinate::initWithLatitudeAndLongitude($this->latitude, $this->longitude);
    }

}
