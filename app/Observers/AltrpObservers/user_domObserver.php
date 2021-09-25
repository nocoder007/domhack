<?php

namespace App\Observers\AltrpObservers;

use App\Altrp\Model;
// use App\Events\AltrpEvents\user_domEvent;
use App\Helpers\Classes\CurrentEnvironment;
use App\Jobs\RunRobotsJob;
use App\Observers\BaseObserver;
use App\Services\Robots\RobotsService;
use App\AltrpModels\user_dom;
use Illuminate\Foundation\Bus\DispatchesJobs;

class user_domObserver extends BaseObserver
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
     * Handle the user_dom "created" event.
     *
     * @param  \App\AltrpModels\user_dom $user_dom
     * @return void
     */
    public function created(user_dom $user_dom)
    {
        $model = Model::where('name', 'user_dom')->first();
        $source = $model->altrp_sources->where('type', 'add')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $user_dom,
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
     * Handle the user_dom "updated" event.
     *
     * @param  \App\AltrpModels\user_dom $user_dom
     * @return void
     */
    public function updated(user_dom $user_dom)
    {
        $model = Model::where('name', 'user_dom')->first();
        $source = $model->altrp_sources->where('type', 'update')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $user_dom,
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
     * Handle the user_dom "deleted" event.
     *
     * @param  \App\AltrpModels\user_dom $user_dom
     * @return void
     */
    public function deleted(user_dom $user_dom)
    {
        $model = Model::where('name', 'user_dom')->first();
        $source = $model->altrp_sources->where('type', 'delete')->first();
        $columns = explode(',',$model->table->columns->implode('name',','));

        $data = [
            'model' => $model,
            'source' => $source,
            'columns' => $columns,
            'record' => $user_dom,
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
     * Handle the user_dom "restored" event.
     *
     * @param  \App\AltrpModels\user_dom $user_dom
     * @return void
     */
    public function restored(user_dom $user_dom)
    {
        //
    }

    /**
     * Handle the user_dom "force deleted" event.
     *
     * @param  \App\AltrpModels\user_dom $user_dom
     * @return void
     */
    public function forceDeleted(user_dom $user_dom)
    {
        //
    }
}