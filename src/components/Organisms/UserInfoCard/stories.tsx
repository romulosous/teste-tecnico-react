import { Meta, StoryObj } from '@storybook/react'

import UserInfoCard from '.'
import { userMock } from '@/mock'

export default {
  title: 'Organisms/UserInfoCard',
  component: UserInfoCard,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    user: userMock
  }
}
