import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import DetailView, { DetailViewProps } from '.';

const meta: Meta<typeof DetailView> = {
  title: "Detail view",
  component: DetailView,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof DetailView>;


const Template: Story = {
  render: (args: DetailViewProps) => {
    return (
      <DetailView {...args} />
    );
  },
};

export const Demo = {
  ...Template, args: {
    toolbarPlacement: 'top'
  }
};


