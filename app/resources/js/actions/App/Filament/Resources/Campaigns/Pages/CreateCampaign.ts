import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Campaigns\Pages\CreateCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/CreateCampaign.php:7
 * @route '/admin/campaigns/create'
 */
const CreateCampaign = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaign.url(options),
    method: 'get',
})

CreateCampaign.definition = {
    methods: ["get","head"],
    url: '/admin/campaigns/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Campaigns\Pages\CreateCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/CreateCampaign.php:7
 * @route '/admin/campaigns/create'
 */
CreateCampaign.url = (options?: RouteQueryOptions) => {
    return CreateCampaign.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Campaigns\Pages\CreateCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/CreateCampaign.php:7
 * @route '/admin/campaigns/create'
 */
CreateCampaign.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaign.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Campaigns\Pages\CreateCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/CreateCampaign.php:7
 * @route '/admin/campaigns/create'
 */
CreateCampaign.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCampaign.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Campaigns\Pages\CreateCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/CreateCampaign.php:7
 * @route '/admin/campaigns/create'
 */
    const CreateCampaignForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateCampaign.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Campaigns\Pages\CreateCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/CreateCampaign.php:7
 * @route '/admin/campaigns/create'
 */
        CreateCampaignForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateCampaign.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Campaigns\Pages\CreateCampaign::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/CreateCampaign.php:7
 * @route '/admin/campaigns/create'
 */
        CreateCampaignForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateCampaign.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateCampaign.form = CreateCampaignForm
export default CreateCampaign