import { cn } from "../utils"

interface Props {
    imageUrl: string
    fullName: string
    imageSize?: 'lg' | 'sm'
}
export const Avatar = ({ imageUrl, fullName, imageSize = 'sm' }: Props) => {
    return (
        <div className={cn('bg-background rounded-full items-center w-12.5 h-12.5',
            imageSize === 'lg' ? 'min-[540px]:w-17.5 min-[540px]:h-17.5' : 'lg:w-15 lg:h-15'
        )}>
            <img alt={fullName} className='w-full h-full rounded-full' src={imageUrl} />
        </div>
    )
}
