import { Link } from 'react-router-dom'

export default function TidakDitemukan() {
  return (
    <section>
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>
      <p>
        Halaman yang kamu cari tidak tersedia
        di Direktori Kuliner Sekitar Kampus ITERA.
      </p>
      <Link to="/">Kembali ke Beranda</Link>
    </section>
  )
}
