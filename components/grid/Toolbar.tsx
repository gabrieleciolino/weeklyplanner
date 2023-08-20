import { RootState } from '@/app/store';
import ToolbarBgColorPopover from './ToolbarBgColorPopover';
import ToolbarTextColorPopover from './ToolbarTextColorPopover';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';
import { updateSelectedCells } from '@/app/store/appSlice';
import { update } from '@/app/store/weekSlice';
import { WeekItem } from '@/types';
import Icons from '../ui/Icons';

export default function Toolbar() {
  const mode = useSelector((state: RootState) => state.app.mode);
  const weekState = useSelector((state: RootState) => state.week);
  const selectedWeek = useSelector(
    (state: RootState) => state.app.selectedWeek,
  );
  const selectedCells = useSelector(
    (state: RootState) => state.app.selectedCells,
  );

  const dispatch = useDispatch();

  if (mode === 'edit') {
    return null;
  }

  const clearStyle = () => {
    dispatch(
      update({
        id: selectedWeek,
        cells: {
          ...weekState[selectedWeek].cells,
          ...selectedCells.reduce<WeekItem['cells']>((acc, cellId) => {
            acc[cellId] = {
              ...weekState[selectedWeek].cells[cellId],
              textColor: undefined,
              bgColor: undefined,
            };
            return acc;
          }, {}),
        },
      }),
    );
  };

  const clearSelection = () => {
    dispatch(updateSelectedCells([]));
  };

  return (
    <div className="mx-auto w-auto">
      <div className="mx-2  rounded-full bg-white px-8 py-6 text-sm shadow">
        <div className="col-span-2 flex items-center gap-12">
          <ToolbarBgColorPopover />
          <ToolbarTextColorPopover />
          <Button
            variant="secondary"
            size="icon"
            onClick={clearStyle}
            label="Clear style"
          >
            <Icons name="clear" variant="secondary" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={clearSelection}
            label="Clear selection"
          >
            <Icons name="clear" variant="secondary" />
          </Button>
        </div>
      </div>
    </div>
  );
}
