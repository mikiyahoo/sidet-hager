import Image from 'next/image'
import { Youtube, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Image
              src="/assets/sidet-ena-hager-logo_white.png"
              alt="Sidet Ena Hager"
              width={240}
              height={96}
              className="mb-6 h-20 w-auto object-contain"
            />

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-400 text-justify">
              A bold and heartfelt talk show unpacking the lived experiences of
              Ethiopians in the diaspora. Reconnecting communities through
              truthful storytelling.
            </p>
          </div>

          {/* Navigation column */}
          <div className="lg:col-span-2">
            <h4 className="heading-font mb-6 text-sm uppercase tracking-[0.3em] text-secondary">
              Navigation
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <a href="#hero" className="transition hover:text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#latest-episodes" className="transition hover:text-secondary">
                  Episodes
                </a>
              </li>
              <li>
                <a href="#about-show" className="transition hover:text-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h4 className="heading-font mb-6 text-sm uppercase tracking-[0.3em] text-secondary">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span>Addis Ababa, Ethiopia / Global Diaspora</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-secondary" />
                <span>+251-XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-secondary" />
                <span>info@sidet-enahager.com</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-secondary hover:text-primary">
                <Instagram size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-secondary hover:text-primary">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-secondary hover:text-primary">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* YouTube subscribers column */}
          <div className="lg:col-span-3">
            <h4 className="heading-font mb-6 text-sm uppercase tracking-[0.3em] text-secondary">
              Subscribe
            </h4>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-secondary p-6 transition hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <Youtube size={28} className="text-primary" />
                </div>

                <div>
                  <div className="text-2xl font-bold text-primary">142,500</div>
                  <div className="text-sm text-primary/80">YouTube Subscribers</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row md:px-12">
          <p>&copy; {new Date().getFullYear()} Sidet Ena Hager. All rights reserved.</p>
          <p>Powered by Sidet Ena Hager Productions</p>
        </div>
      </div>
    </footer>
  )
}