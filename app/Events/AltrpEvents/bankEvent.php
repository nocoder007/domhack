<?php

namespace App\Events\AltrpEvents;

use App\AltrpModels\bank;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class bankEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $bank;

    /**
     * Create a new event instance.
     *
     * @param bank $bank
     * @return void
     */
    public function __construct(bank $bank)
    {
        $this->bank = $bank;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel("altrpchannel.bank");
    }
}
