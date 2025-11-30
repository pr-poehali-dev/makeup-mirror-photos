import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import PriceCalculator from '@/components/PriceCalculator';
import ImageGalleryDialog from '@/components/ImageGalleryDialog';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; description: string } | null>(null);
  const [mirrorSize, setMirrorSize] = useState(80);
  const [mirrorType, setMirrorType] = useState('led');
  const [frameColor, setFrameColor] = useState('white');
  const [lightTemp, setLightTemp] = useState('neutral');
  const [hasOptions, setHasOptions] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculatePrice = () => {
    let basePrice = 15000;
    const sizeMultiplier = mirrorSize / 80;
    basePrice *= sizeMultiplier;
    
    if (mirrorType === 'hollywood') basePrice += 5000;
    if (frameColor === 'gold') basePrice += 3000;
    if (frameColor === 'wood') basePrice += 2000;
    if (hasOptions) basePrice += 4000;
    
    return Math.round(basePrice);
  };

  const portfolioImages = [
    {
      url: 'https://cdn.poehali.dev/projects/80771259-9c0e-48f1-bcf2-e5f159e7fd24/files/ff1b9387-6d00-471b-a171-461d344fa5c6.jpg',
      title: 'Минималистичная спальня',
      description: 'Встроенное зеркало с LED-подсветкой'
    },
    {
      url: 'https://cdn.poehali.dev/projects/80771259-9c0e-48f1-bcf2-e5f159e7fd24/files/29d7c301-8b24-40d2-8cac-9ab8459d54d1.jpg',
      title: 'Голливудский стиль',
      description: 'Классическое зеркало с лампами'
    },
    {
      url: 'https://cdn.poehali.dev/projects/80771259-9c0e-48f1-bcf2-e5f159e7fd24/files/2a71dcd0-d9ec-4eb1-88a0-6ce809ba3dc9.jpg',
      title: 'Современная ванная',
      description: 'Большое прямоугольное зеркало'
    },
    {
      url: 'https://cdn.poehali.dev/projects/80771259-9c0e-48f1-bcf2-e5f159e7fd24/files/245f6251-b813-477d-aa52-1f142ca3239d.jpg',
      title: 'Салон красоты',
      description: 'Профессиональное рабочее место'
    },
    {
      url: 'https://cdn.poehali.dev/projects/80771259-9c0e-48f1-bcf2-e5f159e7fd24/files/655322f4-de76-4a6f-88bf-3df24cc99c73.jpg',
      title: 'Гардеробная',
      description: 'Напольное зеркало в полный рост'
    }
  ];

  const catalogItems = [
    {
      icon: 'Lightbulb',
      title: 'Голливудские зеркала',
      description: 'Классика с лампами накаливания'
    },
    {
      icon: 'Zap',
      title: 'LED зеркала',
      description: 'Современная светодиодная подсветка'
    },
    {
      icon: 'Maximize2',
      title: 'Настенные',
      description: 'Компактные решения для любого пространства'
    },
    {
      icon: 'Move',
      title: 'Напольные',
      description: 'Мобильные зеркала в полный рост'
    }
  ];

  const customizationOptions = [
    { icon: 'Ruler', title: 'Размер', description: 'От 40 до 200 см' },
    { icon: 'Palette', title: 'Цвет рамы', description: 'Белый, чёрный, дерево, золото' },
    { icon: 'Sun', title: 'Подсветка', description: 'Тёплый, холодный или нейтральный свет' },
    { icon: 'Sparkles', title: 'Опции', description: 'Диммер, сенсорное управление, розетки' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 tracking-tight">
              Гримёрные зеркала<br />на заказ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Создаём индивидуальные зеркала с профессиональной подсветкой для дома, салонов красоты и студий
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('catalog')}>
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Премиум качество</h3>
              <p className="text-muted-foreground">
                Используем только качественные материалы и LED-компоненты
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-muted-foreground">
                Создадим зеркало по вашим размерам и предпочтениям
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Доставка и установка</h3>
              <p className="text-muted-foreground">
                Привезём и установим зеркало в любой точке города
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Каталог</h2>
            <p className="text-lg text-muted-foreground">
              Выберите тип зеркала для вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={item.icon} className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground">
              Наши работы в реальных интерьерах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="customization" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Кастомизация</h2>
            <p className="text-lg text-muted-foreground">
              Создайте уникальное зеркало под ваши потребности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name={option.icon} className="text-primary mb-4" size={36} />
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <PriceCalculator
            mirrorSize={mirrorSize}
            setMirrorSize={setMirrorSize}
            mirrorType={mirrorType}
            setMirrorType={setMirrorType}
            frameColor={frameColor}
            setFrameColor={setFrameColor}
            lightTemp={lightTemp}
            setLightTemp={setLightTemp}
            hasOptions={hasOptions}
            setHasOptions={setHasOptions}
            calculatePrice={calculatePrice}
            scrollToSection={scrollToSection}
          />
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">О нас</h2>
          </div>

          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Мы специализируемся на создании профессиональных гримёрных зеркал более 5 лет. 
              За это время выполнили более 500 проектов для частных клиентов, салонов красоты, 
              фотостудий и шоурумов.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Наша миссия — создавать зеркала, которые не просто освещают, а вдохновляют. 
              Каждое изделие проходит тщательный контроль качества и тестирование перед отправкой клиенту.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Выполненных проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
                <div className="text-muted-foreground">На рынке</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-gray-300">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-gray-300 hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@mirror.ru" className="text-gray-300 hover:text-primary transition-colors">
                      info@mirror.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <p className="text-gray-300">
                      Москва, ул. Примерная, д. 123
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <p className="text-gray-300">
                      Пн-Пт: 10:00 - 19:00<br />
                      Сб-Вс: 11:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Оставить заявку</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Расскажите о вашем проекте"
                        rows={4}
                        className="bg-white"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ImageGalleryDialog 
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
};

export default Index;
