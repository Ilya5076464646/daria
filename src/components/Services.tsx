import React from 'react';
import { MessageCircle, FileText, Users, Baby, Utensils, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Консультация нутрициолога',
      price: '8 000₽',
      description: 'Подробный анализ состояния здоровья и рекомендации по питанию',
      color: 'emerald'
    },
    {
      icon: FileText,
      title: 'Протокол восстановления',
      price: '30 000₽',
      description: 'Комплексная программа восстановления здоровья',
      color: 'teal'
    },
    {
      icon: Users,
      title: 'Ведение',
      price: '50 000₽',
      description: 'Долгосрочное сопровождение на пути к здоровью',
      color: 'green'
    },
    {
      icon: Baby,
      title: 'Детское ведение',
      price: '15 000–20 000₽',
      description: 'Специализированная программа для детей',
      color: 'blue'
    },
    {
      icon: Utensils,
      title: 'Прикорм',
      price: '6 000₽',
      description: 'Консультация по введению прикорма малышам',
      color: 'purple'
    },
    {
      icon: Brain,
      title: 'Консультация психолога',
      price: '5 000₽/час',
      description: 'Психологическая поддержка и терапия',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600',
      teal: 'bg-teal-100 text-teal-600',
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      pink: 'bg-pink-100 text-pink-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Индивидуальный подход к каждому клиенту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-3xl font-bold text-emerald-600 mb-4">{service.price}</p>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <a
                href="https://t.me/nutri_dashaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Записаться
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;