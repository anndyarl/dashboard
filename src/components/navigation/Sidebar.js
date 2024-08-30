import {  
    Bars3BottomRightIcon,
    BookmarkIcon,
    CalendarIcon,
    ChartBarIcon,
    ChartBarSquareIcon,
    CogIcon,
    CurrencyDollarIcon,
    DocumentChartBarIcon,
    DocumentMagnifyingGlassIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    RssIcon,
    StarIcon,
    TrashIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import { useAnimation } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
function Sidebar(){   

    const location = useLocation()
    
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: location.pathname==='dashboard' ? true:false },
        { name: 'Mis trades', href: '/blog', icon: DocumentChartBarIcon, current: false },
        // { name: 'Mis Trades', href: '#', icon: DocumentChartBarIcon, current: false },
        { name: 'Papelera', href: '#', icon: TrashIcon, current: false },
        // { name: 'Favoritos', href: '#', icon: StarIcon, current: false },
        // { name: 'Reportes', href: '#', icon: ChartBarIcon, current: false },
      ]
    

    return(
      
        <div>

        <div className="ml-4 mt-2 flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Agregar Trade
                  </button>
                </div>

              {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      ))}
        </div>
    )
}
export default Sidebar