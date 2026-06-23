import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
const RazorpayWebhookController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RazorpayWebhookController.url(options),
    method: 'post',
})

RazorpayWebhookController.definition = {
    methods: ["post"],
    url: '/razorpay/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
RazorpayWebhookController.url = (options?: RouteQueryOptions) => {
    return RazorpayWebhookController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
RazorpayWebhookController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RazorpayWebhookController.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
    const RazorpayWebhookControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: RazorpayWebhookController.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
        RazorpayWebhookControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RazorpayWebhookController.url(options),
            method: 'post',
        })
    
    RazorpayWebhookController.form = RazorpayWebhookControllerForm
export default RazorpayWebhookController