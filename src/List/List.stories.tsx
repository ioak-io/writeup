import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import List, { ListProps } from '.';
import ListWrapper from './ListWrapper';

const meta: Meta<typeof List> = {
  title: "Composite/List",
  component: List,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof List>;


const Template: Story = {
  render: (args: any) => {
    return (
      <ListWrapper {...args}/>
    );
  },
};


export const Playground = {
  ...Template, args: {
    renderFromChildren: false
  }
};
