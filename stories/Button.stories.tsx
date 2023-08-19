import { Meta, StoryObj } from '@storybook/react';
import Button from '../components/ui/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <div className="grid gap-2">
      <div>
        <Button variant="primary">Primary</Button>
      </div>
      <div>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div>
        <Button variant="tertiary">Tertiary</Button>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <Button size="small">Small</Button>
        <Button size="base">Base</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button size="full">Full</Button>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button variant="secondary" loading>
          Loading
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="tertiary" disabled>
          Disabled
        </Button>
        <Button variant="tertiary" loading>
          Loading
        </Button>
      </div>
    </div>
  ),
};
