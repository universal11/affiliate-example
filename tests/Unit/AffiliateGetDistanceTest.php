<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Classes\Coordinate;
use App\Models\Affiliate;

class AffiliateGetDistanceTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_affiliate_get_distance(): void
    {
        $coordinate = Coordinate::initWithLatitudeAndLongitude(53.3340285, -6.2535495);
        foreach(Affiliate::all() as $affiliate){
            $affiliate->getDistanceInKilometersFrom($coordinate);
        }
        $this->assertTrue(true);
    }
}
