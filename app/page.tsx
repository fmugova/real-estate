'use client';

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PropertyPro - Real Estate Management Platform</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Navigation */
        nav {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 1rem 0;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #2563eb;
            text-decoration: none;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
        }
        
        .nav-link {
            text-decoration: none;
            color: #4b5563;
            font-weight: 500;
            transition: color 0.3s ease;
            cursor: pointer;
        }
        
        .nav-link:hover, .nav-link.active {
            color: #2563eb;
        }
        
        .cta-button {
            background: linear-gradient(135deg, #2563eb, #3b82f6);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }
        
        /* Mobile Menu */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        /* Sections */
        section {
            padding: 5rem 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        .hero-content {
            position: relative;
            z-index: 1;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn-secondary {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .btn-secondary:hover {
            background: white;
            color: #2563eb;
        }
        
        /* Features Section */
        .features {
            background: #f8fafc;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            margin-top: 3rem;
        }
        
        .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
        }
        
        .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #2563eb, #3b82f6);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #1e293b;
        }
        
        .feature-card p {
            color: #64748b;
            line-height: 1.6;
        }
        
        /* Pricing Section */
        .pricing {
            background: white;
        }
        
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .pricing-card {
            background: white;
            border: 2px solid #e2e8f0;
            border-radius: 20px;
            padding: 2rem;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .pricing-card.featured {
            border-color: #2563eb;
            transform: scale(1.05);
            box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
        }
        
        .pricing-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .pricing-card.featured:hover {
            transform: scale(1.05) translateY(-5px);
        }
        
        .pricing-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .pricing-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .pricing-price {
            font-size: 3rem;
            font-weight: 800;
            color: #2563eb;
        }
        
        .pricing-period {
            color: #64748b;
            font-size: 0.9rem;
        }
        
        .pricing-features {
            list-style: none;
            margin-bottom: 2rem;
        }
        
        .pricing-features li {
            padding: 0.5rem 0;
            color: #4b5563;
        }
        
        .pricing-features li:before {
            content: '✓';
            color: #10b981;
            font-weight: bold;
            margin-right: 0.5rem;
        }
        
        /* Contact Section */
        .contact {
            background: linear-gradient(135deg, #1e293b, #334155);
            color: white;
            text-align: center;
        }
        
        .contact-form {
            max-width: 600px;
            margin: 3rem auto 0;
            display: grid;
            gap: 1rem;
        }
        
        .form-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        
        .contact-form input,
        .contact-form textarea {
            padding: 1rem;
            border: none;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1rem;
        }
        
        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
        
        .contact-form textarea {
            grid-column: 1 / -1;
            min-height: 120px;
            resize: vertical;
        }
        
        /* Section Headers */
        .section-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1e293b;
        }
        
        .contact .section-title {
            color: white;
        }
        
        .section-subtitle {
            font-size: 1.2rem;
            color: #64748b;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .contact .section-subtitle {
            color: rgba(255, 255, 255, 0.8);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .form-group {
                grid-template-columns: 1fr;
            }
            
            section {
                padding: 3rem 0;
                min-height: auto;
            }
            
            .pricing-card.featured {
                transform: none;
            }
        }
        
        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }
        
        /* Loading animation */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-fade-in {
            animation: fadeInUp 0.6s ease forwards;
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        const PropertyProApp = () => {
            const [activeSection, setActiveSection] = useState('home');
            const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

            // Navigation handler
            const handleNavClick = (sectionId) => {
                setActiveSection(sectionId);
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                setMobileMenuOpen(false);
            };

            // Scroll detection for active navigation
            useEffect(() => {
                const handleScroll = () => {
                    const sections = ['home', 'features', 'pricing', 'contact'];
                    const scrollPosition = window.scrollY + 100;

                    sections.forEach(sectionId => {
                        const element = document.getElementById(sectionId);
                        if (element) {
                            const { offsetTop, offsetHeight } = element;
                            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                                setActiveSection(sectionId);
                            }
                        }
                    });
                };

                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            const Navigation = () => (
                <nav>
                    <div className="container">
                        <div className="nav-container">
                            <a href="#" className="logo">PropertyPro</a>
                            
                            <ul className="nav-links">
                                <li>
                                    <a 
                                        className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                        onClick={() => handleNavClick('home')}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
                                        onClick={() => handleNavClick('features')}
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className={`nav-link ${activeSection === 'pricing' ? 'active' : ''}`}
                                        onClick={() => handleNavClick('pricing')}
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                        onClick={() => handleNavClick('contact')}
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <button className="cta-button">Get Started</button>
                                </li>
                            </ul>
                            
                            <button 
                                className="mobile-menu-btn"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </nav>
            );

            const HeroSection = () => (
                <section id="home" className="hero">
                    <div className="container">
                        <div className="hero-content">
                            <h1>Revolutionize Your Real Estate Business</h1>
                            <p>
                                Streamline property management, boost sales, and delight clients with our 
                                comprehensive real estate SaaS platform.
                            </p>
                            <div className="hero-buttons">
                                <button className="cta-button">Start Free Trial</button>
                                <a href="#" className="btn-secondary">Watch Demo</a>
                            </div>
                        </div>
                    </div>
                </section>
            );

            const FeaturesSection = () => {
                const features = [
                    {
                        icon: '🏠',
                        title: 'Property Management',
                        description: 'Efficiently manage your entire property portfolio with advanced tools for listings, tenant management, and maintenance tracking.'
                    },
                    {
                        icon: '📊',
                        title: 'Analytics & Reports',
                        description: 'Get deep insights into your business performance with comprehensive analytics and customizable reporting dashboards.'
                    },
                    {
                        icon: '🤝',
                        title: 'Client Relationship',
                        description: 'Build stronger relationships with integrated CRM tools, automated communications, and client portal access.'
                    },
                    {
                        icon: '💰',
                        title: 'Financial Management',
                        description: 'Track income, expenses, and profitability with automated rent collection and financial reporting features.'
                    },
                    {
                        icon: '📱',
                        title: 'Mobile Access',
                        description: 'Access your business from anywhere with our fully responsive web app and dedicated mobile applications.'
                    },
                    {
                        icon: '🔒',
                        title: 'Secure & Reliable',
                        description: 'Enterprise-grade security with 99.9% uptime guarantee, regular backups, and compliance with industry standards.'
                    }
                ];

                return (
                    <section id="features" className="features">
                        <div className="container">
                            <div className="section-header">
                                <h2 className="section-title">Powerful Features</h2>
                                <p className="section-subtitle">
                                    Everything you need to manage and grow your real estate business in one platform
                                </p>
                            </div>
                            <div className="features-grid">
                                {features.map((feature, index) => (
                                    <div key={index} className="feature-card animate-fade-in">
                                        <div className="feature-icon">{feature.icon}</div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            };

            const PricingSection = () => {
                const plans = [
                    {
                        name: 'Starter',
                        price: 29,
                        period: '/month',
                        features: [
                            'Up to 50 properties',
                            'Basic analytics',
                            'Email support',
                            'Mobile app access',
                            'Standard templates'
                        ]
                    },
                    {
                        name: 'Professional',
                        price: 79,
                        period: '/month',
                        featured: true,
                        features: [
                            'Up to 500 properties',
                            'Advanced analytics',
                            'Priority support',
                            'Custom branding',
                            'API access',
                            'Advanced reporting',
                            'Team collaboration'
                        ]
                    },
                    {
                        name: 'Enterprise',
                        price: 199,
                        period: '/month',
                        features: [
                            'Unlimited properties',
                            'Custom integrations',
                            '24/7 phone support',
                            'White-label solution',
                            'Advanced security',
                            'Custom workflows',
                            'Dedicated account manager'
                        ]
                    }
                ];

                return (
                    <section id="pricing" className="pricing">
                        <div className="container">
                            <div className="section-header">
                                <h2 className="section-title">Choose Your Plan</h2>
                                <p className="section-subtitle">
                                    Flexible pricing options to fit businesses of all sizes
                                </p>
                            </div>
                            <div className="pricing-grid">
                                {plans.map((plan, index) => (
                                    <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                                        <div className="pricing-header">
                                            <h3 className="pricing-title">{plan.name}</h3>
                                            <div className="pricing-price">
                                                ${plan.price}
                                                <span className="pricing-period">{plan.period}</span>
                                            </div>
                                        </div>
                                        <ul className="pricing-features">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                        <button className="cta-button" style={{width: '100%'}}>
                                            Get Started
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            };

            const ContactSection = () => {
                const [formData, setFormData] = useState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    message: ''
                });

                const handleInputChange = (e) => {
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                    });
                };

                const handleSubmit = (e) => {
                    e.preventDefault();
                    console.log('Form submitted:', formData);
                    alert('Thank you for your message! We\'ll get back to you soon.');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        company: '',
                        message: ''
                    });
                };

                return (
                    <section id="contact" className="contact">
                        <div className="container">
                            <div className="section-header">
                                <h2 className="section-title">Get in Touch</h2>
                                <p className="section-subtitle">
                                    Ready to transform your real estate business? Contact us today for a personalized demo.
                                </p>
                            </div>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company Name"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your needs..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                                <button type="submit" className="cta-button">Send Message</button>
                            </form>
                        </div>
                    </section>
                );
            };

            return (
                <div className="App">
                    <Navigation />
                    <HeroSection />
                    <FeaturesSection />
                    <PricingSection />
                    <ContactSection />
                </div>
            );
        };

        ReactDOM.render(<PropertyProApp />, document.getElementById('root'));
    </script>
</body>
</html>

This complete HTML file creates a comprehensive Real Estate SaaS landing page with the following features:

## Key Features:

1. **Working In-App Navigation**:
   - Fixed navigation bar with smooth scrolling
   - Active section highlighting
   - Mobile-responsive hamburger menu
   - Scroll detection for automatic active state updates

2. **Complete Sections**:
   - **Hero Section**: Compelling headline with call-to-action buttons
   - **Features Section**: 6 key features with icons and descriptions
   - **Pricing Section**: 3-tier pricing with highlighted popular plan
   - **Contact Section**: Working contact form with state management

3. **Modern Design**:
   - Gradient backgrounds and modern color scheme
   - Card-based layouts with hover effects
   - Responsive grid systems
   - Professional typography and spacing

4. **Interactive Elements**:
   - Hover animations and transitions
   - Working form with state management
   - Smooth scrolling navigation
   - Mobile-responsive design

5. **React Functionality**:
   - useState for form management and navigation state
   - useEffect for scroll detection
   - Event handlers for navigation and form submission
   - Component-based architecture

The page is fully functional with working navigation, form handling, and responsive design that works on all device sizes. All navigation links smoothly scroll to their respective sections and highlight the active section in the navigation bar.