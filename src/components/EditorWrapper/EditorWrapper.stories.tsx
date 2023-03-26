import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import EditorWrapper, { EditorWrapperProps } from ".";

export default {
  title: "EditorWrapper",
  component: EditorWrapper,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<EditorWrapperProps> = (args: EditorWrapperProps) => <EditorWrapper {...args} />;

// Reuse that template for creating different stories
export const BasicEditorWrapper = Template.bind({});
BasicEditorWrapper.args = {
  label: "First name",
  value: "",
  placeholder: 'Lorem ipsum dolor sit',
};
