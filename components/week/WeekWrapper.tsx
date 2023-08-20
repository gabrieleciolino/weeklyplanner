'use client';

import { useEffect } from 'react';
import WeekTabs from './WeekTabs';
import WeekGrid from '../grid/WeekGrid';
import { RootState } from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateMode,
  updateSelectedCells,
  updateSelectedWeek,
} from '@/app/store/appSlice';

export default function WeekWrapper() {
  const weekState = useSelector((state: RootState) => state.week);
  const selectedWeek = useSelector(
    (state: RootState) => state.app.selectedWeek,
  );

  const dispatch = useDispatch();

  const defaultWeekId = Object.keys(weekState)[0] || '';

  useEffect(() => {
    if (!selectedWeek) {
      dispatch(updateSelectedWeek(defaultWeekId));
    }
  }, [defaultWeekId, dispatch, selectedWeek]);

  useEffect(() => {
    if (selectedWeek) {
      dispatch(updateSelectedCells([]));
      dispatch(updateMode('edit'));
    }
  }, [dispatch, selectedWeek]);

  console.log(JSON.stringify(weekState, null, 2));

  return (
    <>
      {Object.keys(weekState).length > 0 ? (
        <>
          <WeekTabs />
          <WeekGrid />
        </>
      ) : (
        <div className="mx-4 my-32 text-center">
          <h2 className="text-2xl font-normal lg:text-4xl">
            No week added yet.
          </h2>
        </div>
      )}
    </>
  );
}
