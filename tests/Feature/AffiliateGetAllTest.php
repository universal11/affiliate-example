<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AffiliateGetAllTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_get_all_affiliates(): void
    {
        $response = $this->get('/api/affiliate/getAll');

        $response->assertStatus(200);
    }
}
