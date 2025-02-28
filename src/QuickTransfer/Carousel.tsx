import { useState } from "react"
import type { UserType } from "../store/reducers/userSlice"
import { Next } from "../components/Icons"
import { useIsMobile } from "../hooks/useIsMobile";

type CarouselProps = {
    data: UserType[]
    renderCard: (user: UserType) => React.ReactNode
}

export const Carousel = ({ data, renderCard }: CarouselProps) => {
    const [startIndex, setStartIndex] = useState(0)
    const [lastIndex, setLastIndex] = useState(3)
    const isMobile = useIsMobile(540)

    const moveToNext = () => {
        if (lastIndex === data.length - 1) {
            setStartIndex(0)
            setLastIndex(3)
        } else {
            setStartIndex(prev => prev + 3)
            setLastIndex(prev => prev + 3)
        }
    }
    
    return (
        <div className="flex justify-center lg:justify-between items-center gap-6 h-[127px]">
            <div className="flex justify-between gap-4 sm:gap-8 w-full">
                {data.slice(startIndex, lastIndex).map(user => renderCard(user))}
            </div>
            <button onClick={moveToNext} className="flex justify-end rounded-full w-12.5 h-12.5 shadow-md hover:shadow-2xl bg-white items-center cursor-pointer">
                <Next width={isMobile ? 66 : 85} />
            </button>
        </div>
    )
}
