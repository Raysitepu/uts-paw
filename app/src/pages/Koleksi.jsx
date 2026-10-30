import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [kategori, setKategori] = useState('Semua')

  // Lanjutkan dengan:
  // 1. Mendapatkan daftar kategori unik dari items.
  // 2. Menyaring items berdasarkan judul dan kategori.
  // 3. Menampilkan loading, error, dan hasil pencarian.
  // 4. Menampilkan setiap item menggunakan KartuItem.

  return (
    <section className="halaman-koleksi">
      <h1>Daftar Kuliner Sekitar ITERA</h1>
      {/* Tambahkan pencarian, filter, dan daftar kartu */}
    </section>
  )
}
