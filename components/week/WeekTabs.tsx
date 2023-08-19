import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { updateSelectedWeek } from '@/app/store/appSlice';

export default function WeekHeader() {
  const weekState = useSelector((state: RootState) => state.week);
  const selectedWeek = useSelector(
    (state: RootState) => state.app.selectedWeek,
  );
  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    dispatch(updateSelectedWeek(id));
  };

  const weeks = Object.keys(weekState);

  return (
    <div className="mx-2 my-4 overflow-x-auto whitespace-nowrap rounded-full bg-riptide-100 py-2 lg:mx-4">
      <ul className="flex gap-8 px-2">
        {weeks.map((weekId, idx) => (
          <li
            key={idx}
            className={`text-md min-w-[80px] cursor-pointer items-center overflow-hidden text-ellipsis rounded-full text-center font-roboto ${
              selectedWeek === weekId
                ? ' font-bold text-fuchsia-blue-700'
                : 'text-riptide-800'
            } `}
            onClick={() => handleClick(weekId)}
            style={{ zIndex: weeks.length - idx }}
          >
            {weekState[weekId].title}
          </li>
        ))}
      </ul>
    </div>
  );
}
