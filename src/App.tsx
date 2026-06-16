import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FloatingSoapBubbles 
} from './components/Illustrations';
import { ProductCard } from './components/ProductCard';
import { 
  ArrowRight, 
  TrendingUp, 
  Coins, 
  Layers, 
  ShieldCheck, 
  Clock, 
  ExternalLink, 
  Mail, 
  Phone, 
  Award, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  Info
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';

type ThemeName = 'lavender' | 'eco' | 'citrus' | 'slate';

const themes = {
  lavender: {
    name: 'Fluno Mint & Coral',
    id: 'lavender' as ThemeName,
    bgClass: 'bg-[#76D6A3]', // Solid brand green background top to bottom
    textClass: 'text-[#111C16]',
    mutedTextClass: 'text-[#4F5D54]',
    cardBg: 'bg-[#FAF8F4]', // Rich off-white cream cards
    borderClass: 'border-[#D2ECE0]',
    accentColor: '#EF543B', // Terracotta Coral Accent
    accentTextClass: 'text-[#EF543B]',
    accentBgClass: 'bg-[#EF543B]/10',
    primaryColor: '#76D6A3', // Matcha Mint Main
    btnClass: 'bg-[#EF543B] hover:bg-[#D43F26] text-white',
    pillBg: 'bg-[#76D6A3]/12 text-[#225539] border border-[#76D6A3]/25',
    innerContainer: 'bg-[#F1FAF5]', // Sage overlay
    accentGradient: 'from-[#76D6A3] to-[#EF543B]',
  },
  eco: {
    name: 'Fluno Mint & Coral',
    id: 'eco' as ThemeName,
    bgClass: 'bg-[#76D6A3]',
    textClass: 'text-[#111C16]',
    mutedTextClass: 'text-[#4F5D54]',
    cardBg: 'bg-[#FAF8F4]',
    borderClass: 'border-[#D2ECE0]',
    accentColor: '#EF543B',
    accentTextClass: 'text-[#EF543B]',
    accentBgClass: 'bg-[#EF543B]/10',
    primaryColor: '#76D6A3',
    btnClass: 'bg-[#EF543B] hover:bg-[#D43F26] text-white',
    pillBg: 'bg-[#76D6A3]/12 text-[#225539] border border-[#76D6A3]/25',
    innerContainer: 'bg-[#F1FAF5]',
    accentGradient: 'from-[#76D6A3] to-[#EF543B]',
  },
  citrus: {
    name: 'Fluno Mint & Coral',
    id: 'citrus' as ThemeName,
    bgClass: 'bg-[#76D6A3]',
    textClass: 'text-[#111C16]',
    mutedTextClass: 'text-[#4F5D54]',
    cardBg: 'bg-[#FAF8F4]',
    borderClass: 'border-[#D2ECE0]',
    accentColor: '#EF543B',
    accentTextClass: 'text-[#EF543B]',
    accentBgClass: 'bg-[#EF543B]/10',
    primaryColor: '#76D6A3',
    btnClass: 'bg-[#EF543B] hover:bg-[#D43F26] text-white',
    pillBg: 'bg-[#76D6A3]/12 text-[#225539] border border-[#76D6A3]/25',
    innerContainer: 'bg-[#F1FAF5]',
    accentGradient: 'from-[#76D6A3] to-[#EF543B]',
  },
  slate: {
    name: 'Fluno Mint & Coral',
    id: 'slate' as ThemeName,
    bgClass: 'bg-[#76D6A3]',
    textClass: 'text-[#111C16]',
    mutedTextClass: 'text-[#4F5D54]',
    cardBg: 'bg-[#FAF8F4]',
    borderClass: 'border-[#D2ECE0]',
    accentColor: '#EF543B',
    accentTextClass: 'text-[#EF543B]',
    accentBgClass: 'bg-[#EF543B]/10',
    primaryColor: '#76D6A3',
    btnClass: 'bg-[#EF543B] hover:bg-[#D43F26] text-white',
    pillBg: 'bg-[#76D6A3]/12 text-[#225539] border border-[#76D6A3]/25',
    innerContainer: 'bg-[#F1FAF5]',
    accentGradient: 'from-[#76D6A3] to-[#EF543B]',
  },
};

export default function App() {
  const [currentTheme] = useState<ThemeName>('lavender');
  const t = themes[currentTheme];

  // Contact & Inquiry states for the offline reaction ledger
  const [reactionInterest, setReactionInterest] = useState<string>('Strategic Partner (Equity Interest)');
  const [contactName, setContactName] = useState<string>('');
  const [contactMessage, setContactMessage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [savedSubmissions, setSavedSubmissions] = useState<any[]>([]);

  // Product Filter State
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'upcoming'>('all');

  // Custom states for premium scrolling indicators
  const [scrollProgress, setScrollProgress] = useState(0);

  // Local historical inquiries load
  useEffect(() => {
    const local = localStorage.getItem('fluno_inquiries');
    if (local) {
      try {
        setSavedSubmissions(JSON.parse(local));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  // Tracking Page Scroll Progress with maximum efficiency
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(window.scrollY / docHeight);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Premium Inert Smooth Momentum Scroll hook (lerped animations)
  useEffect(() => {
    // Only apply premium desktop inertia scrolling to prevent interfering with mobile touch pads/drag
    if (typeof window === 'undefined' || window.matchMedia('(max-width: 768px)').matches) return;

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let isMoving = false;
    let frameId: number | null = null;
    const speedFactor = 0.075; // Sweet spot for elegant momentum friction

    const animateScroll = () => {
      if (!isMoving) return;
      const diff = targetScrollY - currentScrollY;
      currentScrollY += diff * speedFactor;

      if (Math.abs(diff) < 0.3) {
        currentScrollY = targetScrollY;
        window.scrollTo(0, currentScrollY);
        isMoving = false;
        if (frameId) {
          cancelAnimationFrame(frameId);
          frameId = null;
        }
        return;
      }

      window.scrollTo(0, currentScrollY);
      frameId = requestAnimationFrame(animateScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      // Ignore horizontal scrolling or active modifier keys
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.ctrlKey || e.metaKey) return;
      
      e.preventDefault();
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(maxScroll, targetScrollY + e.deltaY));
      
      if (!isMoving) {
        isMoving = true;
        if (frameId) cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(animateScroll);
      }
    };

    const handleScrollSync = () => {
      if (!isMoving) {
        targetScrollY = window.scrollY;
        currentScrollY = window.scrollY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScrollSync, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScrollSync);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  // Soft smooth-scrolling helper for CTA button
  const scrollToContact = () => {
    const el = document.getElementById('connect-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Safe handler for Inquiry Submission
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim()) return;

    const newInquiry = {
      id: Date.now(),
      name: contactName,
      interest: reactionInterest,
      message: contactMessage,
      timestamp: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };

    const updated = [newInquiry, ...savedSubmissions];
    setSavedSubmissions(updated);
    localStorage.setItem('fluno_inquiries', JSON.stringify(updated));
    
    setFormSubmitted(true);
    setContactName('');
    setContactMessage('');
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  // Simple, direct financial targets dataset for the investor-facing charts
  const arrRoadmapData = [
    { label: 'Y1 Q1', arr: 0.8, segment: 'Metro Launch' },
    { label: 'Y1 Q2', arr: 1.8, segment: 'Quick Commerce Scale' },
    { label: 'Y1 Q3', arr: 3.5, segment: 'Core Expansion' },
    { label: 'Y1 YR-END', arr: 5.5, segment: 'Year 1 Run-Rate Target' },
    { label: 'Y2 Q1', arr: 8.5, segment: 'Regional Replications' },
    { label: 'Y2 Q2', arr: 12.5, segment: 'Refill Lines Scaling' },
    { label: 'Y2 Q3', arr: 18.0, segment: 'SKU Rollouts' },
    { label: 'Y2 YR-END', arr: 24.0, segment: 'Year 2 Run-Rate Target' },
    { label: 'Y3 Q1', arr: 40.0, segment: 'Modern Trade Channels' },
    { label: 'Y3 Q2', arr: 60.0, segment: 'National Footprint' },
    { label: 'Y3 Q3', arr: 80.0, segment: 'Production Economics' },
    { label: 'Y3 YR-END', arr: 100.0, segment: 'Year 3 National ARR Goal' }
  ];

  // Seed Allocation Dataset for Pie Chart
  const seedAllocationData = [
    { name: 'Supply Chain & Bulk Production', value: 50, color: '#EF543B' }, // Brand Coral Orange
    { name: 'Q-Commerce Placement & Performance Ads', value: 25, color: '#76D6A3' }, // Matcha Mint Green
    { name: 'Skincare Tooling & SKU Expansion', value: 25, color: '#E5C270' } // Warm Gold Sand
  ];

  // Raw Product Catalog incorporating the high-res client attachments
  const productCatalog = [
    {
      id: 'handwash-liquid',
      name: 'Fluno pH-Balanced Hand Wash',
      category: 'Flagship Collection',
      size: '250ml Designer Bottle',
      image: '/input_file_0.png',
      isUpcoming: false,
      tag: 'Best Seller',
      tagBg: 'bg-[#8568FF] text-white',
      backdrop: 'bg-gradient-to-tr from-[#ede9ff] to-[#f5f2ff]',
      description: 'Our flagship cleansing compound. Delivers rich, velvet moisture while protecting the natural hand skin barrier. Packed in a bathroom-gorgeous designer pump container.',
      spec: 'pH 5.5 formula • Soap-free surfactants • Plant-derived extracts',
      links: [
        { label: 'Order on Blinkit', url: 'https://blinkit.com/prn/fluno-ph-balanced-hand-wash/prid/712269' },
        { label: 'Shop on Amazon', url: 'https://www.amazon.in/Fluno-Hand-Wash-PH-balanced-moisturized/dp/B0FPRLC8HQ' }
      ]
    },
    {
      id: 'handwash-trio',
      name: 'Eco handwash 800ml Pouches (Trio Packet)',
      category: 'Repeat Hygiene Pack',
      size: '3x 800ml Eco Recycled Pouches',
      image: '/input_file_1.png',
      isUpcoming: false,
      tag: 'Highest Margin Refill',
      tagBg: 'bg-emerald-600 text-white',
      backdrop: 'bg-gradient-to-tr from-[#e2f8ec] to-[#f2fdf7]',
      description: 'Three high-volume green botanical refill packs built to completely replenish your elegant Fluno counter pump bottles up to 10 full cycles. Extreme cost savings lock in subscriber loops.',
      spec: '85% plastic reduction • Bio-degradable film • Optimized shipping volume',
      links: [
        { label: 'JioMart Storefront', url: 'https://www.jiomart.com/product/fluno-handwash-250ml-fights-germs-ph-balanced-formula-paraben-free-gentle-on-skin-soft-and-moisturizer-hands-mlq88j-73331545' }
      ]
    },
    {
      id: 'sunscreen-purple',
      name: 'Fluno Hydrating SPF 50+ Sun Screen',
      category: 'Premium Skincare Line',
      size: '50ml Precision Matte Tube',
      image: '/input_file_3.png',
      isUpcoming: true,
      tag: 'Launch Q2 Target',
      tagBg: 'bg-amber-600 text-white',
      backdrop: 'bg-gradient-to-tr from-[#f4f0ff] to-[#fbfaff]',
      description: 'A revolutionary broad-spectrum solar barrier designed for Indian urban humidity levels. Provides premium hydration without trace sweat-stickiness or chalky white layers.',
      spec: 'Broad-spectrum UVA/UVB protection • Hyaluronic compound base • Oil-free matte finish',
      links: []
    },
    {
      id: 'sunscreen-orange',
      name: 'Fluno Sun Screen SPF 50+ Active protection',
      category: 'Premium Skincare Line',
      size: '50g Ergonomic Active Tube',
      image: '/input_file_4.png',
      isUpcoming: true,
      tag: 'Launch Q2 Target',
      tagBg: 'bg-amber-600 text-white',
      backdrop: 'bg-gradient-to-tr from-[#fff2e2] to-[#fffaf5]',
      description: 'High-performance barrier block engineered for outdoor athletes and heavy sweat environments. Stays highly protective under intense daylight hours.',
      spec: 'Water-resistant formulation (80 mins) • Zero toxic additives • Fast dermal absorption',
      links: []
    },
    {
      id: 'handwash-orange-refill',
      name: 'Citrus Premium Eco Refill Pouch',
      category: 'Repeat Hygiene Pack',
      size: '1x 800ml Eco Recycled Pouch',
      image: '/input_file_5.png',
      isUpcoming: false,
      tag: 'High Margin Refill',
      tagBg: 'bg-emerald-600 text-white',
      backdrop: 'bg-gradient-to-tr from-[#fff0df] to-[#fffcf9]',
      description: 'Individual high-volume household orange pouch to refill existing Fluno dispensers, infusing active hydration with natural blood-orange and botanical notes.',
      spec: 'Eco-conscious barrier envelope • Scent infused botanical extracts • Quick-pour spout',
      links: [
        { label: 'Visit Shopsy Storefront', url: 'https://www.shopsy.in/fluno-hand-wash-bottle/p/itm8f529d6935ae6?pid=XAGHHV7NYDKBAY9U&lid=LSTXAGHHV7NYDKBAY9UYZRQ6H&marketplace=FLIPKART&q=fluno' }
      ]
    },
    {
      id: 'lip-balm-stick',
      name: 'Routine Botanical Lip Balm',
      category: 'Everyday Repeat Line',
      size: '4.25g / 0.15oz Slick Pocket Stick',
      image: '/input_file_2.png',
      isUpcoming: true,
      tag: 'Upcoming line expansion',
      tagBg: 'bg-amber-600 text-white',
      backdrop: 'bg-gradient-to-tr from-[#e5fbf0] to-[#f4fef8]',
      description: 'Ultra-nourishing organic moisture stick designed to immediately mend chapped tissue and establish long-lasting winter protective micro-barriers without greasy weight.',
      spec: '100% plant waxes • Infused with cold-pressed oils • Daily high-turnover repeat SKU',
      links: []
    }
  ];

  // Filtering products based on active toggle
  const filteredProducts = productCatalog.filter(p => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') return !p.isUpcoming;
    if (activeFilter === 'upcoming') return p.isUpcoming;
    return true;
  });

  return (
    <div className={`min-h-screen ${t.bgClass} ${t.textClass} selection:bg-[#EF543B] selection:text-white relative flex flex-col font-sans overflow-x-hidden pb-12`}>
      
      {/* 24/7 Shimmering Ambient Clean Soap Bubbles Floating Over Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-80">
        <FloatingSoapBubbles className="w-full h-full" />
      </div>

      {/* 1. PREMIUM HEADER */}
      <header className="border-b border-[#5EC595] py-4 px-6 md:px-12 flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#76D6A3]/90 sticky top-0 z-45 backdrop-blur-md relative">
        <div className="flex items-center justify-between w-full sm:w-auto space-x-4">
          <div className="flex items-baseline space-x-1 cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-brand font-bold text-3xl lowercase text-[#EF543B] tracking-tight">
              fluno
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#111C16]"></span>
          </div>
          <span className="hidden lg:inline-block h-5 w-[1px] bg-[#5EC595]"></span>
          <span className="hidden lg:inline-block text-[10px] uppercase tracking-widest text-[#183525] font-mono bg-[#EAF3EE]/40 px-2.5 py-0.5 rounded">
            A Brand by Parvar Enterprises
          </span>
        </div>

        <div className="flex items-center space-x-4 w-full sm:w-auto justify-end">
          <div className="hidden sm:flex items-center space-x-1.5 bg-white/20 text-[#111C16] px-3 py-1 rounded-full border border-[#5EC595]/35 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF543B] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Premium Botanical Care</span>
          </div>

          <button 
            onClick={scrollToContact}
            className="px-5 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-xs font-bold bg-[#EF543B] hover:bg-[#D43F26] text-white"
          >
            Inquire Now
          </button>
        </div>
      </header>

      {/* Progress Indicator Bar */}
      <div className="sticky top-[108px] sm:top-[73px] left-0 w-full h-[3.5px] bg-neutral-200/20 z-45 overflow-hidden">
        <div 
          className="h-full transition-all duration-75 relative bg-[#EF543B]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* 2. MAIN UNIFIED ALL-IN-ONE LANDING CANVAS */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-8 space-y-8 relative z-10">
        
        {/* ONE CONTINUOUS VISUAL MULTI-MODULE SECTION */}
        <div className="space-y-8">
          
          {/* INTRO MODULE (VISION HERO STATEMENT) */}
          <motion.div 
            id="vision-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative ${t.cardBg} ${t.textClass} p-6 sm:p-10 md:p-14 rounded-3xl overflow-hidden shadow-md border ${t.borderClass}`}
          >
            {/* Ambient Coral / Sage decorative spheres */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#EF543B]/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#76D6A3]/10 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16"></div>

            <div className="relative max-w-4xl mx-auto py-4 space-y-8 flex flex-col items-center text-center">
              
              {/* Premium Text Content */}
              <div className="space-y-6 flex flex-col items-center">
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <span className="bg-[#EF543B] text-white text-[10px] font-mono uppercase font-bold tracking-widest px-3 py-1 rounded">
                    Affordable Premium Personal Care
                  </span>
                  <span className="text-[10px] font-mono text-[#4F5D54] tracking-wider font-extrabold bg-[#76D6A3]/12 border border-[#76D6A3]/20 px-2 py-0.5 rounded">
                    India Market GTM Focus
                  </span>
                </div>

                <div className="space-y-3 flex flex-col items-center">
                  <div className="flex items-baseline justify-center space-x-1.5 flex-wrap">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-brand font-bold text-[#EF543B] lowercase tracking-tight">fluno</span>
                    <span className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 rounded-full bg-[#111C16]"></span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#EF543B] italic font-semibold pl-2">care in every drop</span>
                  </div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[#4F5D54] font-extrabold">
                    A Brand by PARVAR Enterprises
                  </p>
                </div>

                <div className="border-[#EF543B] border-t-2 md:border-t-0 md:border-l-4 md:pl-6 py-2 max-w-2xl mx-auto mt-4">
                  <blockquote className="text-lg sm:text-xl md:text-2xl font-serif text-[#111C16] italic leading-relaxed font-semibold">
                    "We democratize premium personal care for the Indian household by merging high-efficacy, clean daily formulas with elegant designer packaging at mass-market prices."
                  </blockquote>
                </div>

                {/* Strategic Pillars Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 text-center border-t border-[#D2ECE0] w-full animate-fade-in">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono block text-[#4F5D54] font-extrabold tracking-wider">PRODUCT FOCUS</span>
                    <span className="text-sm font-bold text-[#111C16] mt-0.5 block">Clean Formulas</span>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono block text-[#4F5D54] font-extrabold tracking-wider">PACKAGING CORE</span>
                    <span className="text-sm font-bold text-[#111C16] mt-0.5 block">Aesthetic Refillable Packs</span>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono block text-[#4F5D54] font-extrabold tracking-wider">PRIMARY CHANNEL</span>
                    <span className="text-sm font-bold text-[#111C16] mt-0.5 block">10-Min Quick Commerce</span>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono block text-[#4F5D54] font-extrabold tracking-wider">RETENTION VECTOR</span>
                    <span className="text-sm font-bold text-[#111C16] mt-0.5 block">High-Frequency Refills</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GAP & SOLUTION VALUE MODULE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left side: Retail Consumer Gap */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`${t.cardBg} border ${t.borderClass} p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:shadow-md transition-all duration-500`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 block animate-pulse"></span>
                  <span className="text-[11px] font-mono text-red-500 font-bold uppercase tracking-widest">
                    The Market Gap
                  </span>
                </div>

                <h3 className="text-2xl font-serif tracking-tight leading-tight">
                  The Polarization Trap
                </h3>

                <p className={`text-sm leading-relaxed ${t.mutedTextClass}`}>
                  The Indian personal care market is highly fractured. Consumers are forced to choose between cheap drugstore products that contain harsh chemicals or skin-stripping ingredients, and elite skincare that is far too expensive for daily household usage.
                </p>

                <div className="p-4 bg-[#EF543B]/5 border border-[#EF543B]/10 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-red-700 font-bold uppercase block text-amber-800">Retailer Pressure:</span>
                  <p className="text-xs text-amber-900 leading-normal font-light">
                    Traditional shelf owners struggle with razor-thin margins and slow stock velocity, while lacking modern, beautifully designed products that customers actually want to display proudly on their premium counters.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#D2ECE0] pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-emerald-700 font-bold">
                <span>OUTDATED OPTIONS</span>
                <span className="text-red-500">● SOLVER NEEDED</span>
              </div>
            </motion.div>

            {/* Right side: Fluno Solution Bridge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`${t.cardBg} border ${t.borderClass} p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:shadow-md transition-all duration-500 relative overflow-hidden`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full block bg-emerald-500"></span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#227547]">
                    The Fluno Expansion
                  </span>
                </div>

                <h3 className="text-2xl font-serif tracking-tight leading-tight">
                  The "Affordable Premium" Bridge
                </h3>

                <p className={`text-sm leading-relaxed ${t.mutedTextClass}`}>
                  Fluno solves this permanently. By focusing on highly effective, organic ingredients and packaging them in custom, design-forward refillable bottles, we provide luxurious bathroom-display aesthetics at accessible, household-friendly price heights.
                </p>

                <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase block text-[#225539]">Repeat Value & Moat:</span>
                  <p className={`text-xs leading-normal font-light ${t.mutedTextClass}`}>
                    By leveraging ultra-economical bulk refill pouches to replenish our custom bottles, we sustain robust 60%+ gross margins while anchoring lifetime household subscription habits.
                  </p>
                </div>
              </div>

              <div className={`border-t ${t.borderClass} pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-[#227547]`}>
                <span>SHELF REVOLUTION</span>
                <span className="font-bold flex items-center space-x-1">
                  <span>✓ FLUNO VALUE</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* FLUNO PRODUCT PORTFOLIO LOOKBOOK GALLERY */}
          <motion.div 
            id="gallery-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className={`${t.cardBg} border ${t.borderClass} p-6 md:p-10 rounded-3xl transition-all duration-500`}
          >
            <div className={`text-center pb-8 border-b ${t.borderClass} space-y-2`}>
              <span className="px-3 py-1 text-[10px] font-mono tracking-widest rounded-full font-bold uppercase bg-[#EF543B]/10 text-[#EF543B]">
                Aesthetic Portfolio
              </span>
              <h3 className="text-3xl md:text-4xl font-serif tracking-tight text-center">
                Fluno Product Lookbook
              </h3>
              <p className={`text-xs md:text-sm leading-normal max-w-2xl mx-auto ${t.mutedTextClass}`}>
                A premium, curated catalog of our signature bathroom-gorgeous daily care dispensers and botanical refill packaging.
              </p>
            </div>

            {/* Clean Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {productCatalog.map((p) => (
                <ProductCard key={p.id} product={p} t={t} />
              ))}
            </div>



          </motion.div>

          {/* MARKET SPECTRUM & TAM ANALYSIS */}
          <motion.div 
            id="market-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`${t.cardBg} border ${t.borderClass} p-6 md:p-8 rounded-3xl transition-colors duration-500`}
          >
            <div className={`flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b ${t.borderClass} gap-4`}>
              <div className="space-y-1">
                <span className="px-2 py-0.5 text-[9px] font-mono uppercase rounded font-bold bg-[#EF543B]/10 text-[#EF543B]">
                  Market Size Analysis
                </span>
                <h3 className="text-2xl font-serif">Indian Beauty & Hygiene Spectrum</h3>
              </div>
              <div className="text-left md:text-right">
                <span className={`text-xs font-mono block ${t.mutedTextClass}`}>YEAR 3 TARGET ARR GOAL</span>
                <span className="text-xl font-mono font-bold text-[#EF543B]">₹100 Crore+</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              
              <div className="bg-white border border-[#D2ECE0] p-5 rounded-xl space-y-2 hover:shadow-xs transition-shadow">
                <span className={`text-[10px] font-mono block ${t.mutedTextClass}`}>TOTAL ADDRESSABLE MARKET (TAM)</span>
                <h4 className="text-2xl font-serif font-black">₹1,52,700 Cr</h4>
                <span className={`text-xs font-light block ${t.mutedTextClass}`}>($18.1 Billion Total Indian market)</span>
                <div className="w-full h-1.5 rounded-full overflow-hidden mt-3 bg-[#EF543B]/10">
                  <div className="h-full w-full bg-[#EF543B]"></div>
                </div>
              </div>

              <div className="bg-white border border-[#D2ECE0] p-5 rounded-xl space-y-2 hover:shadow-xs transition-shadow">
                <span className={`text-[10px] font-mono block ${t.mutedTextClass}`}>SERVICEABLE ADDRESSABLE MARKET (SAM)</span>
                <h4 className="text-2xl font-serif font-black">₹33,600 Cr</h4>
                <span className={`text-xs font-light block ${t.mutedTextClass}`}>($4.0 Billion e-Commerce & Quick Commerce segments)</span>
                <div className="w-full h-1.5 rounded-full overflow-hidden mt-3 bg-[#EF543B]/10">
                  <div className="h-full w-[22%] bg-[#EF543B]"></div>
                </div>
              </div>

              <div className="bg-white border border-[#D2ECE0] p-5 rounded-xl space-y-2 hover:shadow-xs transition-shadow">
                <span className={`text-[10px] font-mono block ${t.mutedTextClass}`}>SERVICEABLE OBTAINABLE MARKET (SOM)</span>
                <h4 className="text-2xl font-serif font-black text-[#EF543B]">₹100 Cr+</h4>
                <span className="text-xs font-semibold block text-[#EF543B]">Year 3 Realistic Capture Milestone Target</span>
                <div className="w-full h-1.5 rounded-full overflow-hidden mt-3 bg-[#EF543B]/10">
                  <div className="h-full w-[10%] progress-bar animate-pulse bg-[#EF543B]"></div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ARR TRACTION & TARGET TIMELINE GRAPH */}
          <div id="traction-section" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Traction Pillars Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`lg:col-span-5 ${t.cardBg} border ${t.borderClass} p-6 rounded-3xl flex flex-col justify-between hover:shadow-md transition-all duration-500`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold bg-[#EF543B]/10 text-[#EF543B]">
                    D2C Proof of Traction
                  </span>
                  <span className={`text-xs font-mono ${t.mutedTextClass}`}>Market Validation</span>
                </div>

                <h3 className="text-2xl font-serif tracking-tight text-[#111C16]">
                  Fluno Commercial Proof
                </h3>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3 p-3 bg-white border border-[#D2ECE0] rounded-xl">
                    <div className="w-8 h-8 rounded flex items-center justify-center shrink-0 font-bold font-mono text-xs bg-[#EF543B]/10 text-[#EF543B]">
                      1k+
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#111C16]">1,000+ Units Solid Proof</h5>
                      <p className={`text-[11px] leading-normal font-light ${t.mutedTextClass}`}>
                        Flagship hygiene product runs complete, delivered and verified with exceptional retention feedback.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-white border border-[#D2ECE0] rounded-xl">
                    <TrendingUp className="shrink-0 mt-0.5 text-[#EF543B]" size={18} />
                    <div>
                      <h5 className="text-xs font-bold text-[#111C16]">Product-Market Fit & Velocity</h5>
                      <p className={`text-[11px] leading-normal font-light ${t.mutedTextClass}`}>
                        Proven high direct search frequency and rapidly compounding organic reach on active online platforms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-white border border-[#D2ECE0] rounded-xl">
                    <Coins className="shrink-0 mt-0.5 text-[#EF543B]" size={18} />
                    <div>
                      <h5 className="text-xs font-bold text-[#111C16]">Asset-Light & Hyper-Efficient</h5>
                      <p className={`text-[11px] leading-normal font-light ${t.mutedTextClass}`}>
                        Short logistics turnaround prevents locked capital, safeguarding outstanding cash returns per batch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`pt-4 border-t ${t.borderClass} mt-6 flex justify-between items-center text-[10px] font-mono`}>
                <span className={t.mutedTextClass}>ACTIVE INVENTORY LOOPS</span>
                <span className="font-bold text-emerald-800">● PMF VERIFIED</span>
              </div>
            </motion.div>

            {/* Area Chart Target Graph */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`lg:col-span-7 ${t.cardBg} border ${t.borderClass} p-6 rounded-3xl flex flex-col justify-between hover:shadow-md transition-all duration-500`}
            >
              <div className={`flex justify-between items-center pb-3 border-b ${t.borderClass}`}>
                <div className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-[#EF543B]" />
                  <span className="text-xs font-mono font-bold tracking-wide uppercase">
                    3-Year Target ARR Scaling Curve
                  </span>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold bg-[#EF543B]/10 text-[#EF543B] border border-[#EF543B]/20">
                  Goal: ₹100 Cr+ ARR
                </span>
              </div>

              <p className={`text-[11px] leading-relaxed pt-2 ${t.mutedTextClass}`}>
                Our target timeline is built on direct hyper-local operations: launching on high-speed delivery corridors in metropolitan hubs, and expanding smoothly into nationwide physical store channels.
              </p>

              {/* ARR Area Chart wrapper */}
              <div className="h-[210px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={arrRoadmapData}
                    margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorBrandArr" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EF543B" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#EF543B" stopOpacity={0.01}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2ECE6" />
                    <XAxis 
                      dataKey="label" 
                      tickLine={false} 
                      axisLine={false}
                      tick={{ fill: '#4F5D54', fontSize: 9, fontFamily: 'monospace' }}
                    />
                    <YAxis 
                      tickLine={false} 
                      axisLine={false}
                      tick={{ fill: '#4F5D54', fontSize: 9, fontFamily: 'monospace' }}
                      unit="Cr"
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const pt = payload[0].payload;
                          return (
                            <div className="bg-[#111C16] text-[#FAF8F4] p-3 rounded-lg border border-[#D2ECE0] shadow-xl max-w-[210px] text-[11px] space-y-1 font-sans">
                              <div className="text-[9px] font-mono text-[#EF543B] font-semibold">{pt.label} target</div>
                              <div className="text-xs font-bold font-mono text-white">₹{pt.arr.toFixed(1)} Crore ARR</div>
                              <div className="text-[9px] text-gray-350 border-t border-gray-800 pt-1 mt-1 leading-tight">
                                {pt.segment}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="arr" 
                      stroke="#EF543B" 
                      strokeWidth={2.5}
                      fillOpacity={1} 
                      fill="url(#colorBrandArr)" 
                      activeDot={{ r: 6, fill: '#111C16', stroke: '#EF543B', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="border border-[#D2ECE0] bg-white p-2.5 rounded-lg text-center text-[10px] mt-4 flex items-center justify-between font-mono text-[#4F5D54]">
                <span>Y1 Goal: ₹5.5 Cr ARR</span>
                <span>Y2 Goal: ₹24.0 Cr ARR</span>
                <span className="font-bold text-[#EF543B]">Y3 National Goal: ₹100.0 Cr+ ARR</span>
              </div>
            </motion.div>

          </div>

          {/* DEPLOYED RETAIL CHANNELS */}
          <motion.div 
            id="channels-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`${t.cardBg} border ${t.borderClass} p-6 md:p-8 rounded-3xl transition-colors duration-500`}
          >
            <div className={`space-y-1 border-b ${t.borderClass} pb-4 mb-6`}>
              <span className="px-2 py-0.5 text-[9px] font-mono uppercase rounded font-bold bg-[#EF543B]/10 text-[#EF543B]">
                Marketplace Validation
              </span>
              <h3 className="text-2xl font-serif text-[#111C16]">Instant Storefront Deployment</h3>
              <p className={`text-xs ${t.mutedTextClass}`}>
                Every single asset is validated and actively in the market. Click on any card below to visit Fluno's real live retail storefronts on official checkout networks across India:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Blinkit */}
              <motion.a 
                href="https://blinkit.com/prn/fluno-ph-balanced-hand-wash/prid/712269" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.01 }}
                className="group p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 bg-white border-yellow-300"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400 text-[#111C16] font-bold text-xs flex items-center justify-center font-mono select-none">
                    bk
                  </div>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-yellow-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-yellow-600 block tracking-wider font-semibold">10-Minute Checkout</span>
                  <h4 className="text-base font-serif font-bold text-[#111C16]">Blinkit Stores</h4>
                  <p className={`text-[11px] leading-normal font-light mt-1 ${t.mutedTextClass}`}>
                    Active pH-Balanced product list accessible for immediate on-demand home grocery orders.
                  </p>
                </div>
                <span className="text-[10px] font-mono font-bold block pt-2 group-hover:translate-x-1 transition-transform text-[#EF543B]">
                  Visit Live Storefront →
                </span>
              </motion.a>

              {/* Amazon */}
              <motion.a 
                href="https://www.amazon.in/Fluno-Hand-Wash-PH-balanced-moisturized/dp/B0FPRLC8HQ" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.01 }}
                className="group p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 bg-white border-orange-250"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#232F3E] text-white font-mono font-bold text-xs flex items-center justify-center select-none">
                    az
                  </div>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-orange-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-orange-600 block tracking-wider font-semibold">National Logistics</span>
                  <h4 className="text-base font-serif font-bold text-[#111C16]">Amazon India</h4>
                  <p className={`text-[11px] leading-normal font-light mt-1 ${t.mutedTextClass}`}>
                    Fulfilling prime orders across every territory through Amazon's comprehensive core.
                  </p>
                </div>
                <span className="text-[10px] font-mono font-bold block pt-2 group-hover:translate-x-1 transition-transform text-[#EF543B]">
                  Visit Live Storefront →
                </span>
              </motion.a>

              {/* JioMart */}
              <motion.a 
                href="https://www.jiomart.com/product/fluno-handwash-250ml-fights-germs-ph-balanced-formula-paraben-free-gentle-on-skin-soft-and-moisturizer-hands-mlq88j-73331545" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.01 }}
                className="group p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 bg-white border-blue-200"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center select-none">
                    jm
                  </div>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-blue-600 block tracking-wider font-semibold">Reliance Retail</span>
                  <h4 className="text-base font-serif font-bold text-[#111C16]">JioMart Digital</h4>
                  <p className={`text-[11px] leading-normal font-light mt-1 ${t.mutedTextClass}`}>
                    Enabling reliable grocery cart integrations within India's direct supermarket network.
                  </p>
                </div>
                <span className="text-[10px] font-mono font-bold block pt-2 group-hover:translate-x-1 transition-transform text-[#EF543B]">
                  Visit Live Storefront →
                </span>
              </motion.a>

              {/* Flipkart Shopsy */}
              <motion.a 
                href="https://www.shopsy.in/fluno-hand-wash-bottle/p/itm8f529d6935ae6?pid=XAGHHV7NYDKBAY9U&lid=LSTXAGHHV7NYDKBAY9UYZRQ6H&marketplace=FLIPKART&q=fluno" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.01 }}
                className="group p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 bg-white border-pink-200"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-pink-600 text-white font-mono font-bold text-xs flex items-center justify-center select-none">
                    sy
                  </div>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-pink-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-pink-600 block tracking-wider font-semibold">Local Value Reach</span>
                  <h4 className="text-base font-serif font-bold text-[#111C16]">Flipkart Shopsy</h4>
                  <p className={`text-[11px] leading-normal font-light mt-1 ${t.mutedTextClass}`}>
                    Capturing dense localized buyer cohorts on Flipkart's customized distribution service.
                  </p>
                </div>
                <span className="text-[10px] font-mono font-bold block pt-2 group-hover:translate-x-1 transition-transform text-[#EF543B]">
                  Visit Live Storefront →
                </span>
              </motion.a>

            </div>
          </motion.div>

          {/* FOUNDERS DIRECTORY EXECUTIVE SUMMARY */}
          <motion.div 
            id="founders-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`${t.cardBg} border ${t.borderClass} p-6 md:p-8 rounded-3xl transition-colors duration-500`}
          >
            <div className={`space-y-1 border-b ${t.borderClass} pb-4 mb-6`}>
              <span className="px-2 py-0.5 text-[9px] font-mono uppercase rounded font-bold bg-[#EF543B]/10 text-[#EF543B]">
                Company Leadership
              </span>
              <h3 className="text-2xl font-serif">Founding Complementary Strengths</h3>
              <p className={`text-xs ${t.mutedTextClass}`}>
                Combining formulation excellence with highly optimized consumer brand operations:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-white border border-[#D2ECE0] flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border font-serif text-xl font-bold bg-[#EF543B]/10 text-[#EF543B] border-[#EF543B]/20">
                  R&D
                </div>
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="px-2.5 py-0.5 text-[9px] font-mono rounded font-bold uppercase tracking-wider bg-[#EF543B]/10 text-[#EF543B]">
                    Science & Formulations Lead
                  </span>
                  <h4 className="text-lg font-serif font-bold">Dr. Sai Prasad</h4>
                  <p className={`text-xs leading-relaxed font-light ${t.mutedTextClass}`}>
                    Drives cosmetic chemistry integrity, ingredient sourcing safety, and meticulous skin formulation safety reviews to secure family consumer trust.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#D2ECE0] flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border font-serif text-xl font-bold bg-[#EF543B]/10 text-[#EF543B] border-[#EF543B]/20">
                  OPS
                </div>
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="px-2.5 py-0.5 text-[9px] font-mono rounded font-bold uppercase tracking-wider bg-[#EF543B]/10 text-[#EF543B]">
                    Operations & Strategy Lead
                  </span>
                  <h4 className="text-lg font-serif font-bold">P. Sai Varun, MBA</h4>
                  <p className={`text-xs leading-relaxed font-light ${t.mutedTextClass}`}>
                    Directs supply chain production logistics, quick commerce channel listing structures, modern distribution partner arrangements, and capital performance.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* SEED CAPITAL PLAN & ALLOCATION PIE GRAPH */}
          <motion.div 
            id="investment-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`${t.cardBg} border ${t.borderClass} p-6 md:p-8 rounded-3xl transition-colors duration-500`}
          >
            <div className={`space-y-1 mb-6 border-b ${t.borderClass} pb-4`}>
              <span className="px-2 py-0.5 text-[9px] font-mono uppercase rounded font-bold bg-[#EF543B]/10 text-[#EF543B]">
                Investment Invitation
              </span>
              <h3 className="text-2xl font-serif">Seed Capital Deployment Plan</h3>
              <p className={`text-xs ${t.mutedTextClass}`}>
                Our seed funding targets rapid production inventory leverage, high-speed digital commercial corridor locks, and immediate localized retail scaling.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Proposal card (Deep charcoal high profile text layout) */}
              <div className="lg:col-span-4 bg-[#111C16] text-[#FAF8F4] p-6 rounded-2xl border border-emerald-900 flex flex-col justify-between h-[300px] shadow-sm">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold block text-[#EF543B]">Round Proposal:</span>
                  <h4 className="text-3xl font-serif text-white">Seed Growth Funding</h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    Capital is allocated strictly towards bulk material inventory scale to satisfy growing demand loops, high-ROAS quick-commerce placements, and the upcoming sunscreen launch.
                  </p>
                </div>
                <div className="border-t border-gray-800 pt-3">
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Operational Speed:</span>
                  <span className="text-[11px] font-mono font-bold block mt-0.5 text-[#EF543B]">Asset-oriented deployment. Zero capital burns on wild marketing.</span>
                </div>
              </div>

              {/* Recharts Pie Chart container */}
              <div className="lg:col-span-4 bg-white border border-[#D2ECE0] p-4 rounded-2xl flex flex-col items-center justify-center h-[300px]">
                <span className={`text-[10px] font-mono uppercase tracking-wider mb-2 font-bold block ${t.mutedTextClass}`}>
                  Visual Capital Split
                </span>
                <div className="relative h-[200px] w-full flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={seedAllocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={75}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {seedAllocationData.map((entry, index) => {
                          const cellColor = index === 0 ? '#EF543B' : index === 1 ? '#76D6A3' : '#E5C270';
                          return <Cell key={`cell-${index}`} fill={cellColor} />;
                        })}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Allocation']}
                        contentStyle={{ 
                          backgroundColor: '#111C16', 
                          border: 'none', 
                          borderRadius: '8px', 
                          color: '#FAF8F4', 
                          fontSize: '11px',
                          fontFamily: 'monospace'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-bold font-mono text-[#EF543B]">100%</span>
                    <span className={`text-[8px] font-mono uppercase tracking-widest leading-none ${t.mutedTextClass}`}>deployment</span>
                  </div>
                </div>
                <div className="flex space-x-3 text-[9px] font-mono mt-2">
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full inline-block bg-[#EF543B]"></span>
                    <span className={t.mutedTextClass}>50% Inv</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full inline-block bg-[#76D6A3]"></span>
                    <span className={t.mutedTextClass}>25% Ads</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full inline-block bg-[#E5C270]"></span>
                    <span className={t.mutedTextClass}>25% SKU</span>
                  </div>
                </div>
              </div>

              {/* Descriptions breakdowns */}
              <div className="lg:col-span-4 flex flex-col justify-between h-auto lg:h-[300px] space-y-3">
                
                <div className="bg-white border border-[#D2ECE0] p-3 rounded-xl flex flex-col justify-center hover:shadow-xs transition-shadow">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h5 className="text-[10px] font-bold font-mono uppercase">1. Supply & Inventory Scale</h5>
                    <span className="text-xs font-mono font-bold text-[#EF543B]">50%</span>
                  </div>
                  <p className={`text-[11px] font-light leading-normal ${t.mutedTextClass}`}>Fulfills raw materials, active batch contracts, and massive volume packaging orders.</p>
                </div>

                <div className="bg-white border border-[#D2ECE0] p-3 rounded-xl flex flex-col justify-center hover:shadow-xs transition-shadow">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h5 className="text-[10px] font-bold font-mono uppercase">2. Placement & ROAS Ads</h5>
                    <span className="text-xs font-mono font-bold text-[#76D6A3]">25%</span>
                  </div>
                  <p className={`text-[11px] font-light leading-normal ${t.mutedTextClass}`}>Locks down hyper-targeted local placements inside metropolitan high-speed warehouse corridors.</p>
                </div>

                <div className="bg-white border border-[#D2ECE0] p-3 rounded-xl flex flex-col justify-center hover:shadow-xs transition-shadow">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h5 className="text-[10px] font-bold font-mono uppercase">3. SKU Expansion & Skincare</h5>
                    <span className="text-xs font-mono font-bold text-[#E5C270]">25%</span>
                  </div>
                  <p className={`text-[11px] font-light leading-normal ${t.mutedTextClass}`}>Unlocks manufacturing molding machinery toolings and batch safety compliance for sun protection lines.</p>
                </div>

              </div>

            </div>
          </motion.div>

          {/* ACTIVE ADVISORY CONTACT SUBMISSIONS PORTAL */}
          <motion.div 
            id="connect-section" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`${t.cardBg} border ${t.borderClass} grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl overflow-hidden shadow-md transition-colors duration-500`}
          >
            
            {/* Left information list (Deep charcoal panel style) */}
            <div className="lg:col-span-5 bg-[#111C16] text-[#FAF8F4] p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="px-2 py-0.5 text-[9px] font-mono bg-[#EF543B]/20 text-[#EF543B] rounded uppercase font-bold tracking-wider inline-block">
                  Direct Contact
                </span>
                <h3 className="text-3xl font-serif tracking-tight text-white leading-tight">
                  Partner with Fluno to elevate daily care
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Connect directly with our founding office to review physical samples, access audited sales sheets, or coordinate metropolitan stockist arrangements:
                </p>

                <div className="space-y-3 font-mono text-xs pt-2">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail size={14} className="text-[#EF543B]" />
                    <a href="mailto:pendkarsaivarun@gmail.com" className="hover:underline hover:text-white">
                      pendkarsaivarun@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone size={14} className="text-[#EF543B]" />
                    <div className="flex space-x-2">
                      <a href="tel:8309732876" className="hover:underline hover:text-white">8309732876</a>
                      <span className="text-gray-500">|</span>
                      <a href="tel:7995204742" className="hover:underline hover:text-white">7995204742</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-300">
                    <ExternalLink size={14} className="text-[#EF543B]" />
                    <a 
                      href="https://myfluno.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline hover:text-white"
                    >
                      myfluno.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4 mt-6">
                <span className="text-[10px] font-mono text-gray-450 uppercase tracking-widest block">
                  Official Business Office
                </span>
                <span className="text-[11px] font-mono mt-1 block font-semibold text-[#EF543B]">
                  PARVAR Enterprises Supply Network
                </span>
              </div>
            </div>

            {/* Right form and saved submissions lists */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest block font-bold text-[#EF543B]">
                  Save Partner & Advisor Interest:
                </span>

                {formSubmitted ? (
                  <div className="space-y-4 py-8 text-center rounded-xl bg-[#EF543B]/5 border border-[#EF543B]/10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto animate-bounce bg-[#EF543B]/15 text-[#EF543B]">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="text-xl font-serif font-bold">Inquiry Saved Successfully!</h4>
                    <p className={`text-xs max-w-sm mx-auto leading-relaxed ${t.mutedTextClass}`}>
                      Sai Varun and Dr. Sai Prasad have received your advisory response. Let's make care look beautiful!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                     
                     <div className="space-y-1">
                       <label className={`text-[10px] font-mono uppercase block ${t.mutedTextClass}`}>Inquirer Persona:</label>
                       <select 
                         value={reactionInterest}
                         onChange={(e) => setReactionInterest(e.target.value)}
                         className="w-full text-xs p-2.5 rounded border border-[#D2ECE0] bg-white text-inherit focus:outline-none focus:ring-1 focus:ring-[#EF543B] font-mono font-medium"
                       >
                         <option>Strategic Partner (Equity Interest)</option>
                         <option>Modern Trade Supermarket Buyer</option>
                         <option>Quick Commerce Hub Specialist</option>
                         <option>Distributor / Supplier Agency Representative</option>
                       </select>
                     </div>

                     <div className="space-y-1">
                       <label className={`text-[10px] font-mono uppercase block ${t.mutedTextClass}`}>Your Name / Organization:</label>
                       <input 
                         type="text"
                         required
                         placeholder="E.g., Sai Varun / Parvar Capital"
                         value={contactName}
                         onChange={(e) => setContactName(e.target.value)}
                         className="w-full text-xs p-2.5 rounded border border-[#D2ECE0] bg-white text-inherit focus:outline-none focus:ring-1 focus:ring-[#EF543B]"
                       />
                     </div>

                     <div className="space-y-1">
                       <label className={`text-[10px] font-mono uppercase block ${t.mutedTextClass}`}>Inquiry / Advisory Message:</label>
                       <textarea 
                         placeholder="Share your response or request details on stock schedules and samples..."
                         rows={3}
                         value={contactMessage}
                         onChange={(e) => setContactMessage(e.target.value)}
                         className="w-full text-xs p-2.5 rounded border border-[#D2ECE0] bg-white text-inherit focus:outline-none focus:ring-1 focus:ring-[#EF543B] resize-none"
                       />
                     </div>

                    <button 
                      type="submit"
                      className="w-full py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 pointer-events-auto cursor-pointer bg-[#EF543B] hover:bg-[#D43F26] text-white"
                    >
                      Save Advisory Note & Alert Founders →
                    </button>
                  </form>
                )}
              </div>

              {/* Saved submissions list */}
              <div className={`border-t ${t.borderClass} pt-4 mt-6`}>
                <span className={`text-[9px] font-mono uppercase block mb-2 ${t.mutedTextClass}`}>
                  SAVED INQUIRY LEDGER ({savedSubmissions.length})
                </span>
                <div className="max-h-[85px] overflow-y-auto space-y-2">
                  {savedSubmissions.length === 0 ? (
                    <p className="text-gray-400 italic text-[11px]">No inquiries recorded yet. Submit your note above!</p>
                  ) : (
                    savedSubmissions.map((sub) => (
                      <div key={sub.id} className="p-2 border border-[#D2ECE0] bg-white rounded flex justify-between items-center text-[10px]">
                        <span className="font-semibold truncate max-w-[210px]">{sub.name} - {sub.interest}</span>
                        <span className={`text-[9px] font-mono ${t.mutedTextClass}`}>{sub.timestamp}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#5EC595] bg-[#76D6A3] py-8 text-center text-xs text-[#183525] font-mono mt-12">
        <p>© {new Date().getFullYear()} FLUNO Cosmetics. Under licensing with PARVAR Enterprises. All Rights Reserved.</p>
      </footer>

    </div>
  );
}
