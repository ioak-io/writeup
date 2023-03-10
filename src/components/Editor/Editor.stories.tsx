import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Editor from ".";
import EditorWrapper from ".";

export default {
  title: "Editor",
  component: EditorWrapper,
  argTypes: {
    initialValues: [],
    options: []
  },
} as Meta;

// Create a master template for mapping args to render the Editor component
const Template: Story<any> = (args: any) => <Editor {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
};
