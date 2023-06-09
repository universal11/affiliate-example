<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Classes\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Exception;
use Storage;
use File;

class AffiliateController extends Controller
{

    public function getAll(Request $request){

        $filePath = storage_path() . "/app/affiliates.txt";
        $records = [];
        foreach(File::lines($filePath) as $line){
            $records[] = json_decode($line);
        }
        return Response::initWithSuccess($records)->toJson();
    }
}
