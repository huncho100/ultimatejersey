import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from 'lucide-react';

import Container from '../ui/Container';
import { navigation } from '../../constants/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-extrabold tracking-wide"
          >
            ⚽ Kit Kings
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors hover:text-blue-400 ${
                      isActive ? 'text-blue-400' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden items-center gap-5 lg:flex">
            <Search
              size={20}
              className="cursor-pointer transition hover:text-blue-400"
            />

            <Heart
              size={20}
              className="cursor-pointer transition hover:text-blue-400"
            />

            <ShoppingCart
              size={20}
              className="cursor-pointer transition hover:text-blue-400"
            />

            <User
              size={20}
              className="cursor-pointer transition hover:text-blue-400"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-slate-700 py-4 lg:hidden">
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block transition hover:text-blue-400 ${
                        isActive ? 'text-blue-400' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-6">
              <Search className="cursor-pointer" />
              <Heart className="cursor-pointer" />
              <ShoppingCart className="cursor-pointer" />
              <User className="cursor-pointer" />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}