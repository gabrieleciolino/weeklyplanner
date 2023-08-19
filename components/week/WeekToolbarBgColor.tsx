import { PiSelectionBackground } from 'react-icons/pi';
import Button from '../ui/Button';
import Popover from '../ui/Popover';
import Color from '../ui/Color';
import * as RadixPopover from '@radix-ui/react-popover';
import { useRef } from 'react';
import IconButton from '../ui/IconButton';

interface WeekToolbarBgColorProps {
  selectedCells: string[];
  handleClick: (color: string) => void;
  open?: boolean;
}

export default function WeekToolbarBgColor({
  selectedCells,
  handleClick,
  open = false,
}: WeekToolbarBgColorProps) {
  return (
    <Popover
      open={open}
      trigger={
        <IconButton icon={<PiSelectionBackground />} label="Background" />
      }
    >
      <div className="bg-purple my-4 rounded-md p-4 shadow">
        <div className="flex gap-2">
          <Color color="#FFD1DC" onClick={() => handleClick('#FFD1DC')} />
          <Color color="#D1E8FF" onClick={() => handleClick('#D1E8FF')} />
          <Color color="#D4F4E2" onClick={() => handleClick('#D4F4E2')} />
          <Color color="#FFFAE1" onClick={() => handleClick('#FFFAE1')} />
          <Color color="#E4D8FF" onClick={() => handleClick('#E4D8FF')} />

          <Color color="#FFC1A1" onClick={() => handleClick('#FFC1A1')} />
          <Color color="#A1FFEF" onClick={() => handleClick('#A1FFEF')} />
          <Color color="#C1FFA1" onClick={() => handleClick('#C1FFA1')} />
          <Color color="#DAA1FF" onClick={() => handleClick('#DAA1FF')} />
          <Color color="#FFBAA1" onClick={() => handleClick('#FFBAA1')} />
        </div>
      </div>
    </Popover>
  );
}
