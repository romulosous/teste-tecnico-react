import { Meta, StoryObj } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Atoms/Paragraph',
  component: Logo,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    children: 'This is the basic content of the paragraph.'
  }
}
