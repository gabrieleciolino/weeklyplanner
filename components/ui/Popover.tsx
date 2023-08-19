import * as RadixPopover from '@radix-ui/react-popover';

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  noPortal?: boolean;
  side?: 'right' | 'top' | 'bottom' | 'left';
}

export default function Popover({
  trigger,
  children,
  side = 'bottom',
  noPortal = false,
}: PopoverProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      {noPortal ? (
        <RadixPopover.Content side={side}>{children}</RadixPopover.Content>
      ) : (
        <RadixPopover.Portal>
          <RadixPopover.Content side={side}>{children}</RadixPopover.Content>
        </RadixPopover.Portal>
      )}
    </RadixPopover.Root>
  );
}
