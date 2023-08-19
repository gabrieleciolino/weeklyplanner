import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { update } from '@/app/store/weekSlice';

interface WeekTabsProps {
  selectedWeek: string;
  setSelectedWeek: React.Dispatch<React.SetStateAction<string>>;
}

export default function WeekHeader({
  selectedWeek,
  setSelectedWeek,
}: WeekTabsProps) {
  const [editingWeekId, setEditingWeekId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editingWeekId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingWeekId]);

  const weekState = useSelector((state: RootState) => state.week);
  const dispatch = useDispatch();

  const handleDoubleClick = (weekId: string) => {
    setEditingWeekId(weekId);
  };

  const handleWeekTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      dispatch(
        update({
          id: selectedWeek,
          title: e.currentTarget.value,
        }),
      );
    }
  };

  const handleClick = (id: string) => {
    setSelectedWeek(id);
  };

  const handleBlur = () => {
    setEditingWeekId(null);
  };

  const weeks = Object.keys(weekState);

  return (
    <div className="my-4">
      <ul className="flex h-full items-center gap-4">
        {weeks.map((weekId, idx) => (
          <li
            key={idx}
            className={`inline-flex h-[40px] items-center rounded-full text-xl ${
              selectedWeek === weekId ? ' text-purple' : 'text-mint'
            } `}
            onClick={() => handleClick(weekId)}
            onDoubleClick={() => handleDoubleClick(weekId)}
            style={{ zIndex: weeks.length - idx }}
          >
            <input
              ref={inputRef}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleWeekTitle(e)
              }
              value={weekState[weekId].title}
              className={`w-[80px] bg-transparent text-center outline-none`}
              disabled={editingWeekId !== weekId}
              onBlur={handleBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
