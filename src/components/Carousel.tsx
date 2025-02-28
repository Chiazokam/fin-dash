import { useState } from "react"
import { cn } from "../utils"
import type { UserType } from "../store/reducers/userSlice"
import { Next } from "./Icons"
import { useIsMobile } from "../hooks/useIsMobile";

type CarouselProps = {
    data: UserType[]
    renderCard: (imageUrl: string, name: string, occupation: string) => React.ReactNode
}

export const Carousel = ({ data, renderCard }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1
  const isMobile = useIsMobile(540)
  console.log(isMobile,'!!!')

    return (
        <div className="flex justify-center lg:justify-between items-center gap-6">
            <div className="flex justify-between gap-4 sm:gap-8 w-full">
                {data.slice(0, 3).map(obj => renderCard(obj.avatar, obj.name, obj.role))}
            </div>
            <button className="flex justify-end rounded-full w-12.5 h-12.5 shadow-md bg-white items-center">
                <Next width={isMobile ? 66 : 85} />
            </button>
        </div>
    )
}
