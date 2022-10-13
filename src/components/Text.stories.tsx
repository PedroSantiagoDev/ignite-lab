import { Meta, StoryObj } from '@storybook/react'
import { Text, Textprops } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Loren ipsun.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }

} as Meta<Textprops>

export const Default: StoryObj = {}

export const CustomComponent: StoryObj<Textprops> = {
  args: {
    asChild: true,
    children: (
      <p>Testando</p>
    )
    },
    argTypes: {
      children: {
        table: {
          disable: true,
        }
      },
      asChild: {
        table: {
          disable: true
        }
      }
    }
  }
