import { cn } from "../utils"

interface Props {
    imageUrl: string
    fullName: string
    className?: string
}
export const Avatar = ({ imageUrl, fullName, className }: Props) => {
    return (
        <div className={cn('bg-background rounded-full items-center w-15 h-15', className)}>
            <img alt={fullName} className='w-full h-full rounded-full' src={imageUrl} />
        </div>
    )
}
