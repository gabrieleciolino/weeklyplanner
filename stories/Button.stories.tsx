import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/ui/Button";

const meta: Meta<typeof Button> = {
    component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        variant: 'primary',
    }
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    }
}

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
    }
}