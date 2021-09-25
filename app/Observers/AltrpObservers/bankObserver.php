<?php

namespace App\Observers\AltrpObservers;

use App\Altrp\Model;
// use App\Events\AltrpEvents\bankEvent;
use App\Helpers\Classes\CurrentEnvironment;
use App\Jobs\RunRobotsJob;
use App\Observers\BaseObserver;
use App\Services\Robots\RobotsService;
use App\AltrpModels\bank;
use Illuminate\Foundation\Bus\DispatchesJobs;

class bankObserver extends BaseObserver
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
     * Handle the bank "created" event.
     *
     * @param  \App\AltrpModels\bank $bank
     * @return void
     */
    public function created(bank $bank)
    {
        $model = Model::where('name', 'bank')->first();
        $source = $model->altrp_sources->where('type', 'add')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $bank,
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
     * Handle the bank "updated" event.
     *
     * @param  \App\AltrpModels\bank $bank
     * @return void
     */
    public function updated(bank $bank)
    {
        $model = Model::where('name', 'bank')->first();
        $source = $model->altrp_sources->where('type', 'update')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $bank,
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
     * Handle the bank "deleted" event.
     *
     * @param  \App\AltrpModels\bank $bank
     * @return void
     */
    public function deleted(bank $bank)
    {
        $model = Model::where('name', 'bank')->first();
        $source = $model->altrp_sources->where('type', 'delete')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $bank,
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
     * Handle the bank "restored" event.
     *
     * @param  \App\AltrpModels\bank $bank
     * @return void
     */
    public function restored(bank $bank)
    {
        //
    }

    /**
     * Handle the bank "force deleted" event.
     *
     * @param  \App\AltrpModels\bank $bank
     * @return void
     */
    public function forceDeleted(bank $bank)
    {
        //
    }
}