import { Avatar } from "../components/Avatar";

interface Props {
    imageUrl: string
    name: string
    occupation: string
}

export const Contact = ({ imageUrl, name, occupation }: Props) => {
    return (
        <div className="flex flex-col gap-4 items-center">
            <Avatar fullName={name} imageUrl={imageUrl} imageSize='lg' />

            <div className="flex flex-col items-center">
                <p className="text-xs sm:text-base font-normal text-black tracking-normal text-center">{name}</p>
                <p className="text-xs sm:text-[15px] font-normal text-secondary text-center">{occupation}</p>
            </div>
        </div>
    )
}