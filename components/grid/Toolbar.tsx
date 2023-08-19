import { RootState } from '@/app/store';
import ToolbarBgColorPopover from './ToolbarBgColorPopover';
import ToolbarTextColorPopover from './ToolbarTextColorPopover';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';
import { updateSelectedCells } from '@/app/store/appSlice';
import { update } from '@/app/store/weekSlice';
import { WeekItem } from '@/types';

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

  if (mode === 'edit' || selectedCells.length === 0) {
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
    <div className="mx-auto w-auto rounded-full border border-riptide-200 bg-white px-4 py-2 shadow">
      <div className="ml-auto p-2 text-sm">
        <div className="col-span-2 flex items-center gap-4">
          <ToolbarBgColorPopover />
          <ToolbarTextColorPopover />
          <div>Selected: {selectedCells.length}</div>
          <Button variant="secondary" size="small" onClick={clearStyle}>
            <div className="text-sm">Clear style</div>
          </Button>
          <Button variant="secondary" size="small" onClick={clearSelection}>
            <div className="text-sm">Clear selection</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
