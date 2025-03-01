import { useEffect } from 'react';
import SearchIcon from '../assets/icons/search.svg?react';
import SettingsIcon from '../assets/icons/settings.svg?react';
import HamburgerIcon from '../assets/icons/hamburger.svg?react';
import NotificationIcon from '../assets/icons/notification.svg?react';
import { useStoreDispatch, useStoreSelector } from "../hooks/useStore"
import { getLoggedInUser, selectUser } from '../store/reducers/userSlice';
import { activePage } from '../store/reducers/pageSlice';
import { Avatar } from './Avatar';

interface Props {
    openSidebar: () => void
}

export const Header = ({ openSidebar }: Props) => {
    const dispatch = useStoreDispatch()
    const loggedInUser = useStoreSelector(selectUser);
    const selectedPage = useStoreSelector(activePage);

    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [dispatch])

    return (
        <header className="flex flex-col gap-5 py-[21px] px-6 sm:px-10 bg-white md:border-b md:border-[#E6EFF5] h-35 md:h-21 lg:h-25">
            <div className='flex items-center justify-between'>
                <button tabIndex={1} className='flex md:hidden' onClick={openSidebar}>
                    <HamburgerIcon />
                </button>
                <h1 className="text-xl lg:text-large text-primary font-semibold">{selectedPage.id}</h1>

                <div className='flex gap-[30px]'>
                    <div className='hidden md:flex bg-background py-2 lg:py-4 px-6 rounded-full items-center gap-4'>
                        <SearchIcon />
                        <input className='focus:outline-0 text-placeholder text-[15px]' placeholder='Search for something' tabIndex={0} />
                    </div>

                    <div className='hidden md:flex bg-background p-2 lg:p-4 rounded-full items-center'>
                        <SettingsIcon />
                    </div>

                    <div className='hidden md:flex bg-background p-2 lg:p-4 rounded-full items-center'>
                        <NotificationIcon />
                    </div>

                    <Avatar fullName={loggedInUser.name} imageUrl={loggedInUser.avatar} className='w-10 h-10 lg:w-15 lg:h-15' />
                </div>
            </div>

            <div className='flex md:hidden bg-background py-3 px-6 rounded-full items-center gap-4'>
                <SearchIcon className='w-4 h-4' />
                <input className='focus:outline-0 text-placeholder text-[13px]' placeholder='Search for something' tabIndex={0} />
            </div>
        </header>
    )
}
