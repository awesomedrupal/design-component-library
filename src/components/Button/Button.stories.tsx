import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

// Define the metadata for the component
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;

// Define the story type
type Story = StoryObj<typeof Button>;

// Primary story
export const Primary: Story = {
  args: {
    label: "Click Me",
    onClick: () => alert("Button clicked!"),
    disabled: false,
  },
};
