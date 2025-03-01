import { useEffect } from "react";
import {  useStoreDispatch, useStoreSelector } from "../../hooks/useStore"
import { getLoggedInUser, selectUser } from '../../store/reducers/userSlice';
import { Avatar } from "../Avatar"
import { Edit } from "../Icons/Edit";
import { EditProfile } from "./EditProfile";

export const Profile = () => {
    const loggedInUser = useStoreSelector(selectUser);
    const dispatch = useStoreDispatch()
    
    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [dispatch])

    return (
        <div className="flex w-full flex-col sm:flex-row items-center gap-5 sm:gap-16">
            <div className="relative sm:self-start">
                <Avatar imageUrl={loggedInUser.avatar} fullName={loggedInUser.name} className="w-25 h-25 lg:w-22.5 lg:h-22.5" />
                <Edit className="absolute right-0 bottom-0 cursor-pointer" />
            </div>

            <div className="w-full">
                <EditProfile user={loggedInUser} />
            </div>
        </div>
    )
}
