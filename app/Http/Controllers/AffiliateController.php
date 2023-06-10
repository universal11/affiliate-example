<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Classes\Response;
use App\Classes\Coordinate;
use App\Models\Affiliate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Exception;
use Storage;
use File;

class AffiliateController extends Controller
{

    public function getAll(Request $request){
        $affiliates = Affiliate::all();
        return Response::initWithSuccess($affiliates)->toJson();
    }

    public function search(Request $request){
        $affiliateSearch = (object)$request->json()->all();
        if(
            $affiliateSearch->latitude == null
            || $affiliateSearch->longitude == null
            || $affiliateSearch->maxDistanceInKilometers == null
        ){
            return Response::initWithSuccess([])->toJson();
        }
        $affiliates = [];
        $destinationCoordinate = Coordinate::initWithLatitudeAndLongitude(
            $affiliateSearch->latitude,
            $affiliateSearch->longitude
        );

        foreach(Affiliate::all() as $affiliate){
            $affiliate->distance_in_kilometers = bcdiv($affiliate->getDistanceInKilometersFrom($destinationCoordinate), 1, 2);
            if( $affiliate->distance_in_kilometers <= $affiliateSearch->maxDistanceInKilometers ){
                $affiliates[] = $affiliate;
            }
        }
        return Response::initWithSuccess($affiliates)->toJson();
    }
}
