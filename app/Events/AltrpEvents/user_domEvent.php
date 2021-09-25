<?php

namespace App\Events\AltrpEvents;

use App\AltrpModels\user_dom;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class user_domEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user_dom;

    /**
     * Create a new event instance.
     *
     * @param user_dom $user_dom
     * @return void
     */
    public function __construct(user_dom $user_dom)
    {
        $this->user_dom = $user_dom;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel("altrpchannel.user_dom");
    }
}
