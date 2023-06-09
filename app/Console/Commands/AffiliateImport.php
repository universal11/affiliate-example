<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use File;
use App\Models\Affiliate;

class AffiliateImport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'affiliate:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Imports affiliates from text file';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $filePath = storage_path() . "/app/affiliates.txt";
        foreach(File::lines($filePath) as $line){
            $record = json_decode($line);
            if(Affiliate::find($record->affiliate_id) == null){
                $affiliate = new Affiliate();
                $affiliate->id = $record->affiliate_id;
                $affiliate->name = $record->name;
                $affiliate->latitude = $record->latitude;
                $affiliate->longitude = $record->longitude;
                $affiliate->save();
            }
        }


    }
}
