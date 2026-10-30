import { Link } from 'react-router-dom'
import HargaKuliner from './HargaKuliner.jsx'

export default function KartuItem({ item }) {
  return (
    <article className="kartu-item">
      <h2>{item.judul}</h2>
      <p>
        <strong>Kategori:</strong> {item.kategori}
      </p>
      <p>
        <strong>Alamat:</strong> {item.alamat}
      </p>
      <HargaKuliner harga={item.hargaRataRata} />
      <p>
        <strong>Jam buka:</strong> {item.jamBuka}
      </p>

      <Link
        to={`/koleksi/${item.id}`}
        className="tautan-detail"
      >
        Lihat Detail
      </Link>
    </article>
  )
}