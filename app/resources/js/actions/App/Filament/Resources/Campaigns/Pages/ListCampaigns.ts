import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Campaigns\Pages\ListCampaigns::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/ListCampaigns.php:7
 * @route '/admin/campaigns'
 */
const ListCampaigns = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaigns.url(options),
    method: 'get',
})

ListCampaigns.definition = {
    methods: ["get","head"],
    url: '/admin/campaigns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Campaigns\Pages\ListCampaigns::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/ListCampaigns.php:7
 * @route '/admin/campaigns'
 */
ListCampaigns.url = (options?: RouteQueryOptions) => {
    return ListCampaigns.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Campaigns\Pages\ListCampaigns::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/ListCampaigns.php:7
 * @route '/admin/campaigns'
 */
ListCampaigns.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaigns.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Campaigns\Pages\ListCampaigns::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/ListCampaigns.php:7
 * @route '/admin/campaigns'
 */
ListCampaigns.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCampaigns.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Campaigns\Pages\ListCampaigns::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/ListCampaigns.php:7
 * @route '/admin/campaigns'
 */
    const ListCampaignsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListCampaigns.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Campaigns\Pages\ListCampaigns::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/ListCampaigns.php:7
 * @route '/admin/campaigns'
 */
        ListCampaignsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListCampaigns.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Campaigns\Pages\ListCampaigns::__invoke
 * @see app/Filament/Resources/Campaigns/Pages/ListCampaigns.php:7
 * @route '/admin/campaigns'
 */
        ListCampaignsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListCampaigns.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListCampaigns.form = ListCampaignsForm
export default ListCampaigns