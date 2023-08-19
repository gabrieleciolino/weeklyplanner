'use client';

import { ModeType } from '@/types';
import { useEffect, useState } from 'react';
import WeekTabs from './WeekTabs';
import WeekToolbar from './WeekToolbar';
import WeekGrid from './WeekGrid';
import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';
import WeekAddButton from './WeekAddButton';

export default function WeekWrapper() {
  const [selectedWeek, setSelectedWeek] = useState<string>('');
  const [selectedCells, setSelectedCells] = useState<string[]>([]);
  const [mode, setMode] = useState<ModeType>('edit');

  const weekState = useSelector((state: RootState) => state.week);
  const defaultWeekId = Object.keys(weekState)[0] || '';

  useEffect(() => {
    if (!selectedWeek) {
      setSelectedWeek(defaultWeekId);
    }
  }, [defaultWeekId, selectedWeek, weekState]);

  useEffect(() => {
    if (selectedWeek) {
      setSelectedCells([]);
      setMode('edit');
    }
  }, [selectedWeek]);

  useEffect(() => {
    if (mode === 'edit') {
      setSelectedCells([]);
    }
  }, [mode, selectedCells]);

  return (
    <>
      {Object.keys(weekState).length > 0 ? (
        <>
          <WeekToolbar
            selectedCells={selectedCells}
            selectedWeek={selectedWeek}
            mode={mode}
            setMode={setMode}
          />
          <WeekTabs
            selectedWeek={selectedWeek}
            setSelectedWeek={setSelectedWeek}
          />
          <WeekGrid
            selectedCells={selectedCells}
            setSelectedCells={setSelectedCells}
            selectedWeek={selectedWeek}
            mode={mode}
            setMode={setMode}
          />
        </>
      ) : (
        <div className="mx-4 my-20 text-center">
          <h2 className="text-2xl font-normal lg:text-5xl">
            No week added yet.
          </h2>
          <div className="mt-8 flex items-center">
            <div className="mx-auto">
              <WeekAddButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
