import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import EditorDemo, { EditorDemoProps } from '.';

const meta: Meta<typeof EditorDemo> = {
  title: "Editor",
  component: EditorDemo,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof EditorDemo>;


const Template: Story = {
  render: (args: EditorDemoProps) => {
    return (
      <EditorDemo {...args} />
    );
  },
};

export const Demo = {
  ...Template, args: {
    toolbarPlacement: 'top'
  }
};


