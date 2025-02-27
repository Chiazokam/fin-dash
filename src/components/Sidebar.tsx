import Logo from '../assets/icons/logo.svg?react';
import HomeIcon from '../assets/icons/home.svg?react';
import TransactionsIcon from '../assets/icons/transactions.svg?react';
import AccountsIcon from '../assets/icons/accounts.svg?react';
import InvestmentsIcon from '../assets/icons/investments.svg?react';
import CardIcon from '../assets/icons/card.svg?react';
import LoanIcon from '../assets/icons/loan.svg?react';
import ServicesIcon from '../assets/icons/services.svg?react';
import PrivilegesIcon from '../assets/icons/privileges.svg?react';
import NavSettingsIcon from '../assets/icons/nav-settings.svg?react';
import { cn } from '../utils';
import { NavItem } from './NavItem';

interface Props {
    open: boolean
    ref: React.Ref<HTMLDivElement> | null
}

export const Sidebar = ({ open, ref }: Props) => {

    return (
        <div ref={ref} className={cn("absolute md:relative top-0 left-0 bottom-0 z-1 h-full w-[250px] bg-white border-r border-[#E6EFF5] pt-8",
            open ? 'block' : 'hidden'
        )}>
            <div className='flex items-center gap-4 px-10'>
                <Logo />
                <h1 className='text-primary text-[25px] font-extrabold'>Soar Task</h1>
            </div>

            <nav className='pt-8 sm:pt-16 flex flex-col'>
                <NavItem Icon={HomeIcon} id='Overview' navTitle='Dashboard' />
                <NavItem Icon={TransactionsIcon} id='Transactions' navTitle='Transactions' />
                <NavItem Icon={AccountsIcon} id='Accounts' navTitle='Accounts' />
                <NavItem Icon={InvestmentsIcon} id='Investments' navTitle='Investments' />
                <NavItem Icon={CardIcon} id='Cards' navTitle='Credit Cards' />
                <NavItem Icon={LoanIcon} id='Loans' navTitle='Loans' />
                <NavItem Icon={ServicesIcon} id='Services' navTitle='Services' />
                <NavItem Icon={PrivilegesIcon} id='Privileges' navTitle='My Privileges' />
                <NavItem Icon={NavSettingsIcon} id='Setting' navTitle='Setting' />
            </nav>
        </div>
    )
}
