import { Meta, Story } from '@storybook/react'
import React from 'react'
import StateBar, { StateBarBar, StateBarState } from '..'

export default {
  parameters: {
    docs: {
      description: {
        component: 'A description of a progress bar.',
      },
    },
  },
  subcomponents: { StateBarBar, StateBarState },
  title: 'Components/Data Display/StateBar',
} as Meta

export const Default: Story = () => (
  <>
    <StateBar my={2}>
      <StateBar.State label="Label">your value</StateBar.State>
      <StateBar.Bar value={50} />
    </StateBar>
    <StateBar my={2}>
      <StateBar.State label="Value >= 90" />
      <StateBar.Bar value={90} />
    </StateBar>
  </>
)

export const Unlimited: Story<{ unlimited?: boolean }> = ({ unlimited }) => (
  <StateBar my={2}>
    <StateBar.State label="Unlimited" />
    <StateBar.Bar unlimited={unlimited} />
  </StateBar>
)

Unlimited.parameters = {
  docs: {
    description: {
      story: 'Set unlimited using `unlimited` prop on `StateBar.Bar`.',
    },
  },
}

Unlimited.args = {
  unlimited: true,
}

export const Progress: Story<{ progress?: boolean }> = ({ progress }) => (
  <StateBar my={2}>
    <StateBar.State label="Progress" />
    <StateBar.Bar progress={progress} />
  </StateBar>
)

Progress.args = {
  progress: true,
}