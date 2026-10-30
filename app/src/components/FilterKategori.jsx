
export default function FilterKategori({
  daftarKategori,
  kategori,
  onChange,
}) {
  return (
    <div className="filter-kategori">
      <label htmlFor="kategori-kuliner">
        Filter Kategori
      </label>

      <select
        id="kategori-kuliner"
        value={kategori}
        onChange={(event) => onChange(event.target.value)}
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
  )
}
