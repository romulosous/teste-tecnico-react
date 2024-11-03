import { Meta, StoryObj } from '@storybook/react'

import Avatar from '.'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    // layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    name: 'Thiago Pereira dos Santos',
    userName: 'ThiagoPe'
  }
}
