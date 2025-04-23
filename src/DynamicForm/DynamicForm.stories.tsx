// DynamicForm.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import DynamicFormDemo from './DynamicFormDemo';
import { DynamicFormProps } from '../types/DynamicFormTypes';

const meta: Meta<typeof DynamicFormDemo> = {
  title: 'Dynamic Form',
  component: DynamicFormDemo,
  tags: ['autodocs'],
} as Meta<typeof DynamicFormDemo>;

export default meta;

type Story = StoryObj<typeof DynamicFormDemo>;

export const Demo: Story = {
  args: {} as DynamicFormProps,
};
