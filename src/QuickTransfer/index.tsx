import { useEffect } from "react";
import { useStoreDispatch, useStoreSelector } from "../hooks/useStore"
import { getAllUsers, users, selectedContact } from '../store/reducers/userSlice';
import { Carousel } from "../components/Carousel";
import { Contact } from "./Contact";
import Send from '../assets/icons/send.svg?react';

export const QuickTransfer = () => {
    const dispatch = useStoreDispatch();
    const contacts = useStoreSelector(users);
    const contactToTransferTo = useStoreSelector(selectedContact);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div className="flex flex-col gap-7 bg-white rounded-3xl md:px-6 py-2 md:py-[35px]">
            <Carousel
                renderCard={(imageUrl: string, name: string, occupation: string) => 
                    <Contact imageUrl={imageUrl} name={name} occupation={occupation} />
                }
                data={contacts}
            />

            <div className="flex gap-7 items-center justify-between">
                <p className="text-xs sm:text-base text-secondary">Write Amount</p>

                <div className="flex flex-1 items-center bg-slate-200 rounded-full relative py-3 sm:py-3.5">
                    <input className="focus:outline-0 px-7.5 text-secondary text-xs sm:text-base" placeholder="525.50" />
                    <button className="flex items-center absolute top-0 right-0 gap-3 bg-black rounded-full py-3 sm:py-3.5 px-6">
                        <span className="text-white text-xs sm:text-base">Send</span>
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}