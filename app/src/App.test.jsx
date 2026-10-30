
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

// 1. Pengujian halaman 404
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )

  expect(
    screen.getByRole('heading', { name: '404' })
  ).toBeInTheDocument()
})

// 2. Pengujian halaman beranda
test('halaman beranda menampilkan judul utama', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )

  expect(
    screen.getByRole('heading', {
      name: 'Direktori Kuliner Sekitar Kampus ITERA',
    }),
  ).toBeInTheDocument()
})

// 3. Pengujian halaman tentang
test('halaman tentang menampilkan identitas', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )

  expect(
    screen.getByText('Ray Regan Sitepu')
  ).toBeInTheDocument()
})

// 4. Pengujian form tambah
test('halaman tambah memiliki input judul', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>,
  )

  expect(
    screen.getByRole('textbox', { name: 'Judul' })
  ).toBeInTheDocument()
})

// 5. Pengujian validasi judul kosong
test('judul kosong menampilkan pesan error', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>,
  )

  fireEvent.click(
    screen.getByRole('button', { name: 'Simpan' })
  )

  expect(
    screen.getByRole('alert')
  ).toHaveTextContent('Judul wajib diisi')
})
