'use client';

import React from 'react';
import Button from '../ui/Button';
import Select from '../ui/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { update as updateWeek, add as addWeek } from '@/app/store/weekSlice';
import { add as addTemplate } from '@/app/store/templateSlice';
import { updateMode } from '@/app/store/appSlice';
import Icons from '@/components/ui/Icons';

export default function WeekToolbar() {
  const weekState = useSelector((state: RootState) => state.week);
  const templateState = useSelector((state: RootState) => state.template);
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

  return (
    <>
      <div className="mx-auto flex max-w-[500px] justify-between gap-x-8 gap-y-8 lg:justify-center lg:gap-x-16">
        <Button
          variant="primary"
          onClick={handleNewWeek}
          size="icon"
          label="New week"
        >
          <Icons name="newFile" />
        </Button>
        <Button
          variant="tertiary"
          onClick={handleModeChange}
          size="icon"
          label="Mode"
        >
          {mode === 'edit' ? (
            <Icons name="edit" variant="secondary" />
          ) : (
            <Icons name="select" variant="secondary" />
          )}
        </Button>
        <div className="hidden lg:block">
          <Button
            variant="tertiary"
            onClick={handleSaveTemplate}
            size="icon"
            label="Save as template"
          >
            <Icons name="save" variant="secondary" />
          </Button>
        </div>
        <div className="block lg:hidden">
          <Button
            variant="tertiary"
            onClick={handleSaveTemplate}
            size="icon"
            label="Save"
          >
            <Icons name="save" variant="secondary" />
          </Button>
        </div>
        <div className="flex justify-center">
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
        </div>
      </div>
    </>
  );
}
