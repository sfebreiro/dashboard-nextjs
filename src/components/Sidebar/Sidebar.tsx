import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact, IoHeartOutline } from 'react-icons/io5';
import { SidebarMenuItem } from '../Sidebar/SidebarMenuItem';

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={40} />,
        title: 'Pokemons',
        subTitle: 'Generación estática'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={40} />,
        title: 'Favoritos',
        subTitle: 'Global State'
    }
]

export const Sidebar = () => {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-auto">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2" />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1707305311503-b94312242a11?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Samuel Febreiro
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">

                {
                    menuItems.map(item => (
                        <SidebarMenuItem
                            key={item.title}
                            {...item}
                        />
                    ))
                }

            </div>
        </div>
    )
}
