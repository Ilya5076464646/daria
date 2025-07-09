import React from 'react';
import { Gift as GiftIcon, MessageCircle, Download } from 'lucide-react';

const Gift = () => {
  return (
    <section id="gift" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <GiftIcon className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Забери бесплатный подарок
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Напиши мне в Telegram и получи PDF по базовым дефицитам
          </p>
          
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <Download className="w-8 h-8 text-emerald-600 mr-3" />
              <span className="text-xl font-semibold text-gray-900">PDF "Базовые дефициты"</span>
            </div>
            <p className="text-gray-600 mb-4">
              Узнай, какие дефициты могут влиять на твое самочувствие и как их восполнить
            </p>
            <div className="text-sm text-gray-500">
              • Основные витамины и минералы<br />
              • Признаки дефицитов<br />
              • Рекомендации по восполнению
            </div>
          </div>
          
          <a
            href="https://t.me/nutri_dashaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Написать и получить подарок
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gift;