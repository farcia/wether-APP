import React from 'react'
import { render } from '@testing-library/react'
import Weather from './Weather'
import '@testing-library/jest-dom/extend-expect'

test("Weather render sunny", async () => {
    const { findByRole } = render(<Weather temperature={10} state="clouds"/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})

test("Weather render cloud", async () => {
    const { findByRole } = render(<Weather temperature={10} state="clouds"/>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})