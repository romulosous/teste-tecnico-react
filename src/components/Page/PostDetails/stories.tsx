import { Meta, StoryObj } from '@storybook/react'

import PostDetails from '.'

export default {
  title: 'Pages/PostDetails',
  component: PostDetails,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

const postsMock = {
  userId: 1,
  id: 8,
  title: 'dolorem dolore est ipsam',
  body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
}

export const Default: StoryObj = {
  args: {
    posts: postsMock
  }
}
