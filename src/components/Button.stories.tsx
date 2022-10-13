import { Meta, StoryObj } from '@storybook/react'
import { Button, Buttonprops } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {}

} as Meta<Buttonprops>

export const Default: StoryObj = {}

