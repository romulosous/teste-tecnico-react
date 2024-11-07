import { Meta, StoryObj } from '@storybook/react'

import PostCard from '.'
import { postMock } from '@/mock'

export default {
  title: 'Organisms/PostCard',
  component: PostCard,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

export const Basic: StoryObj = {
  args: {
    post: postMock
  }
}
