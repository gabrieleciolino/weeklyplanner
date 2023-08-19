import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { PiSelectionBackground } from 'react-icons/pi';
import { IoMdColorPalette } from 'react-icons/io';
import { BsSave } from 'react-icons/bs';
import { ModeType, TemplateStateType, WeekItem, WeekStateType } from '@/types';
import Select from '../ui/Select';
import Popover from '../ui/Popover';
import WeekToolbarBgColor from './WeekToolbarBgColor';
import WeekToolbarTextColor from './WeekToolbarTextColor';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { update as updateWeek } from '@/app/store/weekSlice';
import { add as addTemplate } from '@/app/store/templateSlice';

interface WeekToolbarProps {
  selectedCells: string[];
  selectedWeek: string;
  mode: ModeType;
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
}

export default function WeekToolbar({
  selectedCells,
  selectedWeek,
  mode,
  setMode,
}: WeekToolbarProps) {
  const toolbarSentinelRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);

  const [bgColorPopoverOpen, setBgColorPopoverOpen] = React.useState(false);
  const [textColorPopoverOpen, setTextColorPopoverOpen] = React.useState(false);

  useEffect(() => {
    const headerElement = toolbarRef.current;

    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      if (headerElement && !entries[0].isIntersecting) {
        headerElement.classList.add('sticky-toolbar');
      } else if (headerElement) {
        headerElement.classList.remove('sticky-toolbar');
      }
    };

    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (toolbarSentinelRef.current)
      observer.observe(toolbarSentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const weekState = useSelector((state: RootState) => state.week);
  const templateState = useSelector((state: RootState) => state.template);
  const dispatch = useDispatch();

  const templateKeys = Object.keys(templateState);

  const handleSaveTemplate = () => {
    const templateName = prompt('Enter template name');
    const newTemplateId = `template-${Date.now()}`;

    if (templateName && newTemplateId) {
      dispatch(
        addTemplate({
          id: newTemplateId,
          title: templateName ?? 'Default template',
          cells: {
            ...weekState[selectedWeek].cells,
          },
        }),
      );
    }
  };

  const handleChooseTemplate = (id: string) => {
    const strippedId = id.split('_')[0];
    const template = templateState[strippedId];

    if (template) {
      dispatch(
        updateWeek({
          id: selectedWeek,
          templateId: id,
          cells: {
            ...template.cells,
          },
        }),
      );
    }
  };

  const handleBgColorChange = (color: string) => {
    dispatch(
      updateWeek({
        id: selectedWeek,
        cells: {
          ...weekState[selectedWeek].cells,
          ...selectedCells.reduce<WeekItem['cells']>((acc, cellId) => {
            acc[cellId] = {
              ...weekState[selectedWeek].cells[cellId],
              bgColor: color,
            };
            return acc;
          }, {}),
        },
      }),
    );
    setBgColorPopoverOpen(false);
  };

  const handleTextColorChange = (color: string) => {
    dispatch(
      updateWeek({
        id: selectedWeek,
        cells: {
          ...weekState[selectedWeek].cells,
          ...selectedCells.reduce<WeekItem['cells']>((acc, cellId) => {
            acc[cellId] = {
              ...weekState[selectedWeek].cells[cellId],
              textColor: color,
            };
            return acc;
          }, {}),
        },
      }),
    );
    setTextColorPopoverOpen(false);
  };

  const modes = [
    { value: 'select', label: 'Select' },
    { value: 'edit', label: 'Edit' },
  ];

  return (
    <>
      <div
        className="bg-purple flex h-[60px] items-center px-2 py-4 lg:py-0 xl:px-4"
        ref={toolbarRef}
      >
        <div className="grid w-full grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <Button
              variant="tertiary"
              onClick={() => setMode(mode === 'edit' ? 'select' : 'edit')}
            >
              <div className="text-xs lg:text-base">
                {mode === 'edit' ? 'Edit mode' : 'Select mode'}
              </div>
            </Button>
            {templateKeys.length > 0 && (
              <Select
                placeholder="Choose a template"
                label="Template"
                options={templateKeys.map((templateKey) => ({
                  value: `${templateKey}_${selectedWeek}`,
                  label: templateState[templateKey].title,
                }))}
                onValueChange={(val) => handleChooseTemplate(val)}
                value={weekState[selectedWeek]?.templateId}
              />
            )}
            <Button variant="tertiary" onClick={handleSaveTemplate}>
              <div className="text-xs leading-3 lg:text-base">
                Save as template
              </div>
            </Button>
          </div>
          {mode === 'select' && selectedCells.length > 0 && (
            <div className="ml-auto p-2 text-sm">
              <div className="col-span-2 flex items-center gap-2">
                <WeekToolbarBgColor
                  selectedCells={selectedCells}
                  handleClick={handleBgColorChange}
                />
                <WeekToolbarTextColor
                  selectedCells={selectedCells}
                  handleClick={handleTextColorChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div ref={toolbarSentinelRef} style={{ height: '1px' }}></div>
    </>
  );
}
