import useKoleksi from '../hooks/useKoleksi.js'
import './Statistik.css'

export default function Statistik() {
  const { items, loading, error } = useKoleksi()

  const perKategori = items.reduce((hasil, item) => {
    const kategori = item.kategori

    hasil[kategori] = (hasil[kategori] ?? 0) + 1

    return hasil
  }, {})

  const jumlahKategori = Object.keys(perKategori).length

  if (loading) {
    return (
      <section className="halaman-statistik">
        <h1>Statistik Kuliner Sekitar ITERA</h1>
        <p role="status">
          Sedang memuat data statistik kuliner...
        </p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="halaman-statistik">
        <h1>Statistik Kuliner Sekitar ITERA</h1>
        <p role="alert">
          Gagal memuat data kuliner: {error}
        </p>
      </section>
    )
  }

  return (
    <section className="halaman-statistik">
      <div className="statistik-pembuka">
        <h1>Statistik Kuliner Sekitar ITERA</h1>

        <p>
          Ringkasan jumlah tempat makan, minuman,
          dan jajanan berdasarkan kategori di sekitar
          Kampus Institut Teknologi Sumatera.
        </p>
      </div>

      <div className="ringkasan-statistik">
        <article className="kartu-ringkasan">
          <h2>Total Tempat Kuliner</h2>
          <p>{items.length}</p>
        </article>

        <article className="kartu-ringkasan">
          <h2>Total Kategori</h2>
          <p>{jumlahKategori}</p>
        </article>
      </div>

      <div className="bagian-tabel">
        <h2>Jumlah Tempat Kuliner per Kategori</h2>

        <p>
          Tabel berikut menampilkan jumlah tempat
          kuliner berdasarkan kategori yang tersedia.
        </p>

        <div className="tabel-gulir">
          <table className="tabel-data">
            <thead>
              <tr>
                <th scope="col">Kategori</th>
                <th scope="col">Jumlah</th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(perKategori).map(
                ([kategori, jumlah]) => (
                  <tr key={kategori}>
                    <td>{kategori}</td>
                    <td>{jumlah}</td>
                  </tr>
                )
              )}
            </tbody>

            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td>{items.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {items.length === 0 && (
          <p className="statistik-kosong">
            Belum ada data tempat kuliner.
          </p>
        )}
      </div>

      <div className="catatan-statistik">
        <h2>Informasi Statistik</h2>

        <p>
          Statistik dihitung secara otomatis dari
          data koleksi kuliner yang tersimpan.
        </p>

        <p>
          Jumlah tempat kuliner dan kategori akan
          diperbarui ketika pengguna menambah
          atau menghapus data.
        </p>
      </div>
    </section>
  )
}
