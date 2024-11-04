import { Meta, StoryObj } from '@storybook/react'

import Profile from '.'

export default {
  title: 'Atoms/Profile',
  component: Profile,
  parameters: {
    // layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    name: 'Romulo Carvalho'
  }
}
