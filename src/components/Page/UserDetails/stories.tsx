import { Meta, StoryObj } from '@storybook/react'

import UserDetails from '.'
import { postsMock, userMock, usersMock } from '@/mock'

export default {
  title: 'Pages/UserDetails',
  component: UserDetails,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    posts: postsMock,
    users: usersMock,
    user: userMock
  }
}
