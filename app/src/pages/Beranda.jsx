import { Link } from 'react-router-dom'
import mahasiswa from '../../mahasiswa.json'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Beranda() {
  const { items, loading, error } = useKoleksi()

  const jumlahKuliner = items.length
  const jumlahKategori = new Set(
    items.map((item) => item.kategori)
  ).size

  return (
    <section className="beranda">
      <h1>Direktori Kuliner Sekitar Kampus ITERA</h1>

      <p>
        Selamat datang di Direktori Kuliner Sekitar
        Kampus Institut Teknologi Sumatera (ITERA).
      </p>

      <p>
        Temukan berbagai tempat makan, minuman,
        dan jajanan yang berada di sekitar kampus.
      </p>

      {loading ? (
        <p role="status">Sedang memuat data kuliner...</p>
      ) : error ? (
        <p role="alert">Gagal memuat data: {error}</p>
      ) : (
        <div className="ringkasan-kuliner">
          <h2>Ringkasan Direktori Kuliner</h2>

          <div className="statistik-beranda">
            <div className="kartu-statistik">
              <h3>Total Tempat Kuliner</h3>
              <p>{jumlahKuliner}</p>
            </div>

            <div className="kartu-statistik">
              <h3>Total Kategori</h3>
              <p>{jumlahKategori}</p>
            </div>
          </div>
        </div>
      )}

      <div className="aksi-beranda">
        <Link to="/koleksi">
          Lihat Semua Tempat Kuliner
        </Link>
      </div>

      <div className="informasi-beranda">
        <h2>Tentang Direktori</h2>
        <p>
          Website ini dibuat untuk membantu mahasiswa
          ITERA menemukan pilihan kuliner di sekitar
          lingkungan kampus.
        </p>
        <p>Tema: {mahasiswa.tema}</p>
      </div>
    </section>
  )
}
