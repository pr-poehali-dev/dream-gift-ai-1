import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    recipient: '',
    occasion: '',
    budget: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const topGifts = [
    { id: 1, name: 'Умные часы Apple Watch', category: 'Технологии', price: '35 000 ₽', match: '95%' },
    { id: 2, name: 'Набор для кофе гурмана', category: 'Хобби', price: '8 500 ₽', match: '92%' },
    { id: 3, name: 'Мастер-класс по живописи', category: 'Впечатления', price: '5 000 ₽', match: '88%' }
  ];

  const features = [
    {
      icon: 'Sparkles',
      title: 'Персонализация на новом уровне',
      description: 'Анализирует интересы, хобби, стиль жизни человека для создания уникальных презентов'
    },
    {
      icon: 'Clock',
      title: 'Экономия времени и сил',
      description: 'Мгновенная обработка множества вариантов. Избавление от бесконечного поиска'
    },
    {
      icon: 'Brain',
      title: 'Умный анализ данных',
      description: 'Учет возраста, пола, отношений, сезонности и бюджета для идеального результата'
    },
    {
      icon: 'Lightbulb',
      title: 'Креативные решения',
      description: 'Неочевидные и оригинальные идеи. Сочетания несочетаемого'
    },
    {
      icon: 'ShoppingBag',
      title: 'Практичность',
      description: 'Рекомендации проверенных магазинов и брендов с сравнением цен'
    },
    {
      icon: 'Target',
      title: 'Решение сложных задач',
      description: 'Подарки для людей, у которых "все есть" или для малознакомых людей'
    }
  ];

  const pricing = [
    {
      name: 'Базовый',
      price: '0 ₽',
      period: 'бесплатно',
      features: ['3 подбора в месяц', 'Базовые рекомендации', 'Доступ к каталогу'],
      popular: false
    },
    {
      name: 'Премиум',
      price: '990 ₽',
      period: 'в месяц',
      features: ['Безлимитные подборы', 'AI-персонализация', 'Приоритетная поддержка', 'Скидки у партнеров'],
      popular: true
    },
    {
      name: 'Бизнес',
      price: 'От 5 000 ₽',
      period: 'в месяц',
      features: ['Корпоративные подборы', 'API интеграция', 'Персональный менеджер', 'Аналитика и отчеты'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Gift" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DreamGift AI
              </span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#how" className="text-slate-700 hover:text-primary transition-colors">Как это работает</a>
              <a href="#features" className="text-slate-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#pricing" className="text-slate-700 hover:text-primary transition-colors">Тарифы</a>
            </nav>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white">
            ✨ Powered by AI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-primary to-accent bg-clip-text text-transparent">
            Идеальный подарок за минуту
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Искусственный интеллект анализирует предпочтения и находит уникальные подарки, 
            которые точно порадуют получателя
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-2xl border-purple-100 animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle className="text-2xl">Попробуйте AI прямо сейчас</CardTitle>
            <CardDescription>Заполните анкету и получите персональные рекомендации</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="recipient">Кто получатель?</Label>
                <Select value={formData.recipient} onValueChange={(value) => setFormData({...formData, recipient: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friend">Друг/Подруга</SelectItem>
                    <SelectItem value="partner">Партнер/Супруг</SelectItem>
                    <SelectItem value="parent">Родитель</SelectItem>
                    <SelectItem value="colleague">Коллега</SelectItem>
                    <SelectItem value="child">Ребенок</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occasion">По какому поводу?</Label>
                <Select value={formData.occasion} onValueChange={(value) => setFormData({...formData, occasion: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите повод..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="birthday">День рождения</SelectItem>
                    <SelectItem value="newyear">Новый год</SelectItem>
                    <SelectItem value="wedding">Свадьба</SelectItem>
                    <SelectItem value="anniversary">Годовщина</SelectItem>
                    <SelectItem value="just">Просто так</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Бюджет</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите бюджет..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">До 3 000 ₽</SelectItem>
                    <SelectItem value="medium">3 000 - 10 000 ₽</SelectItem>
                    <SelectItem value="high">10 000 - 30 000 ₽</SelectItem>
                    <SelectItem value="premium">Более 30 000 ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all text-white"
                size="lg"
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Подобрать подарок
              </Button>
            </form>

            {showResults && (
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="CheckCircle2" className="text-green-600" size={20} />
                  <span className="font-semibold text-slate-900">AI анализирует ваш запрос...</span>
                </div>
                <p className="text-sm text-slate-600">
                  Найдено 47 идеальных вариантов! Зарегистрируйтесь, чтобы увидеть все рекомендации.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🔥 Топ подарков недели</h2>
          <p className="text-slate-600">AI-рекомендации, которые выбирают чаще всего</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topGifts.map((gift) => (
            <Card key={gift.id} className="hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer border-purple-100">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{gift.category}</Badge>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                    {gift.match} совпадение
                  </Badge>
                </div>
                <CardTitle className="text-lg">{gift.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{gift.price}</span>
                  <Button size="sm" variant="outline">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают DreamGift AI?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Наша технология превращает сложный процесс выбора подарка в увлекательное путешествие
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-purple-100 hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифы для любых задач</h2>
          <p className="text-slate-600">Выберите оптимальный план для себя или бизнеса</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-purple-100'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                    Популярный
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                </div>
                <CardDescription>{plan.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent text-white' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши партнеры</h2>
          <p className="text-slate-600">Интеграция с крупнейшими маркетплейсами России</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto opacity-60">
          <div className="text-3xl font-bold text-slate-700">Wildberries</div>
          <div className="text-3xl font-bold text-slate-700">OZON</div>
          <div className="text-3xl font-bold text-slate-700">Яндекс.Маркет</div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Gift" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">DreamGift AI</span>
              </div>
              <p className="text-slate-400 text-sm">
                Искусственный интеллект для подбора идеальных подарков
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнеры</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Челябинск, ул. Горького 34
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (951) 127-83-68
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@dreamgift-ai.ru
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 DreamGift AI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
