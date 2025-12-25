<!DOCTYPE html>
<html lang="en">
<head>
  <base target="_blank">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PropertyPro - Real Estate SaaS Platform</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-bg {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .property-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .property-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .pulse-animation {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  
  <script type="text/babel">
    const { useState, useEffect } = React;
    
    const PropertyProLanding = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [activeTab, setActiveTab] = useState('agents');
      const [email, setEmail] = useState('');
      const [stats, setStats] = useState({
        properties: 0,
        agents: 0,
        transactions: 0,
        savings: 0
      });

      useEffect(() => {
        const animateStats = () => {
          const targetStats = {
            properties: 50000,
            agents: 12000,
            transactions: 25000,
            savings: 2.5
          };

          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setStats({
              properties: Math.floor(targetStats.properties * progress),
              agents: Math.floor(targetStats.agents * progress),
              transactions: Math.floor(targetStats.transactions * progress),
              savings: Math.floor(targetStats.savings * progress * 10) / 10
            });

            if (step >= steps) {
              clearInterval(timer);
            }
          }, stepDuration);
        };

        animateStats();
      }, []);

      const features = [
        {
          icon: "🏠",
          title: "Property Management",
          description: "Comprehensive property listing and management system with advanced search and filtering capabilities."
        },
        {
          icon: "📊",
          title: "Analytics Dashboard",
          description: "Real-time insights and analytics to track performance, leads, and market trends."
        },
        {
          icon: "💬",
          title: "Client Communication",
          description: "Integrated CRM with automated follow-ups, scheduling, and client relationship management."
        },
        {
          icon: "🔧",
          title: "Automation Tools",
          description: "Streamline workflows with automated lead nurturing, document generation, and task management."
        },
        {
          icon: "📱",
          title: "Mobile App",
          description: "Native mobile applications for iOS and Android with full feature parity."
        },
        {
          icon: "🔒",
          title: "Security & Compliance",
          description: "Bank-level security with GDPR compliance and encrypted data storage."
        }
      ];

      const pricingPlans = [
        {
          name: "Starter",
          price: 29,
          description: "Perfect for individual agents",
          features: [
            "Up to 50 property listings",
            "Basic CRM features",
            "Email templates",
            "Mobile app access",
            "Standard support"
          ],
          popular: false
        },
        {
          name: "Professional",
          price: 79,
          description: "Ideal for small teams",
          features: [
            "Up to 500 property listings",
            "Advanced CRM & automation",
            "Custom branding",
            "Analytics dashboard",
            "Priority support",
            "Lead capture tools"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: 199,
          description: "For large agencies",
          features: [
            "Unlimited property listings",
            "Advanced analytics",
            "Custom integrations",
            "White-label solution",
            "24/7 dedicated support",
            "Training & onboarding"
          ],
          popular: false
        }
      ];

      const testimonials = [
        {
          name: "Sarah Johnson",
          role: "Real Estate Broker",
          company: "Century 21",
          avatar: "SJ",
          quote: "PropertyPro has transformed how we manage our listings. Our productivity increased by 40% in just 3 months."
        },
        {
          name: "Michael Chen",
          role: "Agency Owner",
          company: "Prime Properties",
          avatar: "MC",
          quote: "The automation features saved us 20 hours per week. Best investment we've made for our business."
        },
        {
          name: "Lisa Rodriguez",
          role: "Senior Agent",
          company: "Keller Williams",
          avatar: "LR",
          quote: "The mobile app is incredible. I can manage everything on the go and never miss a lead."
        }
      ];

      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you! We'll send updates to ${email}`);
        setEmail('');
      };

      return (
        <div className="min-h-screen bg-white">
          {/* Navigation */}
          <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl font-bold text-indigo-600">
                      🏢 PropertyPro
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
                  <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition">Pricing</a>
                  <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition">Testimonials</a>
                  <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Start Free Trial
                  </button>
                </div>

                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                  <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Features</a>
                  <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Pricing</a>
                  <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Testimonials</a>
                  <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
                  <button className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-lg">
                    Start Free Trial
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <section className="gradient-bg pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Transform Your Real Estate Business
                  </h1>
                  <p className="text-xl mb-8 text-indigo-100">
                    The all-in-one platform that helps real estate professionals manage properties, 
                    nurture leads, and close deals faster than ever before.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
                      Start 14-Day Free Trial
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition text-lg">
                      Watch Demo
                    </button>
                  </div>
                  <div className="mt-8 flex items-center gap-4 text-indigo-100">
                    <span className="flex items-center">
                      ⭐⭐⭐⭐⭐ 4.9/5
                    </span>
                    <span>•</span>
                    <span>12,000+ agents trust us</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center text-white">
                        <h3 className="font-semibold">Dashboard Overview</h3>
                        <div className="w-3 h-3 bg-green-400 rounded-full pulse-animation"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Active Listings</span>
                        <span className="font-semibold text-2xl">{stats.properties.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">New Leads Today</span>
                        <span className="font-semibold text-2xl text-green-600">24</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Deals Closed</span>
                        <span className="font-semibold text-2xl text-blue-600">156</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {stats.properties.toLocaleString()}+
                  </div>
                  <div className="text-gray-600 font-medium">Properties Listed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {stats.agents.toLocaleString()}+
                  </div>
                  <div className="text-gray-600 font-medium">Active Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {stats.transactions.toLocaleString()}+
                  </div>
                  <div className="text-gray-600 font-medium">Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    ${stats.savings}M+
                  </div>
                  <div className="text-gray-600 font-medium">Client Savings</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Everything You Need to Succeed
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive platform provides all the tools you need to streamline 
                  your real estate business and boost your productivity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="property-card bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Demo Section */}
          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Built for Real Estate Professionals
                </h2>
                <p className="text-xl text-gray-600">
                  See how PropertyPro adapts to different roles in your organization
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="border-b border-gray-200">
                  <nav className="flex">
                    {['agents', 'brokers', 'managers'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-4 px-6 text-center font-medium text-sm uppercase tracking-wider ${
                          activeTab === tab
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        } transition`}
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-8">
                  {activeTab === 'agents' && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">For Agents</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Personal CRM with lead tracking
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Automated follow-up sequences
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Mobile app for on-the-go access
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Integrated calendar and scheduling
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                        <div className="text-gray-500 text-center">
                          <div className="text-6xl mb-4">📱</div>
                          <div className="text-lg font-medium">Agent Dashboard Preview</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'brokers' && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">For Brokers</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Team performance analytics
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Commission tracking and reporting
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Lead distribution system
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Custom branded portals
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                        <div className="text-gray-500 text-center">
                          <div className="text-6xl mb-4">📊</div>
                          <div className="text-lg font-medium">Broker Analytics Dashboard</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'managers' && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">For Managers</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Advanced reporting and insights
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Workflow automation
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Team collaboration tools
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            ROI tracking and optimization
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                        <div className="text-gray-500 text-center">
                          <div className="text-6xl mb-4">⚙️</div>
                          <div className="text-lg font-medium">Management Console</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  What Our Customers Say
                </h2>
                <p className="text-xl text-gray-600">
                  Join thousands of satisfied real estate professionals
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-indigo-600">{testimonial.company}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-4 flex text-yellow-400">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-gray-600">
                  Choose the perfect plan for your business needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`relative bg-white rounded-xl shadow-lg border-2 ${
                    plan.popular ? 'border-indigo-600' : 'border-gray-100'
                  } p-8`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-gray-900">
                        ${plan.price}
                        <span className="text-lg text-gray-600 font-normal">/month</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 rounded-lg font-semibold transition ${
                      plan.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                    }`}>
                      Start Free Trial
                    </button>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600">
                  All plans include 14-day free trial • No credit card required • Cancel anytime
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="gradient-bg py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Real Estate Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join 12,000+ agents who have already revolutionized their workflow with PropertyPro
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition whitespace-nowrap"
                  >
                    Start Free Trial
                  </button>
                </div>
              </form>

              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-8 text-indigo-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No credit card required
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl font-bold text-indigo-400">
                      🏢 PropertyPro
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 max-w-md">
                    The leading real estate SaaS platform helping agents, brokers, and agencies 
                    streamline their operations and grow their business.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Integrations</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                <p className="text-gray-400">
                  © 2025 PropertyPro. All rights reserved. | Privacy Policy | Terms of Service
                </p>
              </div>
            </div>
          </footer>
        </div>
      );
    };
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<PropertyProLanding />);
  </script>
</body>
</html>