import { useEffect } from 'react';
import SearchIcon from '../assets/icons/search.svg?react';
import SettingsIcon from '../assets/icons/settings.svg?react';
import HamburgerIcon from '../assets/icons/hamburger.svg?react';
import NotificationIcon from '../assets/icons/notification.svg?react';
import { useStoreDispatch, useStoreSelector } from "../hooks/store"
import { getLoggedInUser, selectUser } from '../store/reducers/userSlice';

export const Header = ({ title }: { title: string }) => {
    const dispatch = useStoreDispatch()
    const user = useStoreSelector(selectUser);
    console.log(user.name, '**')
    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [dispatch])

    return (
        <header className="flex flex-col gap-5 py-[21px] px-6 sm:px-10 bg-white border-b border-[#E6EFF5]">
            <div className='flex items-center justify-between'>
                <button tabIndex={1} className='flex sm:hidden'>
                    <HamburgerIcon />
                </button>
                <h1 className="text-xl md:text-large text-primary font-semibold">{title}</h1>

                <div className='flex gap-[30px]'>
                    <div className='hidden sm:flex bg-background py-2 md:py-4 px-6 rounded-full items-center gap-4'>
                        <SearchIcon />
                        <input className='focus:outline-0 text-placeholder text-[15px]' placeholder='Search for something' tabIndex={0} />
                    </div>

                    <div className='hidden sm:flex bg-background p-2 md:p-4 rounded-full items-center'>
                        <SettingsIcon />
                    </div>

                    <div className='hidden sm:flex bg-background p-2 md:p-4 rounded-full items-center'>
                        <NotificationIcon />
                    </div>

                    <div className='bg-background rounded-full items-center w-[35px] h-[35px] md:w-[60px] md:h-[60px]'>
                        <img alt='user avatar' className='w-[35px] h-[35px] md:w-[60px] md:h-[60px] rounded-full' src={user.avatar} />
                    </div>
                </div>
            </div>

            <div className='flex sm:hidden bg-background py-3 px-6 rounded-full items-center gap-4'>
                <SearchIcon className='w-4 h-4' />
                <input className='focus:outline-0 text-placeholder text-[13px]' placeholder='Search for something' tabIndex={0} />
            </div>
        </header>
    )
}
