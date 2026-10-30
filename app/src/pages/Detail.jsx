import { Link, useParams, useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Detail.css'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { items, loading, error, hapus } = useKoleksi()

  const item = items.find(
    (kuliner) => String(kuliner.id) === String(id)
  )

  const formatRupiah = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(Number(harga))
  }

  const handleHapus = () => {
    if (!item) return

    const konfirmasi = window.confirm(
      `Apakah kamu yakin ingin menghapus ${item.judul}?`
    )

    if (konfirmasi) {
      hapus(item.id)
      navigate('/koleksi')
    }
  }

  if (loading) {
    return (
      <section className="halaman-detail">
        <p role="status">
          Sedang memuat detail tempat kuliner...
        </p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="halaman-detail">
        <p role="alert">
          Gagal memuat data kuliner: {error}
        </p>
        <Link to="/koleksi">
          Kembali ke Daftar Kuliner
        </Link>
      </section>
    )
  }

  if (!item) {
    return (
      <section className="halaman-detail">
        <p>Item tidak ditemukan.</p>
        <p>
          Tempat kuliner yang kamu cari tidak tersedia.
        </p>
        <Link to="/koleksi">
          Kembali ke Daftar Kuliner
        </Link>
      </section>
    )
  }

  return (
    <section className="halaman-detail">
      <Link to="/koleksi">
        Kembali ke Daftar Kuliner
      </Link>

      <article className="detail-kuliner">
        <header>
          <h1>{item.judul}</h1>
          <p>
            Informasi Tempat Kuliner Sekitar Kampus ITERA
          </p>
        </header>

        <div className="informasi-detail">
          <h2>Informasi Tempat Kuliner</h2>

          <dl>
            <dt>Nama Tempat Kuliner</dt>
            <dd>{item.judul}</dd>

            <dt>Kategori</dt>
            <dd>{item.kategori}</dd>

            <dt>Alamat</dt>
            <dd>{item.alamat}</dd>

            <dt>Harga Rata-rata (Rp)</dt>
            <dd>{formatRupiah(item.hargaRataRata)}</dd>

            <dt>Jam Buka</dt>
            <dd>{item.jamBuka}</dd>
          </dl>
        </div>

        <div className="aksi-detail">
          <Link to="/koleksi">
            Kembali
          </Link>

          <button
            type="button"
            onClick={handleHapus}
            className="tombol-hapus"
          >
            Hapus
          </button>
        </div>
      </article>
    </section>
  )
}
