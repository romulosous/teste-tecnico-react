import { Meta, StoryObj } from '@storybook/react'

import Badge from '.'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    // layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    likes: 12,
    comments: 4
  }
}
