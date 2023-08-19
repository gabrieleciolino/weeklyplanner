import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';
import Button from '../ui/Button';
import { useRef, useState } from 'react';
import ActivityPopover from './ActivityPopover';
import Toolbar from './Toolbar';
import ActivityTextarea from './ActivityTextarea';

export default function WeekGrid() {
  const [gridPage, setGridPage] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const weekState = useSelector((state: RootState) => state.week);

  const selectedWeek = useSelector(
    (state: RootState) => state.app.selectedWeek,
  );

  const hours = Array.from({ length: 19 }, (_, i) => i + 6);
  const days = Array.from({ length: 7 }, (_, i) => i + 1);

  const windowWidth = window.innerWidth;
  const gridWidth = gridRef.current && gridRef.current.offsetWidth;
  const showPageButton = gridWidth && gridWidth > windowWidth;

  const handleClickOnNavigation = () => {
    if (gridWidth && gridWidth > windowWidth) {
      if (gridPage === 0) {
        gridRef.current.style.marginLeft = `-${windowWidth}px`;
        setGridPage(1);
      } else {
        gridRef.current.style.marginLeft = `0px`;
        setGridPage(0);
      }
    }
  };

  return (
    <div className="overflow-hidden p-2 md:p-4">
      {showPageButton && (
        <Button size="small" onClick={handleClickOnNavigation}>
          {gridPage === 0 ? 'Next' : 'Prev'}
        </Button>
      )}
      <div className="grid-rows-12 grid bg-white" ref={gridRef}>
        <div className="border-purple mb-2 grid grid-cols-8 gap-4 border-b-2 lg:mb-4">
          <div className=""></div>
          <div className="weekCell">Mon</div>
          <div className="weekCell">Tue</div>
          <div className="weekCell">Wed</div>
          <div className="weekCell">Thu</div>
          <div className="weekCell">Fri</div>
          <div className="weekCell">Sat</div>
          <div className="weekCell">Sun</div>
        </div>
        {hours.map((hour, i) => (
          <div
            key={i}
            className="mb-4 grid h-[30px] grid-cols-8 gap-4 lg:h-[50px]"
          >
            <div className="border-purple flex items-end justify-end border-b pb-0 pt-2">
              {hour}
            </div>
            {days.map((day, ii) => (
              <div
                className={`h-[30px] rounded-full border border-gray-100 text-center lg:h-[50px]`}
                key={ii}
              >
                <ActivityTextarea col={i} row={ii} />
                <ActivityPopover
                  value={weekState[selectedWeek]?.cells[`${i}#${ii}`]?.value}
                >
                  {/* {mode === 'select' ? (
                    <div
                      className="px-4 h-[28px] rounded-full bg-white border border-fuchsia-blue-700 flex items-center text-fuchsia-blue-700"
                      style={{
                        ...(weekState[selectedWeek]?.cells[`${i}#${ii}`]
                          ?.bgColor && {
                          backgroundColor:
                            weekState[selectedWeek]?.cells[`${i}#${ii}`]
                              ?.bgColor,
                        }),
                        ...(weekState[selectedWeek]?.cells[`${i}#${ii}`]
                          ?.textColor && {
                          color:
                            weekState[selectedWeek]?.cells[`${i}#${ii}`]
                              ?.textColor,
                        }),
                      }}
                    >
                      {weekState[selectedWeek]?.cells[`${i}#${ii}`]?.value}
                    </div>
                  ) : ( */}
                  <div className="h-[28px] rounded-full border border-fuchsia-blue-700 bg-white">
                    <ActivityTextarea
                      col={i}
                      row={ii}
                      forceVisible
                      style={{
                        border: 'none',
                        lineHeight: '28px',
                      }}
                    />
                  </div>
                  {/* )} */}
                </ActivityPopover>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 left-0 flex w-full items-center">
        <Toolbar />
      </div>
    </div>
  );
}
