import ListPackages from './ListPackages'
import CreatePackage from './CreatePackage'
import EditPackage from './EditPackage'
const Pages = {
    ListPackages: Object.assign(ListPackages, ListPackages),
CreatePackage: Object.assign(CreatePackage, CreatePackage),
EditPackage: Object.assign(EditPackage, EditPackage),
}

export default Pages