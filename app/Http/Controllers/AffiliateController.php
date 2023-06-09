<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Classes\Response;
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

    public function getByCoordinates(Request $request){
        $data = $request->json()->all();
        $affiliates = Affiliate::all();
        return Response::initWithSuccess($affiliates)->toJson();
    }
}
