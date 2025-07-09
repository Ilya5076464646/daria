import React from 'react';
import { Heart, ExternalLink, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">Дарья</span>
            </div>
            <p className="text-gray-400 mb-4">
              Семейный нутрициолог, психолог и психосоматолог. Помогаю восстановить здоровье через любовь к себе.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Главная
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="https://t.me/nutri_dashaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                @nutri_dashaa
              </a>
              <a
                href="https://t.me/nutri_dashaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                @nutri_dashaaa
              </a>
              <a
                href="https://vk.com/nutri_dasha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Дарья. Все права защищены.
          </p>
          <a
            href="https://disk.yandex.ru/i/YTpYMdZ2MGwI5w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm flex items-center"
          >
            Политика конфиденциальности
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;