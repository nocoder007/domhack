<?php

namespace App\Events\AltrpEvents;

use App\AltrpModels\customer;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class customerEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $customer;

    /**
     * Create a new event instance.
     *
     * @param customer $customer
     * @return void
     */
    public function __construct(customer $customer)
    {
        $this->customer = $customer;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel("altrpchannel.customer");
    }
}
