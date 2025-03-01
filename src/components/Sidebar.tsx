import { useLocation } from "react-router";
import Logo from '../assets/icons/logo.svg?react';
import { Home, Accounts, Transactions, Investments, Loans, Services, Privileges, Settings, CreditCard } from './Icons';
import { cn } from '../utils';
import { NavItem } from './NavItem';
import { useStoreDispatch } from "../hooks/useStore"
import { setActivePage } from '../store/reducers/pageSlice';
import { useEffect } from "react";

interface Props {
    open: boolean
    ref: React.Ref<HTMLDivElement> | null
}

export const Sidebar = ({ open, ref }: Props) => {
    const dispatch = useStoreDispatch()
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname.slice(1)
        dispatch(setActivePage(path))
    }, [location, dispatch])


    return (
        <div ref={ref} className={cn("absolute md:relative top-0 left-0 bottom-0 z-1 h-full w-[250px] bg-white border-r border-[#E6EFF5] pt-8",
            open ? 'block' : 'hidden'
        )}>
            <div className='flex items-center gap-4 px-10'>
                <Logo />
                <h1 className='text-primary text-[25px] font-extrabold'>Soar Task</h1>
            </div>

            <nav className='pt-8 lg:pt-12 flex flex-col'>
                <NavItem Icon={Home} id='Overview' navTitle='Dashboard' />
                <NavItem Icon={Transactions} id='Transactions' navTitle='Transactions' />
                <NavItem Icon={Accounts} id='Accounts' navTitle='Accounts' />
                <NavItem Icon={Investments} id='Investments' navTitle='Investments' />
                <NavItem Icon={CreditCard} id='Cards' navTitle='Credit Cards' />
                <NavItem Icon={Loans} id='Loans' navTitle='Loans' />
                <NavItem Icon={Services} id='Services' navTitle='Services' />
                <NavItem Icon={Privileges} id='Privileges' navTitle='My Privileges' />
                <NavItem Icon={Settings} id='Setting' navTitle='Setting' />
            </nav>
        </div>
    )
}
