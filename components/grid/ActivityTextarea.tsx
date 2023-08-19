import { RootState } from '@/app/store';
import { updateSelectedCells } from '@/app/store/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '@/app/store/weekSlice';

interface ActivityTextareaProps {
  col: number;
  row: number;
  style?: React.CSSProperties;
  forceVisible?: boolean;
}

export default function ActivityTextarea({
  col,
  row,
  forceVisible,
  style = {},
}: ActivityTextareaProps) {
  const weekState = useSelector((state: RootState) => state.week);
  const selectedCells = useSelector(
    (state: RootState) => state.app.selectedCells,
  );
  const selectedWeek = useSelector(
    (state: RootState) => state.app.selectedWeek,
  );
  const mode = useSelector((state: RootState) => state.app.mode);

  const dispatch = useDispatch();

  const handleClickOnSelectMode = (colIdx: number, rowIdx: number) => {
    if (selectedCells.includes(`${colIdx}#${rowIdx}`)) {
      dispatch(
        updateSelectedCells(
          selectedCells.filter((cell) => cell !== `${colIdx}#${rowIdx}`),
        ),
      );
    } else {
      dispatch(updateSelectedCells([...selectedCells, `${colIdx}#${rowIdx}`]));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, col: number) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const parent = document.activeElement?.parentElement?.parentElement;
      const nextSibling = parent?.nextSibling;
      if (nextSibling) {
        const nextSiblingChild = nextSibling.childNodes[col + 1] as HTMLElement;
        if (nextSiblingChild) {
          nextSiblingChild.querySelector('textarea')?.focus();
        }
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: string,
  ) => {
    if (e.currentTarget) {
      dispatch(
        update({
          id: selectedWeek,
          cells: {
            ...weekState[selectedWeek].cells,
            [id]: {
              ...weekState[selectedWeek].cells[id],
              value: e.currentTarget.value,
            },
          },
        }),
      );
    }
  };

  return (
    <textarea
      className={`${
        forceVisible ? '' : 'hidden lg:block'
      } h-full w-full resize-none whitespace-nowrap rounded-full bg-transparent text-center leading-[50px] outline-none  ${
        selectedCells.includes(`${col}#${row}`)
          ? 'border-2 border-riptide-400'
          : 'border-none'
      } overflow-hidden ${mode === 'select' ? 'cursor-pointer' : ''}`}
      style={{
        ...(weekState[selectedWeek]?.cells[`${col}#${row}`]?.bgColor && {
          backgroundColor:
            weekState[selectedWeek].cells[`${col}#${row}`].bgColor,
        }),
        ...(weekState[selectedWeek]?.cells[`${col}#${row}`]?.textColor && {
          color: weekState[selectedWeek].cells[`${col}#${row}`].textColor,
        }),
        ...style,
      }}
      rows={1}
      // onFocus={() => handleFocus(`${i}#${ii}`)}
      // onBlur={handleBlur}
      {...(mode === 'select' && {
        onClick: () => handleClickOnSelectMode(col, row),
      })}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        handleChange(e, `${col}#${row}`)
      }
      onKeyDown={(e) => handleKeyDown(e, row)}
      value={weekState[selectedWeek]?.cells[`${col}#${row}`]?.value ?? ''}
      readOnly={mode === 'select'}
    />
  );
}
