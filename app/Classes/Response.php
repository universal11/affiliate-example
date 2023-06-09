<?php

namespace App\Classes;

class Response {
    public $code;
    public $data;
    public $isSuccess;
    public $message;

    public function init($code, $data, $isSuccess, $message = null){
        $this->code = $code;
        $this->data = $data;
        $this->isSuccess = $isSuccess;
        $this->message = $message;
    }

    public static function initWithSuccess(
        $data = null, 
        $code = HttpStatusCode::OK,
        $message = null
    ){
        $response = new Response();
        $response->init(
            $code,
            $data,
            true,
            $message
        );
        return $response;
    }

    public static function initWithException($exception){
        $response = new Response();
        $response->init(
            HttpStatusCode::BAD_REQUEST,
            null,
            false,
            $exception->getMessage()
        );
        return $response;
    }

    public static function initWithError(
        $data = null, 
        $code = HttpStatusCode::BAD_REQUEST,
        $message = null
    ){
        $response = new Response();
        $response->init(
            $code,
            $data,
            false,
            $message
        );
        return $response;
    }

    public function toJson(){
        return response()->json(
            $this,
            $this->code
        );
    } 
}
