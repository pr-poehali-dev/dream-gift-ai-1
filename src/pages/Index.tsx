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
    { id: 1, name: 'Apple Watch', category: 'Technology', price: '$450', match: '95%' },
    { id: 2, name: 'Premium Coffee Set', category: 'Hobby', price: '$110', match: '92%' },
    { id: 3, name: 'Painting Masterclass', category: 'Experience', price: '$65', match: '88%' }
  ];

  const features = [
    {
      icon: 'Sparkles',
      title: 'Next-Level Personalization',
      description: 'Analyzes interests, hobbies, and lifestyle to create unique and thoughtful gifts'
    },
    {
      icon: 'Clock',
      title: 'Save Time & Effort',
      description: 'Instant processing of countless options. No more endless searching online'
    },
    {
      icon: 'Brain',
      title: 'Smart Data Analysis',
      description: 'Considers age, gender, relationships, seasonality, and budget for perfect results'
    },
    {
      icon: 'Lightbulb',
      title: 'Creative Solutions',
      description: 'Unexpected and original ideas. Unique combinations you never thought of'
    },
    {
      icon: 'ShoppingBag',
      title: 'Practical Recommendations',
      description: 'Trusted stores and brands with price comparisons'
    },
    {
      icon: 'Target',
      title: 'Solve Complex Challenges',
      description: 'Gifts for people who "have everything" or for those you barely know'
    }
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$0',
      period: 'free',
      features: ['3 gift searches per month', 'Basic recommendations', 'Catalog access'],
      popular: false
    },
    {
      name: 'Premium',
      price: '$12',
      period: 'per month',
      features: ['Unlimited searches', 'AI personalization', 'Priority support', 'Partner discounts'],
      popular: true
    },
    {
      name: 'Business',
      price: 'From $60',
      period: 'per month',
      features: ['Corporate gift solutions', 'API integration', 'Personal manager', 'Analytics & reports'],
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
              <a href="#how" className="text-slate-700 hover:text-primary transition-colors">How It Works</a>
              <a href="#features" className="text-slate-700 hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-slate-700 hover:text-primary transition-colors">Pricing</a>
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
            Perfect Gift in Minutes
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Artificial intelligence analyzes preferences and finds unique gifts 
            that will definitely delight the recipient
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-2xl border-purple-100 animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle className="text-2xl">Try AI Right Now</CardTitle>
            <CardDescription>Fill out the form and get personalized recommendations</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="recipient">Who is the recipient?</Label>
                <Select value={formData.recipient} onValueChange={(value) => setFormData({...formData, recipient: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="partner">Partner/Spouse</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="colleague">Colleague</SelectItem>
                    <SelectItem value="child">Child</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occasion">What's the occasion?</Label>
                <Select value={formData.occasion} onValueChange={(value) => setFormData({...formData, occasion: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select occasion..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="newyear">New Year</SelectItem>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="just">Just Because</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Up to $40</SelectItem>
                    <SelectItem value="medium">$40 - $130</SelectItem>
                    <SelectItem value="high">$130 - $400</SelectItem>
                    <SelectItem value="premium">More than $400</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all text-white"
                size="lg"
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Find Perfect Gift
              </Button>
            </form>

            {showResults && (
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="CheckCircle2" className="text-green-600" size={20} />
                  <span className="font-semibold text-slate-900">AI is analyzing your request...</span>
                </div>
                <p className="text-sm text-slate-600">
                  Found 47 perfect options! Sign up to see all recommendations.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🔥 Top Gifts This Week</h2>
          <p className="text-slate-600">AI recommendations that people choose most often</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topGifts.map((gift) => (
            <Card key={gift.id} className="hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer border-purple-100">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{gift.category}</Badge>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                    {gift.match} match
                  </Badge>
                </div>
                <CardTitle className="text-lg">{gift.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{gift.price}</span>
                  <Button size="sm" variant="outline">
                    Details
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DreamGift AI?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our technology transforms the complex gift selection process into an exciting journey
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans for Every Need</h2>
          <p className="text-slate-600">Choose the optimal plan for yourself or your business</p>
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
                    Most Popular
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
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-slate-600">Integration with leading online retailers</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto opacity-60">
          <div className="text-3xl font-bold text-slate-700">Amazon</div>
          <div className="text-3xl font-bold text-slate-700">Etsy</div>
          <div className="text-3xl font-bold text-slate-700">eBay</div>
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
                Artificial intelligence for finding perfect gifts
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Chelyabinsk, Gorky St. 34
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
            <p>© 2024 DreamGift AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
