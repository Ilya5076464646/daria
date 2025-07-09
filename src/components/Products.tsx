import React from 'react';
import { ShoppingCart, FileText, Utensils, MapPin, Shield, TrendingUp } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: FileText,
      title: 'Методичка "Расшифровка анализов"',
      price: '2 500₽',
      description: 'Полное руководство по интерпретации лабораторных анализов',
      color: 'emerald'
    },
    {
      icon: Utensils,
      title: 'Сборник детских рецептов',
      price: '499₽',
      description: 'Здоровые и вкусные рецепты для детей',
      color: 'teal'
    },
    {
      icon: Shield,
      title: 'Меню по АИП',
      price: '3 000₽',
      description: 'Специальное меню для аутоиммунного протокола',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Разумный поход в магазин',
      price: '1 000₽',
      description: 'Гид по выбору полезных продуктов',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Закрытый канал PROБАД',
      price: '599₽',
      description: 'Эксклюзивная информация о биодобавках',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600',
      teal: 'bg-teal-100 text-teal-600',
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Товары
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полезные материалы для вашего здоровья
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(product.color)}`}>
                <product.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-3xl font-bold text-emerald-600 mb-4">{product.price}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <a
                href="https://t.me/nutri_dashaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Приобрести
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;