interface Props {
    size: number,
    color: string
}

export const Loader = ({ size, color }: Props) => {
    return (
        <div style={{ width: size, height: size, backgroundColor: color }} className="rounded-full animate-ping" />
     )
}
