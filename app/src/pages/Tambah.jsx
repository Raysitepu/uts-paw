import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = {
  judul: '',
  kategori: 'Nasi',
  alamat: '',
  hargaRataRata: '',
  jamBuka: '',
}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()

  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (event) => {
    const { name, value } = event.target

    setForm((sebelumnya) => ({
      ...sebelumnya,
      [name]: value,
    }))
  }

  const simpan = (event) => {
    event.preventDefault()

    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }

    if (!form.alamat.trim()) {
      setGalat('Alamat tempat kuliner wajib diisi.')
      return
    }

    if (
      form.hargaRataRata === '' ||
      Number(form.hargaRataRata) < 0
    ) {
      setGalat('Harga rata-rata harus diisi dengan angka yang valid.')
      return
    }

    if (!form.jamBuka.trim()) {
      setGalat('Jam buka tempat kuliner wajib diisi.')
      return
    }

    setGalat('')

    tambah({
      ...form,
      judul: form.judul.trim(),
      alamat: form.alamat.trim(),
      hargaRataRata: Number(form.hargaRataRata),
      jamBuka: form.jamBuka.trim(),
    })

    navigate('/koleksi')
  }

  return (
    <section className="halaman-tambah">
      <div className="tambah-pembuka">
        <h1>Tambah Tempat Kuliner ITERA</h1>
        <p>
          Tambahkan informasi tempat makan, minuman,
          atau jajanan di sekitar Kampus ITERA.
        </p>
      </div>

      <form
        className="formulir-kuliner"
        onSubmit={simpan}
        noValidate
      >
        <label htmlFor="judul">Judul</label>
        <input
          id="judul"
          name="judul"
          type="text"
          placeholder="Contoh: Warung Makan Bu Ilsha"
          value={form.judul}
          onChange={ubah}
        />

        <label htmlFor="kategori">Kategori</label>
        <select
          id="kategori"
          name="kategori"
          value={form.kategori}
          onChange={ubah}
        >
          <option value="Nasi">Nasi</option>
          <option value="Mi">Mi</option>
          <option value="Minuman">Minuman</option>
          <option value="Jajanan">Jajanan</option>
        </select>

        <label htmlFor="alamat">Alamat</label>
        <input
          id="alamat"
          name="alamat"
          type="text"
          placeholder="Contoh: Jl. Airan Raya, Way Hui"
          value={form.alamat}
          onChange={ubah}
        />

        <label htmlFor="hargaRataRata">
          Harga Rata-rata (Rp)
        </label>
        <input
          id="hargaRataRata"
          name="hargaRataRata"
          type="number"
          min="0"
          placeholder="Contoh: 15000"
          value={form.hargaRataRata}
          onChange={ubah}
        />

        <label htmlFor="jamBuka">Jam Buka</label>
        <input
          id="jamBuka"
          name="jamBuka"
          type="text"
          placeholder="Contoh: 09.00-21.00"
          value={form.jamBuka}
          onChange={ubah}
        />

        {galat && (
          <p className="pesan-galat" role="alert">
            {galat}
          </p>
        )}

        <div className="aksi-formulir">
          <button
            type="button"
            className="tombol-batal"
            onClick={() => navigate('/koleksi')}
          >
            Batal
          </button>

          <button
            type="submit"
            className="tombol-simpan"
          >
            Simpan
          </button>
        </div>
      </form>
    </section>
  )
}
