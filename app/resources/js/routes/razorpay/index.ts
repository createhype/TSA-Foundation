import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
export const webhook = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

webhook.definition = {
    methods: ["post"],
    url: '/razorpay/webhook',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
webhook.url = (options?: RouteQueryOptions) => {
    return webhook.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
webhook.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: webhook.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
    const webhookForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: webhook.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RazorpayWebhookController::__invoke
 * @see app/Http/Controllers/RazorpayWebhookController.php:16
 * @route '/razorpay/webhook'
 */
        webhookForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: webhook.url(options),
            method: 'post',
        })
    
    webhook.form = webhookForm
const razorpay = {
    webhook: Object.assign(webhook, webhook),
}

export default razorpay