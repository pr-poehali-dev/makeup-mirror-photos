import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-secondary">MIRROR</span>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  Главная
                </button>
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  Каталог
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  Портфолио
                </button>
                <button
                  onClick={() => scrollToSection('customization')}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  Кастомизация
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  О нас
                </button>
                <button
                  onClick={() => scrollToSection('contacts')}
                  className="text-lg font-medium hover:text-primary transition-colors text-left"
                >
                  Контакты
                </button>
                <Button onClick={() => scrollToSection('contacts')} className="w-full">
                  Заказать
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection('customization')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Кастомизация
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('contacts')}>
            Заказать
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
