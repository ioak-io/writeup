import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Editor, { EditorProps } from ".";

export default {
  title: "Form elements/Editor",
  component: Editor,
  argTypes: {
    initialValues: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Editor component
const Template: Story<EditorProps> = (args: EditorProps) => <Editor {...args} />;

// Reuse that template for creating different stories
export const DefaultThemeWithDefaultVariant = Template.bind({});
DefaultThemeWithDefaultVariant.args = {
};
