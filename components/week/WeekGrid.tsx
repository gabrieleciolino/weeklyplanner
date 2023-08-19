import { RootState } from '@/app/store';
import { update } from '@/app/store/weekSlice';
import { ModeType } from '@/types';
import { useDispatch, useSelector } from 'react-redux';

interface WeekGridProps {
  selectedCells: string[];
  setSelectedCells: React.Dispatch<React.SetStateAction<string[]>>;
  selectedWeek: string;
  mode: ModeType;
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
}

export default function WeekGrid({
  selectedCells,
  setSelectedCells,
  selectedWeek,
  mode,
  setMode,
}: WeekGridProps) {
  const weekState = useSelector((state: RootState) => state.week);
  const dispatch = useDispatch();

  const hours = Array.from({ length: 19 }, (_, i) => i + 6);
  const days = Array.from({ length: 7 }, (_, i) => i + 1);

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

  return (
    <div className="mb-24 overflow-scroll">
      <div className="grid-rows-12 grid min-w-[800px] bg-white p-2 md:p-4">
        <div className="border-purple mb-4 grid grid-cols-8 gap-4 border-b-2 p-2">
          <div></div>
          <div className="weekCell">Mon</div>
          <div className="weekCell">Tue</div>
          <div className="weekCell">Wed</div>
          <div className="weekCell">Thu</div>
          <div className="weekCell">Fri</div>
          <div className="weekCell">Sat</div>
          <div className="weekCell">Sun</div>
        </div>
        {hours.map((hour, i) => (
          <div key={i} className="mb-4 grid h-[50px] grid-cols-8 gap-4">
            <div className="border-purple flex items-end justify-end border-b pb-0 pt-2">
              {hour}
            </div>
            {days.map((day, ii) => (
              <div
                className={`dayCell`}
                key={ii}
                style={{
                  ...(weekState[selectedWeek]?.cells[`${i}#${ii}`]?.bgColor && {
                    backgroundColor:
                      weekState[selectedWeek].cells[`${i}#${ii}`].bgColor,
                  }),
                }}
              >
                <textarea
                  className={`h-full w-full resize-none whitespace-nowrap bg-transparent text-center leading-[50px] outline-none  ${
                    selectedCells.includes(`${i}#${ii}`)
                      ? 'border-mint border-2'
                      : 'border-none'
                  } overflow-hidden ${
                    mode === 'select' ? 'cursor-pointer' : ''
                  }`}
                  rows={1}
                  // onFocus={() => handleFocus(`${i}#${ii}`)}
                  // onBlur={handleBlur}
                  {...(mode === 'select' && {
                    onClick: () => {
                      if (selectedCells.includes(`${i}#${ii}`)) {
                        setSelectedCells(
                          selectedCells.filter((cell) => cell !== `${i}#${ii}`),
                        );
                        return;
                      } else {
                        setSelectedCells([...selectedCells, `${i}#${ii}`]);
                      }
                    },
                  })}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleChange(e, `${i}#${ii}`)
                  }
                  onKeyDown={(e) => handleKeyDown(e, ii)}
                  value={
                    weekState[selectedWeek]?.cells[`${i}#${ii}`]?.value ?? ''
                  }
                  readOnly={mode === 'select'}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
