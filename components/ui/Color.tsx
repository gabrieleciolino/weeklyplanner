interface ColorProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
}

export default function Color({ color, ...props }: ColorProps) {
  return (
    <div
      className="h-[20px] w-[20px] rounded-full"
      {...props}
      style={{ backgroundColor: color }}
    ></div>
  );
}
