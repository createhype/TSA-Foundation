<?php if (isset($component)) { $__componentOriginalaa758e6a82983efcbf593f765e026bd9 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalaa758e6a82983efcbf593f765e026bd9 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => $__env->getContainer()->make(Illuminate\View\Factory::class)->make('mail::message'),'data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('mail::message'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php \Livewire\Features\SupportCompiledWireKeys\SupportCompiledWireKeys::processComponentKey($component); ?>

# 80G Donation Receipt

Dear <?php echo new \Illuminate\Support\EncodedHtmlString($donation->donor_name ?: 'Donor'); ?>,

Thank you for your generous donation to **<?php echo new \Illuminate\Support\EncodedHtmlString($org['name']); ?>**. Your support helps us feed
200+ needy people every single day.

<?php if (isset($component)) { $__componentOriginal85530901ee91af5decf39e8ed3495cde = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal85530901ee91af5decf39e8ed3495cde = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => $__env->getContainer()->make(Illuminate\View\Factory::class)->make('mail::table'),'data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('mail::table'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php \Livewire\Features\SupportCompiledWireKeys\SupportCompiledWireKeys::processComponentKey($component); ?>

| Receipt details | |
|:----------------|:--|
| Receipt No. | DON-<?php echo new \Illuminate\Support\EncodedHtmlString($donation->id); ?> |
| Amount | ₹<?php echo new \Illuminate\Support\EncodedHtmlString(number_format($donation->amount)); ?> |
| Date | <?php echo new \Illuminate\Support\EncodedHtmlString(optional($donation->paid_at)->format('d M Y')); ?> |
| Payment ID | <?php echo new \Illuminate\Support\EncodedHtmlString($donation->razorpay_payment_id); ?> |
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal85530901ee91af5decf39e8ed3495cde)): ?>
<?php $attributes = $__attributesOriginal85530901ee91af5decf39e8ed3495cde; ?>
<?php unset($__attributesOriginal85530901ee91af5decf39e8ed3495cde); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal85530901ee91af5decf39e8ed3495cde)): ?>
<?php $component = $__componentOriginal85530901ee91af5decf39e8ed3495cde; ?>
<?php unset($__componentOriginal85530901ee91af5decf39e8ed3495cde); ?>
<?php endif; ?>

This donation is eligible for a tax deduction under **Section 80G** of the Income Tax Act, 1961.
Please retain this receipt for your records.

**<?php echo new \Illuminate\Support\EncodedHtmlString($org['name']); ?>**
<?php echo new \Illuminate\Support\EncodedHtmlString($org['address']); ?>

80G Reg: <?php echo new \Illuminate\Support\EncodedHtmlString($org['reg_80g']); ?> &middot; 12A Reg: <?php echo new \Illuminate\Support\EncodedHtmlString($org['reg_12a']); ?> &middot; PAN: <?php echo new \Illuminate\Support\EncodedHtmlString($org['pan']); ?>


With gratitude,
<?php echo new \Illuminate\Support\EncodedHtmlString($org['name']); ?>

 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalaa758e6a82983efcbf593f765e026bd9)): ?>
<?php $attributes = $__attributesOriginalaa758e6a82983efcbf593f765e026bd9; ?>
<?php unset($__attributesOriginalaa758e6a82983efcbf593f765e026bd9); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalaa758e6a82983efcbf593f765e026bd9)): ?>
<?php $component = $__componentOriginalaa758e6a82983efcbf593f765e026bd9; ?>
<?php unset($__componentOriginalaa758e6a82983efcbf593f765e026bd9); ?>
<?php endif; ?>
<?php /**PATH D:\work\TSA-Foundation\app\resources\views/emails/donation-receipt.blade.php ENDPATH**/ ?>