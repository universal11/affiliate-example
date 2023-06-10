<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AffiliateSearchDublinTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_search_for_affiliates_near_dublin(): void
    {
        $response = $this->postJson('/api/affiliate/search', [
            "latitude" => 53.3340285,
            "longitude" => -6.2535495,
            "maxDistanceInKilometers" => 100
        ]);

        $response->assertStatus(200);
    }
}
