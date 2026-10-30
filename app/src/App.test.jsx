
import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'

function Penghitung() {
  const [jumlah, setJumlah] = useState(0)

  return (
    <div>
      <h1>Penghitung</h1>
      <output aria-label="Jumlah">{jumlah}</output>

      <button onClick={() => setJumlah(jumlah + 1)}>
        Tambah
      </button>

      <button onClick={() => setJumlah(jumlah - 1)}>
        Kurang
      </button>

      <button onClick={() => setJumlah(0)}>
        Reset
      </button>
    </div>
  )
}

test('menampilkan nilai awal nol', () => {
  render(<Penghitung />)

  expect(
    screen.getByRole('status', { name: 'Jumlah' })
  ).toHaveTextContent('0')
})

test('menampilkan judul aplikasi', () => {
  render(<Penghitung />)

  expect(
    screen.getByRole('heading', { name: 'Penghitung' })
  ).toBeInTheDocument()
})

test('tombol tambah meningkatkan nilai', async () => {
  const user = userEvent.setup()
  render(<Penghitung />)

  await user.click(screen.getByRole('button', { name: 'Tambah' }))

  expect(screen.getByText('1')).toBeInTheDocument()
})

test('tombol kurang menurunkan nilai', async () => {
  const user = userEvent.setup()
  render(<Penghitung />)

  await user.click(screen.getByRole('button', { name: 'Kurang' }))

  expect(screen.getByText('-1')).toBeInTheDocument()
})

test('tombol reset mengembalikan nilai ke nol', async () => {
  const user = userEvent.setup()
  render(<Penghitung />)

  await user.click(screen.getByRole('button', { name: 'Tambah' }))
  await user.click(screen.getByRole('button', { name: 'Reset' }))

  expect(screen.getByText('0')).toBeInTheDocument()
})
