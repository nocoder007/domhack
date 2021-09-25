<?php $__env->startSection('content'); ?>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <nav class="pb-3">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-dashboard-tab" data-toggle="tab" href="#nav-dashboard" role="tab" aria-controls="nav-dashboard" aria-selected="true">Dashboard</a>
                        <a class="nav-item nav-link" id="nav-settings-tab" data-toggle="tab" href="#nav-settings" role="tab" aria-controls="nav-settings" aria-selected="false">Settings</a>
                    </div>
                </nav>

                <?php if(session()->has('message')): ?>
                    <div class="alert alert-<?php echo e(session('class')); ?> alert-dismissible fade show" role="alert">
                        <?php echo session('message'); ?>

                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <?php endif; ?>

                <div class="row">
                    <div class="col-md-6">

                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-dashboard" role="tabpanel" aria-labelledby="nav-dashboard-tab">

                                <form class="webhook-info" action="<?php echo e(route('telegrambot.get_webhook_info')); ?>" method="POST">
                                    <?php echo csrf_field(); ?>
                                </form>
                                <form class="webhook-set" action="<?php echo e(route('telegrambot.set_webhook')); ?>" method="POST">
                                    <div class="form-group">
                                        <label for="url">Webhook URI</label>
                                        <input type="text" class="form-control" name="url" id="url" value="<?php echo e(config('telebot.bots.' . config('telebot.default') . '.webhook.url')); ?>">
                                    </div>
                                    <?php echo csrf_field(); ?>
                                </form>
                                <form class="webhook-delete" action="<?php echo e(route('telegrambot.delete_webhook')); ?>" method="POST">
                                    <?php echo method_field('DELETE'); ?>
                                    <?php echo csrf_field(); ?>
                                </form>

                                <div class="form-group">
                                    <label for="action">Action</label>
                                    <select class="form-control select-action" id="action" name="action">
                                        <option value="info">Get information</option>
                                        <option value="set">Set webhook</option>
                                        <option value="delete">Delete webhook</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary" onclick="let val = $('.select-action').val(); $('.webhook-' + val).submit() ">Send</button>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-settings" role="tabpanel" aria-labelledby="nav-settings-tab">
                                <form action="<?php echo e(route('telegrambot.settings')); ?>" method="POST">
                                    <?php echo csrf_field(); ?>
                                    <div class="form-group">
                                        <label for="bot_name">Telegram bot name</label>
                                        <input type="text" class="form-control" name="bot_name" id="bot_name" value="<?php echo e(config('telebot.default')); ?>">
                                    </div>
                                    <div class="form-group">
                                        <label for="bot_token">Telegram bot API token</label>
                                        <input type="text" class="form-control" name="bot_token" id="bot_token" value="<?php echo e(config('telebot.bots.' . config('telebot.default') . '.token')); ?>">
                                    </div>
                                    <div class="form-group">
                                        <label for="bot_cert_path">Path to SSL certificate</label>
                                        <input type="text" class="form-control" name="bot_cert_path" id="bot_cert_path" value="<?php echo e(config('telebot.bots.' . config('telebot.default') . '.webhook.certificate')); ?>">
                                    </div>
                                    <div class="form-check pb-3">
                                        <input type="hidden" name="async_requests" value="false">
                                        <input type="checkbox" class="form-check-input" id="async_requests" <?php if(config('telebot.bots.' . config('telebot.default') . '.async')): ?> checked <?php endif; ?> name="async_requests" value="true">
                                        <label class="form-check-label" for="async_requests">Enable async requests</label>
                                    </div>
                                    <div class="form-check pb-3">
                                        <input type="hidden" name="bot_debug" value="false">
                                        <input type="checkbox" class="form-check-input" id="bot_debug" <?php if(config('telebot.bots.' . config('telebot.default') . '.exceptions')): ?> checked <?php endif; ?> name="bot_debug" value="true">
                                        <label class="form-check-label" for="bot_debug">Debug mode</label>
                                    </div>

                                    <h5>Additional settings</h5>

                                    <div class="form-group">
                                        <label for="settings_start_message">Start message text</label>
                                        <textarea type="text" class="form-control" name="settings_start_message" id="settings_start_message"><?php if($bot && $bot->settings && $bot->settings->start_message): ?><?php echo e($bot->settings->start_message); ?><?php endif; ?></textarea>
                                    </div>

                                    <div class="form-group">
                                        <label for="settings_roles">Allowed roles</label><br>
                                        <select multiple="multiple" class="" id="settings_roles" name="settings_roles[]">
                                            <?php $__currentLoopData = $roles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $role): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <option value="<?php echo e($role->id); ?>" <?php if($bot && $bot->settings && $bot->settings->roles && in_array((string)$role->id, $bot->settings->roles)): ?> selected <?php endif; ?>><?php echo e($role->display_name); ?></option>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <button class="btn btn-primary" type="submit">Save</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">

                    </div>
                </div>

            </div>
        </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('telegrambot::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/domhack.gtfb.tech/Modules/Telegrambot/Resources/views/index.blade.php ENDPATH**/ ?>