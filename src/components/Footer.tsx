import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon name="Sparkles" className="text-primary" size={24} />
          <span className="text-xl font-bold text-white">MIRROR</span>
        </div>
        <p className="text-sm">
          © 2024 MIRROR. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
