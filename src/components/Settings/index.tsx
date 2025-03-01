import { useState } from "react"
import { cn } from "../../utils"
import { Preference } from "./Preference";
import { Profile } from "./Profile";
import { Security } from "./Security";

const tabs = ['Edit Profile', 'Preference', 'Security'];

const RenderTabSection = (activeTab: string) => {
    return activeTab === 'Edit Profile' ? <Profile /> : activeTab === 'Preference' ? <Preference /> : <Security />
}

export const Settings = () => {
    const [activeTab, setActiveTab] = useState('Edit Profile');
    
    return (
        <div className="flex flex-col md:pt-7.5 sm:px-11 w-full h-fit bg-white rounded-3xl">
            <div className="flex gap-12 border-b border-[#F4F5F7] w-full pb-2">
                {tabs.map(tab => 
                    <button className="relative cursor-pointer w-28" key={tab} onClick={() => setActiveTab(tab)}>
                        <span className={cn("text-[13px] sm:text-base font-medium text-secondary ",
                            activeTab === tab && 'text-primary'
                        )}>{tab}</span>
                        {activeTab === tab && <div className="absolute -bottom-2 h-[3.2px] w-full bg-black rounded-t-md" />}
                    </button>)}
            </div>

            <div className="py-[41px] sm:pl-15">
                {RenderTabSection(activeTab)}
            </div>
        </div>
    )
}
