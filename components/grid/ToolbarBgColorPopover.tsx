import Popover from '../ui/Popover';
import Color from '../ui/Color';
import { update as updateWeek } from '@/app/store/weekSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { WeekItem } from '@/types';
import Button from '../ui/Button';
import Icons from '../ui/Icons';

export default function ToolbarBgColorPopover() {
  const weekState = useSelector((state: RootState) => state.week);
  const selectedCells = useSelector(
    (state: RootState) => state.app.selectedCells,
  );
  const selectedWeek = useSelector(
    (state: RootState) => state.app.selectedWeek,
  );

  const dispatch = useDispatch();

  const handleBgColorChange = (color: string) => {
    dispatch(
      updateWeek({
        id: selectedWeek,
        cells: {
          ...weekState[selectedWeek].cells,
          ...selectedCells.reduce<WeekItem['cells']>((acc, cellId) => {
            acc[cellId] = {
              ...weekState[selectedWeek].cells[cellId],
              bgColor: color,
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
        <Button size="icon" label="Background" variant="secondary">
          <Icons name="palette" variant="secondary" />
        </Button>
      }
    >
      <div className="my-4 rounded-md bg-fuchsia-blue-400 p-4 shadow">
        <div className="flex gap-2">
          <Color
            color="#FFD1DC"
            onClick={() => handleBgColorChange('#FFD1DC')}
          />
          <Color
            color="#D1E8FF"
            onClick={() => handleBgColorChange('#D1E8FF')}
          />
          <Color
            color="#D4F4E2"
            onClick={() => handleBgColorChange('#D4F4E2')}
          />
          <Color
            color="#FFFAE1"
            onClick={() => handleBgColorChange('#FFFAE1')}
          />
          <Color
            color="#E4D8FF"
            onClick={() => handleBgColorChange('#E4D8FF')}
          />
          <Color
            color="#FFC1A1"
            onClick={() => handleBgColorChange('#FFC1A1')}
          />
          <Color
            color="#A1FFEF"
            onClick={() => handleBgColorChange('#A1FFEF')}
          />
        </div>
      </div>
    </Popover>
  );
}
