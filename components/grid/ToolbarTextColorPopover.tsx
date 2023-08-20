import Popover from '../ui/Popover';
import Color from '../ui/Color';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { update as updateWeek } from '@/app/store/weekSlice';
import { WeekItem } from '@/types';
import Button from '../ui/Button';
import Icons from '../ui/Icons';

export default function ToolbarTextColorPopover() {
  const weekState = useSelector((state: RootState) => state.week);
  const selectedCells = useSelector(
    (state: RootState) => state.app.selectedCells,
  );
  const selectedWeek = useSelector(
    (state: RootState) => state.app.selectedWeek,
  );

  const dispatch = useDispatch();

  const handleTextColorChange = (color: string) => {
    dispatch(
      updateWeek({
        id: selectedWeek,
        cells: {
          ...weekState[selectedWeek].cells,
          ...selectedCells.reduce<WeekItem['cells']>((acc, cellId) => {
            acc[cellId] = {
              ...weekState[selectedWeek].cells[cellId],
              textColor: color,
            };
            return acc;
          }, {}),
        },
      }),
    );
  };

  return (
    <Popover
      trigger={
        <Button size="icon" label="Text" variant="secondary">
          <Icons name="palette" variant="secondary" />
        </Button>
      }
    >
      <div className="my-4 rounded-md bg-fuchsia-blue-400 p-4 shadow">
        <div className="flex gap-2">
          <Color
            color="#333333"
            onClick={() => handleTextColorChange('#333333')}
          />
          <Color
            color="#555555"
            onClick={() => handleTextColorChange('#555555')}
          />
          <Color
            color="#4B4B4B"
            onClick={() => handleTextColorChange('#4B4B4B')}
          />
          <Color
            color="#4E2C00"
            onClick={() => handleTextColorChange('#4E2C00')}
          />
          <Color
            color="#001F4D"
            onClick={() => handleTextColorChange('#001F4D')}
          />
          <Color
            color="#004D26"
            onClick={() => handleTextColorChange('#004D26')}
          />
          <Color
            color="#4D0019"
            onClick={() => handleTextColorChange('#4D0019')}
          />
        </div>
      </div>
    </Popover>
  );
}
