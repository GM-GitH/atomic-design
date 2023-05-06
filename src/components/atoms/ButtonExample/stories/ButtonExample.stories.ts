import type { Meta, StoryObj } from "@storybook/react"
import { ButtonExample } from "@"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ButtonExample> = {
  title: "Atoms/ButtonExample",
  component: ButtonExample,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button"
  }
}

export const Secondary: Story = {
  args: {
    label: "Button"
  }
}

export const Small: Story = {
  args: {
    size: "small",
    label: "Button"
  }
}

export const Large: Story = {
  args: {
    size: "large",
    label: "Button"
  }
}
