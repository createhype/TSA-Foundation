import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Campaigns\Pages\EditCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/EditCampaign.php:7
 * @route '/admin/campaigns/{record}/edit'
 */
const EditCampaign = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCampaign.url(args, options),
    method: 'get',
})

EditCampaign.definition = {
    methods: ["get","head"],
    url: '/admin/campaigns/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Campaigns\Pages\EditCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/EditCampaign.php:7
 * @route '/admin/campaigns/{record}/edit'
 */
EditCampaign.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditCampaign.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Campaigns\Pages\EditCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/EditCampaign.php:7
 * @route '/admin/campaigns/{record}/edit'
 */
EditCampaign.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCampaign.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Campaigns\Pages\EditCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/EditCampaign.php:7
 * @route '/admin/campaigns/{record}/edit'
 */
EditCampaign.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCampaign.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Campaigns\Pages\EditCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/EditCampaign.php:7
 * @route '/admin/campaigns/{record}/edit'
 */
    const EditCampaignForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditCampaign.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Campaigns\Pages\EditCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/EditCampaign.php:7
 * @route '/admin/campaigns/{record}/edit'
 */
        EditCampaignForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditCampaign.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Campaigns\Pages\EditCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/EditCampaign.php:7
 * @route '/admin/campaigns/{record}/edit'
 */
        EditCampaignForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditCampaign.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditCampaign.form = EditCampaignForm
export default EditCampaign