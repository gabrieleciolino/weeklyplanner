import * as RadixSelect from '@radix-ui/react-select';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';

interface SelectProps {
  placeholder?: string;
  label?: string;
  options: { label: string; value: string }[];
  onValueChange: (val: string) => void;
  value?: string;
  size?: 'small' | 'base' | 'large';
}

export default function Select({
  placeholder = 'Select an option',
  label = 'Value',
  options,
  value,
  size = 'base',
  onValueChange,
}: SelectProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [contentWidth, setContentWidth] = useState(0); // State to store the width

  useEffect(() => {
    if (triggerRef.current) {
      setContentWidth(triggerRef.current.offsetWidth); // Set the width when the component mounts or updates
    }
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <RadixSelect.Root
      {...(value && { value: selectedOption?.value })}
      onValueChange={(val) => onValueChange(val)}
    >
      <RadixSelect.Trigger ref={triggerRef} asChild>
        <Button variant="tertiary" size={size}>
          <RadixSelect.Value className="" placeholder={placeholder}>
            {!selectedOption?.label && <>{placeholder}</>}
            {selectedOption?.label && (
              <>
                {label}: {selectedOption?.label}
              </>
            )}
          </RadixSelect.Value>
        </Button>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          style={{ width: `${contentWidth}px` }}
        >
          <RadixSelect.Viewport>
            <div className=" my-4 bg-white">
              <RadixSelect.Group>
                {options.map((option, idx) => (
                  <RadixSelect.Item
                    key={idx}
                    value={option.value}
                    className="bg-lightMint mb-2 flex h-[30px] cursor-pointer items-center justify-center rounded-full"
                  >
                    {option.label}
                  </RadixSelect.Item>
                ))}
              </RadixSelect.Group>
            </div>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
