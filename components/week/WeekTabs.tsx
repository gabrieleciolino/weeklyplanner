import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { updateSelectedWeek } from '@/app/store/appSlice';
import Button from '../ui/Button';
import { useEffect, useMemo, useRef, useState } from 'react';
import Icons from '../ui/Icons';

export default function WeekHeader() {
  const [tabsWidth, setTabsWidth] = useState<number[]>([]);
  const [, setScrollPosition] = useState(0);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  const tabsContainerRef = useRef<HTMLUListElement>(null);

  const tabsRefs = useRef<(HTMLLIElement | null)[]>([]);

  const weekState = useSelector((state: RootState) => state.week);
  const selectedWeek = useSelector(
    (state: RootState) => state.app.selectedWeek,
  );
  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    dispatch(updateSelectedWeek(id));
  };

  const weeks = useMemo(() => Object.keys(weekState), [weekState]);

  useEffect(() => {
    const widths = tabsRefs.current.map((tab) => (tab ? tab.offsetWidth : 0));
    setTabsWidth(widths);
  }, [weeks]);

  useEffect(() => {
    const checkScroll = () => {
      if (tabsContainerRef.current) {
        setShowScrollButtons(
          tabsContainerRef.current.scrollWidth >
            tabsContainerRef.current.clientWidth,
        );
      }
    };

    checkScroll();

    // Ascolta gli eventi di resize perché la necessità di scorrimento potrebbe cambiare al ridimensionamento della finestra
    window.addEventListener('resize', checkScroll);

    // Pulisci l'ascoltatore dell'evento al smontaggio del componente
    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, [tabsContainerRef, tabsWidth]);

  const handleScrollLeft = () => {
    if (!tabsContainerRef.current || !tabsWidth.length) return;

    const currentScroll = tabsContainerRef.current.scrollLeft;
    let targetScrollPosition = currentScroll;

    for (const width of tabsWidth.reverse()) {
      targetScrollPosition -= width;
      if (targetScrollPosition < currentScroll) break;
    }

    // Assicuriamoci che non scorriamo oltre l'inizio
    if (targetScrollPosition < 0) {
      targetScrollPosition = 0;
    }

    tabsContainerRef.current.scroll({
      left: targetScrollPosition,
      behavior: 'smooth',
    });
    setScrollPosition(targetScrollPosition);
  };

  const handleScrollRight = () => {
    if (!tabsContainerRef.current || !tabsWidth.length) return;

    const currentScroll = tabsContainerRef.current.scrollLeft;
    let targetScrollPosition = currentScroll;

    for (const width of tabsWidth) {
      targetScrollPosition += width;
      if (targetScrollPosition > currentScroll) break;
    }

    // Assicuriamoci di non scorriamo oltre la fine
    const maxScrollPosition =
      tabsContainerRef.current.scrollWidth -
      tabsContainerRef.current.offsetWidth;
    if (targetScrollPosition > maxScrollPosition) {
      targetScrollPosition = maxScrollPosition;
    }

    tabsContainerRef.current.scroll({
      left: targetScrollPosition,
      behavior: 'smooth',
    });
    setScrollPosition(targetScrollPosition);
  };

  return (
    <div className="mx-2 my-4 py-2 lg:mx-4">
      <div className="flex items-center">
        <ul
          className="flex max-w-[90%] gap-x-4 overflow-hidden"
          ref={tabsContainerRef}
        >
          {weeks.map((weekId, idx) => (
            <li
              key={idx}
              onClick={() => handleClick(weekId)}
              ref={(el) => (tabsRefs.current[idx] = el)}
              style={{ zIndex: weeks.length - idx }}
            >
              <Button
                size="large"
                variant={selectedWeek === weekId ? 'primary' : 'tertiary'}
              >
                {weekState[weekId].title}
              </Button>
            </li>
          ))}
        </ul>
        {showScrollButtons && (
          <div className="ml-auto flex items-center gap-2 pl-2 pt-2">
            <Button onClick={handleScrollLeft} size="icon" variant="secondary">
              <Icons name="arrow-left" variant="secondary" />
            </Button>
            <Button onClick={handleScrollRight} size="icon" variant="secondary">
              <Icons name="arrow-right" variant="secondary" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
