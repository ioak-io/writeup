import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import SearchBar, { SearchBarProps } from '.';

const meta: Meta<typeof SearchBar> = {
  title: "Composite/SearchBar",
  component: SearchBar,
  argTypes: {
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof SearchBar>;


const Template: Story = {
  render: (args: SearchBarProps) => {
    return (
      <div>
      <SearchBar {...args} />
      </div>
    );
  },
};


const props: SearchBarProps = {
  onSearch: (e) => console.log(e),
  filters: [
    {
      fieldName: "tagIdList",
      fieldLabel: "Tags",
      fieldValues: [
        {
          id: "1",
          label: "Biochemistry"
        },
        {
          id: "2",
          label: "Atomic physics"
        },
        {
          id: "3",
          label: "Quantum mechanics"
        }
      ]
    },{
      fieldName: "categoryIdList",
      fieldLabel: "Categories",
      fieldValues: [
        {
          id: "1",
          label: "Biochemistry"
        },
        {
          id: "2",
          label: "Atomic physics"
        },
        {
          id: "3",
          label: "Quantum mechanics"
        }
      ]
    }
  ]
}

export const Playground = {
  ...Template, args: {
    ...props
  }
};
