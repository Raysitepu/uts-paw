export default function HargaKuliner({ harga }) {
  const nilaiHarga = Number(harga)

  const tampilanHarga = Number.isFinite(nilaiHarga)
    ? new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(nilaiHarga)
    : 'Harga tidak tersedia'

  return (
    <p className="harga-kuliner">
      Harga rata-rata: <strong>{tampilanHarga}</strong>
    </p>
  )
}
