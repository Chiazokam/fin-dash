import { useStoreDispatch, useStoreSelector } from "../hooks/useStore"
import { selectedContact, setActiveUser, UserType } from '../store/reducers/userSlice';
import { Avatar } from "../components/Avatar";
import { cn } from "../utils";

interface Props {
    user: UserType
}

export const Contact = ({ user }: Props) => {
    const { id, avatar, name, role } = user;
    const dispatch = useStoreDispatch();
    const activeContact  = useStoreSelector(selectedContact);

    return (
        <button onClick={() => dispatch(setActiveUser(user))} className="flex flex-col gap-4 items-center cursor-pointer">
            <Avatar fullName={name} imageUrl={avatar} imageSize='lg' />

            <div className="flex flex-col items-center ">
                <p className={cn("text-xs sm:text-base font-normal text-black text-center",
                    activeContact.id === id && 'font-black text-[#000]' 
                )}>{name}</p>
                <p className={cn("text-xs sm:text-[15px] font-normal text-secondary text-center",
                    activeContact.id === id && 'font-black'
                )}>{role}</p>
            </div>
        </button>
    )
}