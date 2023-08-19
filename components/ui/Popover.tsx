import * as RadixPopover from '@radix-ui/react-popover';
import { useRef } from 'react';

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
}

export default function Popover({
  trigger,
  children,
  open = false,
}: PopoverProps) {
  return (
    <RadixPopover.Root open={open}>
      <RadixPopover.Trigger asChild>
        <div>{trigger}</div>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content>{children}</RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
