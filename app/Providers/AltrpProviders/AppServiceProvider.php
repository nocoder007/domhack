<?php


namespace App\Providers\AltrpProviders;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \App\AltrpModels\user_dom::observe(\App\Observers\AltrpObservers\user_domObserver::class);

        \App\AltrpModels\customer::observe(\App\Observers\AltrpObservers\customerObserver::class);

        \App\AltrpModels\bank::observe(\App\Observers\AltrpObservers\bankObserver::class);


    }
}