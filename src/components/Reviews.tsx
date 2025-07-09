import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Результат работы',
      description: 'Потрясающие изменения в здоровье и самочувствии'
    },
    {
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Трансформация',
      description: 'Кардинальные улучшения в состоянии здоровья'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Отзывы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Результаты моей работы говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{testimonial.title}</h3>
                <p className="text-gray-600">{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://t.me/nutri_dashaaa/4538"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Смотреть все отзывы
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;