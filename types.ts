export type WeekItem = {
  id: string;
  title: string;
  templateId?: string;
  cells: {
    [key: string]: {
      value: string;
      bgColor?: string;
      textColor?: string;
    };
  };
};

export type WeekStateType = {
  [K in WeekItem['id']]: WeekItem;
};

export type TemplateItem = {
  id: string;
  title: string;
  cells: {
    [key: string]: {
      value: string;
    };
  };
};

export type TemplateStateType = {
  [K in TemplateItem['id']]: TemplateItem;
};

export type ModeType = 'select' | 'edit';
