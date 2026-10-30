
import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'
import KartuItem from '../components/KartuItem.jsx'
import KotakPencarian from '../components/KotakPencarian.jsx'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [kategori, setKategori] = useState('Semua')

  const daftarKategori = [
    'Semua',
    ...new Set(items.map((item) => item.kategori)),
  ]

  const hasil = items.filter((item) => {
    const cocokJudul = item.judul
      .toLowerCase()
      .includes(cari.trim().toLowerCase())

    const cocokKategori =
      kategori === 'Semua' || item.kategori === kategori

    return cocokJudul && cocokKategori
  })

  return (
    <section className="halaman-koleksi">
      <h1>Daftar Kuliner Sekitar ITERA</h1>

      <p>
        Temukan berbagai pilihan tempat makan,
        minuman, dan jajanan di sekitar Kampus ITERA.
      </p>

      {loading ? (
        <p role="status">
          Sedang memuat data kuliner...
        </p>
      ) : error ? (
        <p role="alert">
          Gagal memuat data kuliner: {error}
        </p>
      ) : (
        <>
          <div className="filter-koleksi">
            <KotakPencarian
              value={cari}
              onChange={setCari}
            />

            <div className="filter-kategori">
              <label htmlFor="kategori-kuliner">
                Filter Kategori
              </label>

              <select
                id="kategori-kuliner"
                value={kategori}
                onChange={(event) =>
                  setKategori(event.target.value)
                }
              >
                {daftarKategori.map((namaKategori) => (
                  <option
                    key={namaKategori}
                    value={namaKategori}
                  >
                    {namaKategori}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="jumlah-hasil">
            Menampilkan {hasil.length} dari {items.length}
            {' '}tempat kuliner.
          </p>

          {hasil.length === 0 ? (
            <p>Tidak ada item yang cocok.</p>
          ) : (
            <div className="daftar-kuliner">
              {hasil.map((item) => (
                <KartuItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}
