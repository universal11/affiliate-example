<?php

namespace App\Classes;

class Coordinate {
    public $latitude;
    public $longitude;

    public static function initWithLatitudeAndLongitude(
        $latitude,
        $longitude
    ){
        $coordinate = new Coordinate();
        $coordinate->latitude = $latitude;
        $coordinate->longitude = $longitude;
        return $coordinate;
    }

    public function getKilometerDistance($coordinate){
        $earthRadius = 6371;
  
        $originLatitude = deg2rad($this->latitude);
        $originLongitude = deg2rad($this->longitude);
        $destinationLatitude = deg2rad($coordinate->latitude);
        $destinationLongitude = deg2rad($coordinate->longitude);

        $latitudeDelta = $destinationLatitude - $originLatitude;
        $longitudeDelta = $destinationLongitude - $originLongitude;

        $angle = 2 * asin(sqrt(pow(sin($latitudeDelta / 2), 2) + cos($originLatitude) * cos($destinationLatitude) * pow(sin($longitudeDelta / 2), 2)));
        return $angle * $earthRadius;
    }

}