import React from 'react';
import { MessageCircle, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Дарья — семейный{' '}
              <span className="text-emerald-600">нутрициолог</span>,{' '}
              <span className="text-teal-600">психолог</span> и{' '}
              <span className="text-green-600">психосоматолог</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Помогаю взрослым и детям восстановить здоровье через любовь к себе и связь с телом.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://t.me/nutri_dashaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Записаться
              </a>
              
              <a
                href="https://t.me/nutri_dashaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-emerald-600 font-semibold rounded-full border-2 border-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Мои соцсети
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-600">
              <a
                href="https://t.me/nutri_dashaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition-colors duration-200"
              >
                Telegram: @nutri_dashaaa
              </a>
              <a
                href="https://vk.com/nutri_dasha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition-colors duration-200"
              >
                ВКонтакте: nutri_dasha
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src="https://imgfy.ru/zD5FHOaGEeWz69s"
                alt="Дарья - нутрициолог и психолог"
                className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;