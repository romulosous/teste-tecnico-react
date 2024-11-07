import { Meta, StoryObj } from '@storybook/react'

import PostComment from '.'
import { commentsMock } from '@/mock'

export default {
  title: 'Organisms/PostComment',
  component: PostComment,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    name: commentsMock.name,
    email: commentsMock.email,
    body: commentsMock.body
  }
}
