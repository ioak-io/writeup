import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import EditorDemo, { EditorDemoProps } from ".";

export default {
  title: "Editor",
  component: EditorDemo,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<EditorDemoProps> = (args: EditorDemoProps) => <EditorDemo {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
  toolbarPlacement: 'top'
};
