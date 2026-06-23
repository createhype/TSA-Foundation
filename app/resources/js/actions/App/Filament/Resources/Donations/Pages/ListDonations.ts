import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Donations\Pages\ListDonations::__invoke
 * @see app/Filament/Resources/Donations/Pages/ListDonations.php:7
 * @route '/admin/donations'
 */
const ListDonations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDonations.url(options),
    method: 'get',
})

ListDonations.definition = {
    methods: ["get","head"],
    url: '/admin/donations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Donations\Pages\ListDonations::__invoke
 * @see app/Filament/Resources/Donations/Pages/ListDonations.php:7
 * @route '/admin/donations'
 */
ListDonations.url = (options?: RouteQueryOptions) => {
    return ListDonations.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Donations\Pages\ListDonations::__invoke
 * @see app/Filament/Resources/Donations/Pages/ListDonations.php:7
 * @route '/admin/donations'
 */
ListDonations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListDonations.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Donations\Pages\ListDonations::__invoke
 * @see app/Filament/Resources/Donations/Pages/ListDonations.php:7
 * @route '/admin/donations'
 */
ListDonations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListDonations.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Donations\Pages\ListDonations::__invoke
 * @see app/Filament/Resources/Donations/Pages/ListDonations.php:7
 * @route '/admin/donations'
 */
    const ListDonationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListDonations.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Donations\Pages\ListDonations::__invoke
 * @see app/Filament/Resources/Donations/Pages/ListDonations.php:7
 * @route '/admin/donations'
 */
        ListDonationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListDonations.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Donations\Pages\ListDonations::__invoke
 * @see app/Filament/Resources/Donations/Pages/ListDonations.php:7
 * @route '/admin/donations'
 */
        ListDonationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListDonations.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListDonations.form = ListDonationsForm
export default ListDonations