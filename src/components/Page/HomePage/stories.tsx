import { Meta, StoryObj } from '@storybook/react'

import HomePage from '.'
import { postsMock, usersMock } from '@/mock'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    // layout: 'fullscreen'
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    data: { posts: postsMock },
    users: usersMock
  }
}
