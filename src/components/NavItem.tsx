import { useNavigate } from "react-router";
import { setActivePage, activePage } from '../store/reducers/pageSlice';
import { useStoreDispatch, useStoreSelector } from "../hooks/useStore"
import { cn } from '../utils';

interface Props {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    navTitle: string
    id: string
}

export const NavItem = ({ Icon, navTitle, id }: Props) => {
    const navigate = useNavigate();
    const selectedPage = useStoreSelector(activePage);
    const dispatch = useStoreDispatch()

    return (
        <button 
            className='flex pr-4 py-5 items-center cursor-pointer'
            onClick={() => {
                dispatch(setActivePage(id))
                navigate(`/${id}`)
            }}
        >
            {selectedPage.id === id && <div className="absolute w-1.5 bg-black h-[60px] rounded-r-md" />}
            <div className="flex gap-[26px] pl-10">
                <Icon />
                <h3 className={cn('text-sm sm:text-[18px] font-medium text-nav-text',
                    selectedPage.id === id && 'text-black'
                )}>{navTitle}</h3>
            </div>
        </button>
    )
}