export default function KotakPencarian({ value, onChange }) {
  return (
    <div className="kotak-pencarian">
      <label htmlFor="cari-kuliner">
        Cari tempat kuliner
      </label>
      <input
        id="cari-kuliner"
        type="search"
        placeholder="Cari nama tempat makan..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
