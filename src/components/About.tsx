import React from 'react';
import { Heart, Brain, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Обо мне
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Работаю на стыке нутрициологии и психологии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Отказ от гормонов</h3>
            <p className="text-gray-600">
              Помогаю естественным способом восстановить гормональный баланс
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Лечение детей</h3>
            <p className="text-gray-600">
              Специализируюсь на решении проблем здоровья у детей
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Психосоматика</h3>
            <p className="text-gray-600">
              Устраняю психосоматические симптомы и работаю с циклом и щитовидкой
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Моя цель — помочь вам и вашим детям обрести здоровье через комплексный подход, 
            объединяющий знания о питании, психологии и работе с телом. Я верю, что истинное 
            здоровье начинается с любви к себе и понимания потребностей своего организма.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;