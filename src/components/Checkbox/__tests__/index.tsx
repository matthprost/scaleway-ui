import userEvent from '@testing-library/user-event'
import React from 'react'
import Checkbox from '..'
import renderWithTheme from '../../../helpers/renderWithTheme'
import shouldMatchEmotionSnapshot from '../../../helpers/shouldMatchEmotionSnapshot'

describe('Checkbox', () => {
  test('renders correctly', () =>
    shouldMatchEmotionSnapshot(
      <Checkbox onBlur={() => {}} onFocus={() => {}} onChange={() => {}}>
        Checkbox Label
      </Checkbox>,
    ))

  test('renders correctly no child', () =>
    shouldMatchEmotionSnapshot(<Checkbox onChange={() => {}} />))
  test('renders correctly disabled', () =>
    shouldMatchEmotionSnapshot(
      <Checkbox onChange={() => {}} disabled>
        Checkbox Label
      </Checkbox>,
    ))
  test('renders correctly checked', () =>
    shouldMatchEmotionSnapshot(
      <Checkbox onChange={() => {}} checked>
        Checkbox Label
      </Checkbox>,
    ))
  test('renders correctly checked and disabled', () =>
    shouldMatchEmotionSnapshot(
      <Checkbox onChange={() => {}} checked disabled>
        Checkbox Label
      </Checkbox>,
    ))
  test('renders correctly with an error', () =>
    shouldMatchEmotionSnapshot(
      <Checkbox onChange={() => {}} error="test error">
        Checkbox Label
      </Checkbox>,
    ))
  test('renders correctly with valid', () =>
    shouldMatchEmotionSnapshot(
      <Checkbox onChange={() => {}} valid>
        Checkbox Label
      </Checkbox>,
    ))

  test('renders correctly with progress', () =>
    shouldMatchEmotionSnapshot(
      <Checkbox onChange={() => {}} progress>
        Checkbox Label
      </Checkbox>,
    ))

  test('renders correctly with progress and no child', () =>
    shouldMatchEmotionSnapshot(<Checkbox onChange={() => {}} progress />))

  test('renders correctly with a value', () =>
    shouldMatchEmotionSnapshot(
      <Checkbox onChange={() => {}} value="test">
        Checkbox Label
      </Checkbox>,
    ))

  test('renders correctly with sizes', () =>
    shouldMatchEmotionSnapshot(
      <>
        <Checkbox onChange={() => {}} size={37} value="test">
          Checkbox Label
        </Checkbox>
        <Checkbox onChange={() => {}} progress size={37} value="test">
          Checkbox Label
        </Checkbox>
      </>,
    ))

  test('renders with click event', () => {
    const node = renderWithTheme(
      <Checkbox onChange={() => {}} size={37} value="test">
        Checkbox Label
      </Checkbox>,
    )

    const input = node.getByRole('checkbox')
    userEvent.click(input)
    expect(input.getAttribute('aria-checked')).toBe('true')
  })

  test('renders with click event with progress', () => {
    const node = renderWithTheme(
      <Checkbox onChange={() => {}} size={37} value="test" progress>
        Checkbox Label
      </Checkbox>,
    )

    const input = node.getByRole('checkbox')
    userEvent.click(input)
    expect(input.getAttribute('aria-checked')).toBe('true')
  })
})