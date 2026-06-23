import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Donations\Pages\CreateDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/CreateDonation.php:7
 * @route '/admin/donations/create'
 */
const CreateDonation = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDonation.url(options),
    method: 'get',
})

CreateDonation.definition = {
    methods: ["get","head"],
    url: '/admin/donations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Donations\Pages\CreateDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/CreateDonation.php:7
 * @route '/admin/donations/create'
 */
CreateDonation.url = (options?: RouteQueryOptions) => {
    return CreateDonation.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Donations\Pages\CreateDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/CreateDonation.php:7
 * @route '/admin/donations/create'
 */
CreateDonation.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateDonation.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Donations\Pages\CreateDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/CreateDonation.php:7
 * @route '/admin/donations/create'
 */
CreateDonation.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateDonation.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Donations\Pages\CreateDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/CreateDonation.php:7
 * @route '/admin/donations/create'
 */
    const CreateDonationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateDonation.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Donations\Pages\CreateDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/CreateDonation.php:7
 * @route '/admin/donations/create'
 */
        CreateDonationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateDonation.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Donations\Pages\CreateDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/CreateDonation.php:7
 * @route '/admin/donations/create'
 */
        CreateDonationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateDonation.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateDonation.form = CreateDonationForm
export default CreateDonation