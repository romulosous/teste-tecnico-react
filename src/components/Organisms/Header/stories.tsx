import { Meta, StoryObj } from '@storybook/react'

import Header from '.'

export default {
  title: 'Organisms/Header',
  component: Header,
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
