import { Meta, StoryObj } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'title basic',
    description: 'descruption basic'
  }
}
