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
            className={cn('flex gap-[26px] pl-10 pr-4 py-4 items-center cursor-pointer',
            selectedPage.id === id && "border-l-6 border-black"
            )}
            onClick={() => {
                dispatch(setActivePage(id))
                navigate(`/${id}`)
            }}
        >
            <Icon fill='#232323' />
            <h3 className={cn('text-sm sm:text-[18px] font-medium text-nav-text',
                selectedPage.id === id && 'text-black'
            )}>{navTitle}</h3>
        </button>
    )
}