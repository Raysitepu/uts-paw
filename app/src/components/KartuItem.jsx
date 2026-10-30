import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  return (
    <article className="kartu-kuliner">
      <h2>{item.judul}</h2>
      <p>Kategori: {item.kategori}</p>
      <p>Alamat: {item.alamat}</p>
      <p>Jam buka: {item.jamBuka}</p>
      {/* Tampilkan hargaRataRata sebagai rupiah */}
      <Link to={`/koleksi/${item.id}`}>
        Lihat Detail
      </Link>
    </article>
  )
}
