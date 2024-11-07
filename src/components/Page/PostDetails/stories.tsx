import { Meta, StoryObj } from '@storybook/react'

import PostDetails from '.'
import { commentsMock, postsMock } from '@/mock'

export default {
  title: 'Pages/PostDetails',
  component: PostDetails,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    post: postsMock,
    comments: [commentsMock]
  }
}
