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
          <h1 className="text-4xl mb-4 font-light">Наташа и Даня</h1>
          <p className="text-xl text-gray-200 mb-8">Дорогие гости, с радостью приглашаем вас на нашу свадьбу</p>
          <p className="text-2xl text-red-700">TBA - будет объявлено позднее</p>
        </Section>
        {/* Date & Time */}
        <Section title="Когда">
          <p className="text-xl mb-4">Суббота, Май 31, 2025</p>
          <p className="text-lg text-gray-200">Отправление трансфера: TBA</p>
          <p className="text-lg text-gray-200">Сбор гостей: TBA</p>
          <p className="text-lg text-gray-200">Окончание торжества: TBA</p>
          <p className="text-lg text-gray-200">Обратный трансфер: TBA</p>
        </Section>
        {/* Venue */}
        <Section title="Где">
          <p className="text-xl mb-4">Глэмпинг Ёлки парк</p>
          <a target="_blank" href="https://yandex.ru/maps/-/CHQ2bO96">
            <p className="text-lg text-gray-200 hover:text-sky-700 mb-4">Открыть в Яндекс Карты</p>
          </a>
          <ImgLink source="https://avatars.mds.yandex.net/get-altay/5583647/2a0000017fd5b97e94a34e5325aadb511df4/XXXL" link="https://yandex.ru/maps/-/CHQ2bO96" />
        </Section>
        {/* Directions */}
        <Section title="Как добраться">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4 p-1">
              <Car className="w-8 h-8 text-light" />
              <p className="text-lg text-gray-200">дорога польностью асфальтирована, есть парковка</p>
            </div>
            <div className="flex items-center gap-4 mb-4 p-1">
              <CarTaxiFront className="w-8 h-8 text-light" />
              <p className="text-lg text-gray-200">стоимость поездки на такси из центра Ярославля ~800 руб</p>
            </div>
            <div className="flex items-center gap-4 mb-4 p-1">
              <Bus className="w-8 h-8 text-light" />
              <p className="text-lg text-gray-200">о трансфере будет объявлено дополнительно</p>
            </div>
          </div>
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
              Мы будем благодарны, если при выборе нарядов или аксессуаров Вы придержитесь палитры, но это необязательно
            </li>
            <li>
              Для вашего удобства будет организован трансфер от (TBA). Время отправления (TBA). Пожалуйста, сообщите заранее, если он Вам понадобится
            </li>
            <li>
              Будем признательны, если Вы сообщите нам о своём решении любым удобным способом до 30 апреля 2025
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default App;