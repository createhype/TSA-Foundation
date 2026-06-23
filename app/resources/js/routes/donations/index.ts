import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DonationController::store
 * @see app/Http/Controllers/DonationController.php:18
 * @route '/donations'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/donations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DonationController::store
 * @see app/Http/Controllers/DonationController.php:18
 * @route '/donations'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DonationController::store
 * @see app/Http/Controllers/DonationController.php:18
 * @route '/donations'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DonationController::store
 * @see app/Http/Controllers/DonationController.php:18
 * @route '/donations'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DonationController::store
 * @see app/Http/Controllers/DonationController.php:18
 * @route '/donations'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DonationController::verify
 * @see app/Http/Controllers/DonationController.php:79
 * @route '/donations/{donation}/verify'
 */
export const verify = (args: { donation: number | { id: number } } | [donation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/donations/{donation}/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DonationController::verify
 * @see app/Http/Controllers/DonationController.php:79
 * @route '/donations/{donation}/verify'
 */
verify.url = (args: { donation: number | { id: number } } | [donation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { donation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { donation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    donation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        donation: typeof args.donation === 'object'
                ? args.donation.id
                : args.donation,
                }

    return verify.definition.url
            .replace('{donation}', parsedArgs.donation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DonationController::verify
 * @see app/Http/Controllers/DonationController.php:79
 * @route '/donations/{donation}/verify'
 */
verify.post = (args: { donation: number | { id: number } } | [donation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DonationController::verify
 * @see app/Http/Controllers/DonationController.php:79
 * @route '/donations/{donation}/verify'
 */
    const verifyForm = (args: { donation: number | { id: number } } | [donation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: verify.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DonationController::verify
 * @see app/Http/Controllers/DonationController.php:79
 * @route '/donations/{donation}/verify'
 */
        verifyForm.post = (args: { donation: number | { id: number } } | [donation: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: verify.url(args, options),
            method: 'post',
        })
    
    verify.form = verifyForm
const donations = {
    store: Object.assign(store, store),
verify: Object.assign(verify, verify),
}

export default donations