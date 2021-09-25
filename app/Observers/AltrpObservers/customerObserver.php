<?php

namespace App\Observers\AltrpObservers;

use App\Altrp\Model;
// use App\Events\AltrpEvents\customerEvent;
use App\Helpers\Classes\CurrentEnvironment;
use App\Jobs\RunRobotsJob;
use App\Observers\BaseObserver;
use App\Services\Robots\RobotsService;
use App\AltrpModels\customer;
use Illuminate\Foundation\Bus\DispatchesJobs;

class customerObserver extends BaseObserver
{
    use DispatchesJobs;

    /**
     * @var RobotsService
     */
    protected $robotsService;

    /**
     * @var CurrentEnvironment|mixed
     */
    protected $currentEnvironment;

    /**
     * test_postObserver constructor.
     * @param RobotsService $robotsService
     */
    public function __construct(RobotsService $robotsService)
    {
        $this->robotsService = $robotsService;
        $this->currentEnvironment = CurrentEnvironment::getInstance();
    }

    /**
     * Handle the customer "created" event.
     *
     * @param  \App\AltrpModels\customer $customer
     * @return void
     */
    public function created(customer $customer)
    {
        $model = Model::where('name', 'customer')->first();
        $source = $model->altrp_sources->where('type', 'add')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $customer,
            'action_type' => 'create'
        ];

        $robots = $this->robotsService->getCurrentModelRobots($model);

        $this->dispatch(new RunRobotsJob(
            $robots,
            $this->robotsService,
            $data,
            'created',
            $this->currentEnvironment
        ));
    }

    /**
     * Handle the customer "updated" event.
     *
     * @param  \App\AltrpModels\customer $customer
     * @return void
     */
    public function updated(customer $customer)
    {
        $model = Model::where('name', 'customer')->first();
        $source = $model->altrp_sources->where('type', 'update')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $customer,
            'action_type' => 'update'
        ];

        $robots = $this->robotsService->getCurrentModelRobots($model);

        $this->dispatch(new RunRobotsJob(
            $robots,
            $this->robotsService,
            $data,
            'updated',
            $this->currentEnvironment
        ));
    }

    /**
     * Handle the customer "deleted" event.
     *
     * @param  \App\AltrpModels\customer $customer
     * @return void
     */
    public function deleted(customer $customer)
    {
        $model = Model::where('name', 'customer')->first();
        $source = $model->altrp_sources->where('type', 'delete')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $customer,
            'action_type' => 'delete'
        ];

        $robots = $this->robotsService->getCurrentModelRobots($model);

        $this->dispatch(new RunRobotsJob(
            $robots,
            $this->robotsService,
            $data,
            'deleted',
            $this->currentEnvironment
        ));
    }

    /**
     * Handle the customer "restored" event.
     *
     * @param  \App\AltrpModels\customer $customer
     * @return void
     */
    public function restored(customer $customer)
    {
        //
    }

    /**
     * Handle the customer "force deleted" event.
     *
     * @param  \App\AltrpModels\customer $customer
     * @return void
     */
    public function forceDeleted(customer $customer)
    {
        //
    }
}