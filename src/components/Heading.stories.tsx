import { Meta, StoryObj } from '@storybook/react'
import { Heading, Headingprops } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
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

} as Meta<Headingprops>

export const Default: StoryObj = {}

export const CustomComponent: StoryObj<Headingprops> = {
  args: {
    asChild: true,
    children: (
      <h1>Testando</h1>
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
