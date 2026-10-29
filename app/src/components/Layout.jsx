
import { NavLink, Outlet } from 'react-router-dom'
import mahasiswa from '../../mahasiswa.json'
import './Layout.css'

const MENU = [
  { ke: '/', label: 'Beranda' },
  { ke: '/koleksi', label: 'Koleksi Kuliner' },
  { ke: '/tambah', label: 'Tambah Kuliner' },
  { ke: '/statistik', label: 'Statistik' },
  { ke: '/tentang', label: 'Tentang' },
]

export default function Layout() {
  return (
    <div className="layout-app">
      <header className="header-app">
        <div className="identitas-app">
          <strong className="nama-app">
            Kuliner Sekitar ITERA
          </strong>
          <span className="deskripsi-app">
            Jelajahi tempat makan favorit mahasiswa ITERA
          </span>
        </div>

        <nav className="navigasi-app" aria-label="Navigasi utama">
          {MENU.map(({ ke, label }) => (
            <NavLink
              key={ke}
              to={ke}
              end={ke === '/'}
              className={({ isActive }) =>
                isActive ? 'menu-link active' : 'menu-link'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="konten-app">
        <Outlet />
      </main>

      <footer className="footer-app">
        <p>{mahasiswa.tema}</p>
        <p>
          Dibuat oleh {mahasiswa.nama} | {mahasiswa.nim}
        </p>
        <p>
          Ujian Tengah Semester Pengembangan Aplikasi Web
        </p>
      </footer>
    </div>
  )
}
