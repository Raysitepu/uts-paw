import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Beranda.css'

export default function Beranda() {
  const { items } = useKoleksi()
  const totalTempat = items.length
  const totalKategori = new Set(
    items.map((item) => item.kategori),
  ).size

  return (
    <section className="halaman-beranda">
      <div className="hero-beranda">
        <h1>Direktori Kuliner Sekitar Kampus ITERA</h1>
        <p>
          Selamat datang di Direktori Kuliner Sekitar
          Kampus Institut Teknologi Sumatera (ITERA).
        </p>
        <p>
          Temukan berbagai tempat makan, minuman,
          dan jajanan yang berada di sekitar kampus.
        </p>
      </div>

      <section className="bagian-ringkasan">
        <h2>Ringkasan Direktori Kuliner</h2>

        <div className="grid-ringkasan">
          <div className="kartu-ringkasan">
            <h3>Total Tempat Kuliner</h3>
            <p className="angka-ringkasan">{totalTempat}</p>
          </div>

          <div className="kartu-ringkasan">
            <h3>Total Kategori</h3>
            <p className="angka-ringkasan">{totalKategori}</p>
          </div>
        </div>

        <Link to="/koleksi" className="tombol-link">
          Lihat Semua Tempat Kuliner
        </Link>
      </section>

      <section className="kartu-tentang">
        <h2>Tentang Direktori</h2>
        <p>
          Website ini dibuat untuk membantu mahasiswa
          ITERA menemukan pilihan kuliner di sekitar
          lingkungan kampus.
        </p>
        <p>Tema: Direktori Kuliner Sekitar Kampus</p>
      </section>
    </section>
  )
}