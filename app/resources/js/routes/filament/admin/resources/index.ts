import campaigns from './campaigns'
import donations from './donations'
import packages from './packages'
const resources = {
    campaigns: Object.assign(campaigns, campaigns),
donations: Object.assign(donations, donations),
packages: Object.assign(packages, packages),
}

export default resources