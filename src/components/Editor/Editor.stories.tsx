import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Editor, { EditorProps } from ".";

export default {
  title: "Editor",
  component: Editor,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<EditorProps> = (args: EditorProps) => <Editor {...args} />;

// Reuse that template for creating different stories
export const BasicEditor = Template.bind({});
BasicEditor.args = {
  label: "First name",
  value: "",
  placeholder: 'Lorem ipsum dolor sit',
};
