import React, { useState } from 'react';
import { Activity, Brain, Heart, Users, Zap, AlertTriangle } from 'lucide-react';

const WorkWith = () => {
  const [activeTab, setActiveTab] = useState('nutrition');

  const nutritionIssues = [
    { icon: Activity, title: 'Отёки', description: 'Устранение задержки жидкости в организме' },
    { icon: Zap, title: 'Усталость', description: 'Восстановление энергии и жизненных сил' },
    { icon: Heart, title: 'Сбой цикла', description: 'Нормализация менструального цикла' },
    { icon: Activity, title: 'Проблемы ЖКТ', description: 'Улучшение пищеварения и работы кишечника' },
    { icon: AlertTriangle, title: 'Гипотиреоз', description: 'Поддержка функции щитовидной железы' },
    { icon: Heart, title: 'АИТ', description: 'Работа с аутоиммунным тиреоидитом' },
    { icon: Zap, title: 'Дефициты', description: 'Восполнение нутриентных дефицитов' },
    { icon: Activity, title: 'Метаболизм', description: 'Ускорение обмена веществ' }
  ];

  const psychologyIssues = [
    { icon: Brain, title: 'Тревожность', description: 'Снижение уровня тревоги и беспокойства' },
    { icon: Users, title: 'Конфликты', description: 'Разрешение межличностных конфликтов' },
    { icon: Heart, title: 'Психосоматика', description: 'Работа с телесными проявлениями стресса' },
    { icon: Brain, title: 'РАС', description: 'Поддержка детей с расстройствами аутистического спектра' },
    { icon: Zap, title: 'СДВГ', description: 'Работа с гиперактивностью и дефицитом внимания' },
    { icon: AlertTriangle, title: 'Неофобия', description: 'Преодоление страха нового' },
    { icon: Users, title: 'Семейные сложности', description: 'Улучшение семейных отношений' },
    { icon: Heart, title: 'Детско-родительские отношения', description: 'Гармонизация отношений с детьми' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            С чем я работаю
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный подход к здоровью и благополучию
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-2">
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'nutrition'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Нутрициолог
            </button>
            <button
              onClick={() => setActiveTab('psychology')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'psychology'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              Психолог
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === 'nutrition' ? nutritionIssues : psychologyIssues).map((issue, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                activeTab === 'nutrition' ? 'bg-emerald-100' : 'bg-teal-100'
              }`}>
                <issue.icon className={`w-6 h-6 ${
                  activeTab === 'nutrition' ? 'text-emerald-600' : 'text-teal-600'
                }`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.title}</h3>
              <p className="text-gray-600 text-sm">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWith;