<?php

use Illuminate\Database\Seeder;

class StyleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('styles')->insert([
            'name' => 'Saved Style $1',
            'type' => 'BorderRadius',
            'code' => '-webkit-border-radius:2px 2px 2px 2px;
border-radius:2px 2px 2px 2px;',
            'user_id' => '1'
        ]);
        
        DB::table('styles')->insert([
            'name' => 'Saved Style $3',
            'type' => 'BorderRadius',
            'code' => '-webkit-border-radius:12px 5px 12px 2px;
border-radius:12px 5px 12px 2px;',
            'user_id' => '1'
        ]);


        DB::table('styles')->insert([
            'name' => 'Saved Style $2',
            'type' => 'BoxShadow',
            'code' => '-webkit-box-shadow:inset 12px 2px 3px 5px #ffdbbf;
box-shadow:inset 12px 2px 3px 5px #ffdbbf;',
            'user_id' => '1'
        ]);
        
        
    }
}
