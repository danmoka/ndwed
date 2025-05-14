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
          backgroundImage: 'url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjBwNjZjbmp2aDFsaW93eXZjYTQxM2RiYzN4OHZnY2RwczE4eTA0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uf3jumi0zzUv6/giphy.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9
        }}
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto p-8 space-y-4">
        {/* Newlyweds */}
        <Section className="text-center">
          <h1 className="text-4xl mb-4 font-light">Наталья и Даниил</h1>
          <p className="text-xl text-gray-200 mb-8">Дорогие гости, с радостью приглашаем вас на нашу свадьбу</p>
          <div className="flex items-center justify-center">
            <span className="relative inline-flex">
              <a href="#transfer" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm leading-6 font-semibold text-gray-200 ring-1 ring-gray-900/10 transition duration-150 ease-in-out dark:bg-white/5 dark:ring-white/20">
                Информация о трансфере
                <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
              </span>
            </span>
          </div>
        </Section>
        {/* Date & Time */}
        <Section title="Когда">
          <p className="text-xl mb-4">Суббота, Май 31, 2025</p>
          <p className="text-lg text-gray-200">Отправление трансфера: 15:30</p>
          <p className="text-lg text-gray-200">Сбор гостей: 16:00</p>
          <p className="text-lg text-gray-200">Окончание торжества: 23:00</p>
          <p className="text-lg text-gray-200">Обратный трансфер: 23:30</p>
        </Section>
        {/* Venue */}
        <Section title="Где">
          <p className="text-xl mb-4">Глэмпинг Ёлки парк</p>
          <a target="_blank" href="https://yandex.ru/maps/-/CHQ2bO96">
            <p className="text-lg text-sky-200 hover:text-sky-700 mb-4">Открыть в Яндекс Карты</p>
          </a>
          <ImgLink source="https://avatars.mds.yandex.net/get-altay/5583647/2a0000017fd5b97e94a34e5325aadb511df4/XXXL" link="https://yandex.ru/maps/-/CHQ2bO96" />
        </Section>
        {/* Directions */}
        <Section title="Как добраться">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4 p-1 text-lg">
              <Car className="icon" />
              <p className="text-gray-200">дорога полностью асфальтирована, есть парковка</p>
            </div>
            <div className="flex items-center gap-4 mb-4 p-1 text-lg">
              <CarTaxiFront className="icon" />
              <p className="text-gray-200">стоимость поездки на такси из центра Ярославля ~800 руб</p>
            </div>
            <div className="flex items-center gap-4 mb-4 p-1 text-lg">
              <Bus className="icon" />
              <p className="text-gray-200">на трансфере из центра города и обратно</p>
            </div>
          </div>
        </Section>
        {/* Transfer */}
        <Section title="Трансфер">
          <p id="transfer" className="text-xl mb-4">Отправление в 15:30</p>
          <a target="_blank" href="https://yandex.ru/maps/-/CHvByX-l">
            <p className="text-lg text-sky-200 hover:text-sky-700 mb-4">Красная площадь (улица Красный съезд)</p>
          </a>
          <p className="text-xl mb-4">*цвет *марка *гос. номер</p>
          <img
            src="https://avatars.mds.yandex.net/get-altay/13453452/2a0000018efbc7c66fd29996acf68b5907dd/XXXL"
            width="100%"
            height="300"
            frameBorder="0"
            className="rounded-lg mb-5"
          />
          <p className="text-xl">Пожалуйста, сообщите заранее, если планируете ехать на трансфере</p>
        </Section>
        {/* Color Palette */}
        <Section title="Цветовая гамма">
          <p className="text-xl mb-6">Мы будем очень признательны, если вы поддержите цветовую гамму в своих нарядах</p>
          <ColorPalette colors={weddingColors} />
        </Section>
        {/* Details */}
        <Section title="Пожелания">
          <ul className="space-y-6 text-lg text-gray-200">
            <li>
              Наш праздник пройдет на территории лесной зоны. Захватите с собой теплую одежду, удобную обувь и зонтик
            </li>
            <li>
              Просим учесть, что на территории парка не допускается использование открытого огня, бенгальских огней, свечей, конфетти, лепестков цветов и сыпучих пищевых и не пищевых продуктов
            </li>
            <li>
              Главное для нас - это Ваше внимание. Не ломайте голову над подарками. Ваши пожелания в конвертах помогут осуществить нашу мечту
            </li>
            <li>
              Пожалуйста, не дарите живые цветы. Мы очень расстроимся, когда не сможем забрать их с собой
            </li>
            <li>
              Мы будем благодарны, если при выборе нарядов или аксессуаров Вы придержитесь палитры, но это не обязательно
            </li>
            <li>
              Будем признательны, если Вы сообщите нам о своём решении любым удобным способом до 30 апреля 2025
            </li>
          </ul>
        </Section>
        <Section className="text-center">
          <a href="https://www.flaticon.com/free-icons/ring" className="text-neutral-700" title="ring icons">Ring icons created by Freepik - Flaticon</a>
        </Section>
      </div>
    </div>
  );
}

export default App;