import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Образование и дипломы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Постоянно развиваюсь и изучаю новые методики
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Нутрициология */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Нутрициология</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">МИИН</p>
                  <p className="text-gray-600 text-sm">Московский институт интегративной нутрициологии</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">УОМ</p>
                  <p className="text-gray-600 text-sm">Университет Ортомолекулярной Медицины</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">HLS GO</p>
                  <p className="text-gray-600 text-sm">Международная школа нутрициологии</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Body Coach</p>
                  <p className="text-gray-600 text-sm">Коучинг по здоровому образу жизни</p>
                </div>
              </div>
            </div>
            
            <a
              href="https://vk.com/album-170687672_256044570"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200"
            >
              Посмотреть дипломы
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Психология */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Психология</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Психолого-педагогическое образование</p>
                  <p className="text-gray-600 text-sm">Основы психологии и педагогики</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Психосоматика</p>
                  <p className="text-gray-600 text-sm">Работа с психосоматическими проявлениями</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Семейная терапия</p>
                  <p className="text-gray-600 text-sm">Системный подход к семейным отношениям</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">ТОП-методики</p>
                  <p className="text-gray-600 text-sm">Современные терапевтические методы</p>
                </div>
              </div>
            </div>
            
            <a
              href="https://vk.com/album-170687672_282861631"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
            >
              Посмотреть дипломы
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;