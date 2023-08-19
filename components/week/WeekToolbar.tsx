'use client';

import React, { useRef } from 'react';
import Button from '../ui/Button';
import Select from '../ui/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { update as updateWeek, add as addWeek } from '@/app/store/weekSlice';
import { add as addTemplate } from '@/app/store/templateSlice';
import { updateMode } from '@/app/store/appSlice';

export default function WeekToolbar() {
  const toolbarSentinelRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);

  const weekState = useSelector((state: RootState) => state.week);
  const templateState = useSelector((state: RootState) => state.template);
  const selectedCells = useSelector(
    (state: RootState) => state.app.selectedCells,
  );
  const selectedWeek = useSelector(
    (state: RootState) => state.app.selectedWeek,
  );
  const mode = useSelector((state: RootState) => state.app.mode);

  const dispatch = useDispatch();

  const templateKeys = Object.keys(templateState);

  const handleNewWeek = () => {
    const weekName = prompt('Enter week name');
    const newWeekId = `week-${Date.now()}`;

    dispatch(
      addWeek({
        id: newWeekId,
        title: weekName ?? 'Default week',
        cells: {},
      }),
    );
  };

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

  const handleModeChange = () => {
    dispatch(updateMode(mode === 'edit' ? 'select' : 'edit'));
  };

  console.log('mode', mode, selectedCells);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4" ref={toolbarRef}>
        <Button variant="primary" onClick={handleNewWeek}>
          Add week
        </Button>
        <Button variant="tertiary" onClick={handleModeChange}>
          Mode: {mode}
        </Button>
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
        <Button variant="tertiary" onClick={handleSaveTemplate}>
          Save as template
        </Button>
      </div>
      <div ref={toolbarSentinelRef} style={{ height: '1px' }}></div>
    </>
  );
}
