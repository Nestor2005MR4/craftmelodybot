import React, { useState } from 'react';
import '../styles/globals.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Telegram бот для создания музыки с ИИ. Создайте уникальные треки по вашему описанию или тексту песни. Бесплатная генерация для новых пользователей." />
      <meta name="keywords" content="Telegram бот для создания музыки, создать музыку с ИИ, сделать трек онлайн, музыкальный бот в Telegram, сгенерировать музыку бесплатно" />
      <meta name="author" content="CraftMelodyBot" />

      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-blue-400">CraftMelodyBot</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-400 transition-colors">Функции</a>
            <a href="#how-it-works" className="hover:text-blue-400 transition-colors">Как работает</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Пакеты</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Отзывы</a>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
            <a href="#features" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Функции</a>
            <a href="#how-it-works" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Как работает</a>
            <a href="#pricing" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Пакеты</a>
            <a href="#testimonials" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Создавайте музыку с помощью ИИ прямо в Telegram
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            CraftMelodyBot — это инновационный способ создавать уникальные треки по вашему описанию или тексту песни.
          </p>
          <a
            href="https://t.me/CraftMelodyBot "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-lg shadow-lg transform transition hover:scale-105"
          >
            Начать использовать
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Основные функции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Генерация музыки",
                description: "Создавайте уникальные треки по вашему описанию или тексту песни.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                ),
              },
              {
                title: "Выбор режима",
                description: "Создавайте музыку через описание или используйте собственный текст песни.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
              },
              {
                title: "Встроенные жанры",
                description: "Поддержка популярных музыкальных стилей: поп, рок, электроника и многое другое.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                ),
              },
              {
                title: "Поддержка вокала",
                description: "Создавайте треки с мужским, женским вокалом или инструментальные композиции.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                ),
              },
              {
                title: "Бесплатная генерация",
                description: "Новые пользователи получают бесплатную генерацию для первого знакомства.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Отзывы",
                description: "Оставляйте отзывы и помогайте улучшать сервис для всех пользователей.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как это работает</h2>
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Выберите режим",
                  description: "Решите, хотите ли вы создать музыку по описанию или использовать собственный текст песни.",
                },
                {
                  step: "2",
                  title: "Настройте параметры",
                  description: "Выберите жанр, тип вокала (мужской/женский) или инструментал, добавьте дополнительные детали.",
                },
                {
                  step: "3",
                  title: "Подтвердите генерацию",
                  description: "Проверьте все параметры перед началом процесса генерации.",
                },
                {
                  step: "4",
                  title: "Получите результат",
                  description: "Через несколько минут вы получите готовый трек с обложкой и метаданными.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-gray-800 p-6 rounded-lg shadow-lg">
                  <span className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-4">{item.step}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Пакеты генераций</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "1 генерация",
                price: "20 ₽",
                features: ["1 генерация", "Мгновенная активация"],
              },
              {
                name: "3 генерации",
                price: "60 ₽",
                features: ["3 генерации", "Экономия 33%", "Лучше для тестирования"],
              },
              {
                name: "5 генераций",
                price: "90 ₽",
                features: ["5 генераций", "Экономия 40%", "Оптимальный выбор"],
              },
              {
                name: "10 генераций",
                price: "150 ₽",
                features: ["10 генераций", "Экономия 50%", "Для активного использования"],
              },
              {
                name: "50 генераций",
                price: "500 ₽",
                features: ["50 генераций", "Экономия 67%", "Максимальная выгода"],
              },
            ].map((plan, index) => (
              <div key={index} className={`bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 ${index === 2 ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://t.me/CraftMelodyBot "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
                  >
                    Выбрать пакет
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Что говорят пользователи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Пользователь #{index + 1}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  Отличный бот! Создал свой первый трек всего за пару минут. Очень доволен качеством и скоростью работы.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать создавать музыку?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
            Присоединяйтесь к тысячам творческих людей, которые уже используют CraftMelodyBot для создания уникальной музыки.
          </p>
          <a
            href="https://t.me/CraftMelodyBot "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-lg shadow-lg transform transition hover:scale-105"
          >
            Начать использовать
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-blue-400">CraftMelodyBot</h3>
              <p className="text-gray-400">Создавайте музыку с помощью искусственного интеллекта</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://t.me/CraftMelodyBot " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Telegram Bot</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16.5l-6.5-6 2.586-2.586 3.914 3.914 7.414-7.414 2.586 2.586-10 10z" />
                </svg>
              </a>
              <a href="https://t.me/CraftMelodyBot_Demo " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Demo Channel</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16.5l-6.5-6 2.586-2.586 3.914 3.914 7.414-7.414 2.586 2.586-10 10z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} CraftMelodyBot. Все права защищены.</p>
            <p className="mt-2">Используется технология искусственного интеллекта для создания музыки</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;