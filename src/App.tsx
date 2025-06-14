import React from 'react';
import { Car, CarTaxiFront, Bus } from 'lucide-react';
import { Section } from './components/Section';
import { ColorPalette } from './components/ColorPalette';
import { ImgLink } from './components/ImgLink';
import { weddingColors } from './data/colors';

function App() {
  return (
    <div className="min-h-screen relative font-['Helvetica'] text-gray-100">
      {/* Background with semi-transparent overlay */}
      <div
        className="brightness-90 fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://i.wfolio.ru/x/KfN2JhbB89-m6UeUSQ-43V8Ps6EBsyfx/CALOGwrPD9otD_UZHN3ToHutKbzczkHV/CsrYDksGoEpKhdx-yarqrlXPIEsott1T/7NRQ7ORHLoWc2tCbJMfkNVFPNh9UOjxX/oYKuIuG-FkIKmNv8MZ7f8w.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9
        }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto p-8 space-y-4">
        {/* Newlyweds */}
        <Section className="text-center">
          <h1 className="text-4xl mb-4 font-light">Наталья и Даниил</h1>
          <p className="text-xl text-gray-200 mb-8">Дорогие гости, здесь постараемся выложить все фото и видео со свадьбы</p>
          <div className="flex items-center justify-center mb-4">
            <a href="https://iamilyazhukov.ru/disk/31-05-2025-d-n-31-05-2025-teaser-3llf5l" target="_blank" className="w-48 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm leading-6 font-semibold text-gray-200 ring-1 ring-gray-900/10 transition duration-150 ease-in-out bg-white/5 ring-white/20">
              Тизер
              <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-center mb-4">
            <a href="https://iamilyazhukov.ru/disk/31-05-2025-panki-tbgq9w" target="_blank" className="w-48 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm leading-6 font-semibold text-gray-200 ring-1 ring-gray-900/10 transition duration-150 ease-in-out bg-white/5 ring-white/20">
              Фотографии
              <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-center mb-4">
            <a href="https://disk.yandex.ru/d/Sl5l1l-okFXJtA/%D0%93%D1%80%D0%B8%D0%B3%D0%B0_31%D0%BC%D0%B0%D1%8F2025.mp4" target="_blank" className="w-48 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm leading-6 font-semibold text-gray-200 ring-1 ring-gray-900/10 transition duration-150 ease-in-out bg-white/5 ring-white/20">
              Она сказала "да"
              <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="https://disk.yandex.ru/d/KT2QAD0dPzEeuA" target="_blank" className="w-48 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm leading-6 font-semibold text-gray-200 ring-1 ring-gray-900/10 transition duration-150 ease-in-out bg-white/5 ring-white/20">
              Бэкстейдж
              <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </Section>
        {/* thx */}
        <Section title="❤️">
          <p className="text-lg text-gray-200">Любимочки, еще раз хотим поблагодарить вас за ваши теплые пожелания, крепкие объятия и зажигательные танцы! Вы сделали этот день действительно праздником любви! Большое Вам спасибо!</p>
        </Section>
        <Section className="text-center">
          <a href="https://www.flaticon.com/free-icons/ring" className="text-neutral-700" title="ring icons">Ring icons created by Freepik - Flaticon</a>
        </Section>
      </div>
    </div>
  );
}

export default App;