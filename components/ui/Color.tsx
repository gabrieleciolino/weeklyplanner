interface ColorProps extends React.HTMLAttributes<HTMLDivElement> {
    color: string;
}

export default function Color({ color, ...props }: ColorProps) {
    return (
        <div className="rounded-full w-[20px] h-[20px]" {...props} style={{ backgroundColor: color }}></div>
    )
}