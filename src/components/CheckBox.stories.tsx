import { Meta, StoryObj } from '@storybook/react'
import { CheckBox, CheckBoxprops } from './CheckBox'
import { Text } from './Text'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckBoxprops>

export const Default: StoryObj = {}

