import Popover from '../ui/Popover';

interface ActivityPopoverProps {
  value?: string;
  bgColor?: string;
  textColor?: string;
  children: React.ReactNode;
}

export default function ActivityPopover({
  value = '',
  bgColor,
  children,
}: ActivityPopoverProps) {
  return (
    <Popover
      trigger={
        <div className="flex h-full w-full items-center justify-center outline-none lg:hidden">
          {value && (
            <div
              className="h-full w-full rounded-full bg-riptide-400"
              style={{
                ...(bgColor && { backgroundColor: bgColor }),
              }}
            ></div>
          )}
        </div>
      }
      noPortal
      side="right"
    >
      {children}
    </Popover>
  );
}
