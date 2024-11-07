import { Meta, StoryObj } from '@storybook/react'

import UserList from '.'
import { usersMock } from '@/mock'

export default {
  title: 'Organisms/UserList',
  component: UserList,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    users: usersMock
  }
}
