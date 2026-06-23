import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Donations\Pages\EditDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/EditDonation.php:7
 * @route '/admin/donations/{record}/edit'
 */
const EditDonation = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDonation.url(args, options),
    method: 'get',
})

EditDonation.definition = {
    methods: ["get","head"],
    url: '/admin/donations/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Donations\Pages\EditDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/EditDonation.php:7
 * @route '/admin/donations/{record}/edit'
 */
EditDonation.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        record: args.record,
                }

    return EditDonation.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Donations\Pages\EditDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/EditDonation.php:7
 * @route '/admin/donations/{record}/edit'
 */
EditDonation.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditDonation.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Donations\Pages\EditDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/EditDonation.php:7
 * @route '/admin/donations/{record}/edit'
 */
EditDonation.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditDonation.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Donations\Pages\EditDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/EditDonation.php:7
 * @route '/admin/donations/{record}/edit'
 */
    const EditDonationForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditDonation.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Donations\Pages\EditDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/EditDonation.php:7
 * @route '/admin/donations/{record}/edit'
 */
        EditDonationForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditDonation.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Donations\Pages\EditDonation::__invoke
 * @see app/Filament/Resources/Donations/Pages/EditDonation.php:7
 * @route '/admin/donations/{record}/edit'
 */
        EditDonationForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditDonation.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditDonation.form = EditDonationForm
export default EditDonation