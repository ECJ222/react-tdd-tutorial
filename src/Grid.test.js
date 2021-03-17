/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Grids from './components/gridcontainer'

afterEach(cleanup)

describe('Props test', () => {
  test('Should display exact text in all photo cards.', () => {
    const { getAllByText } = render(<Grids text="New text" />)
    const elements = getAllByText('New text')

    elements.forEach((element) => {
      expect(element.textContent).toBe('New text')
    })
  })
})

describe('Snapshot test', () => {
  test('Matches snapshot.', () => {
    const { getAllByText } = render(<Grids text="New text" />)
    const elements = getAllByText('New text')

    expect(elements).toMatchSnapshot()
  })
})
