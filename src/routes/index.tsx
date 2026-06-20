import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  Heart, ShieldCheck, BadgeCheck, Lock, Sparkles, Users, Clock,
  ArrowRight, Play, Plus, Minus, Quote, ChevronDown, ChevronLeft, ChevronRight, Star,
  Stethoscope, Utensils, HandHeart, Calendar, MapPin, CheckCircle2, Home, IdCard, Soup,
  Facebook, Twitter, Instagram, MessageCircle,
} from "lucide-react";

import heroMeal from "@/assets/IMG-20260612-WA0011.jpg";
import heroSlide1 from "@/assets/IMG-20260612-WA0011.jpg";
import heroSlide2 from "@/assets/IMG-20260613-WA0007.jpg";
import heroSlide3 from "@/assets/IMG-20260613-WA0022.jpg";
import founder from "@/assets/founder-shivaanand.jpg";
import storyImg from "@/assets/IMG-20260613-WA0015.jpg";
import impactBanner from "@/assets/camp_6a290fff3380a.jpg";
import ctaFamilies from "@/assets/IMG-20260613-WA0007.jpg";

import kabuliChana from "@/assets/kabuli-chan.jpg";
import rajma from "@/assets/rajma.jpg";
import vegetables from "@/assets/vegetables.jpg";
import rice from "@/assets/rice.jpg";
import atta from "@/assets/atta.jpg";
import groceryKitNew from "@/assets/grocery-kit.jpg";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TSA Foundation — Feeding Families Fighting Cancer" },
      { name: "description", content: "Help us deliver nutritious meals and grocery kits to cancer patients and their families. Every donation brings dignity, nourishment and hope." },
      { property: "og:title", content: "TSA Foundation — Feeding Families Fighting Cancer" },
      { property: "og:description", content: "Help us deliver nutritious meals and grocery kits to cancer patients and their families." },
      { property: "og:image", content: heroMeal },
    ],
  }),
  component: Page,
});

const RAISED = 4_287_540;
const GOAL = 7_500_000;
const DONORS = 3_842;
const DAYS_LEFT = 23;

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function RazorpayPaymentButton({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const form = document.createElement("form");
    
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_T3pzQjOzwy60lv");
    script.async = true;

    form.appendChild(script);
    container.appendChild(form);
  }, []);

  return <div ref={containerRef} className={className} />;
}

function Page() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Nav />
      <Hero />
      <VideoSection />
      <Packages />
      <KnowNGO />
      <Story />
      <ImpactBanner />
      <Updates />
      <FAQ />
      <FinalCTA />
      <Footer />

      {showSticky && (
        <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 transition hover:scale-105 active:scale-95 animate-fade-in">
          <RazorpayPaymentButton />
        </div>
      )}
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center">
          <span className="font-display text-xl font-bold tracking-tight">TSA Foundation</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#packages" className="hover:text-foreground">Donate</a>
          <a href="#ngo" className="hover:text-foreground">Our NGO</a>
          <a href="#story" className="hover:text-foreground">Story</a>
          <a href="#updates" className="hover:text-foreground">Updates</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <RazorpayPaymentButton className="shrink-0" />
      </div>
    </header>
  );
}

/* ---------------- HERO (banner slider) ---------------- */
const HERO_SLIDES = [
  {
    image: heroSlide1,
    eyebrow: "Live fundraising campaign",
    title: "A warm meal is the first step in healing.",
    highlight: "healing",
    sub: "Stand with families fighting cancer outside Tata Memorial, KEM and HCG hospitals.",
  },
  {
    image: heroSlide2,
    eyebrow: "Family grocery kits",
    title: "30 days of essentials. One full month of dignity.",
    highlight: "dignity",
    sub: "Rice, atta, dal, oil and masalas — delivered to families staying near treatment centres.",
  },
  {
    image: heroSlide3,
    eyebrow: "Yodha Ghar community kitchens",
    title: "Cooked with love. Served without judgement.",
    highlight: "love",
    sub: "Over 1,000 lives impacted across our community kitchens since 2020.",
  },
];

function Hero() {
  const [slide, setSlide] = useState(0);
  const total = HERO_SLIDES.length;
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);
  const go = (n: number) => setSlide((n + total) % total);
  const current = HERO_SLIDES[slide];
  
  return (
    <section className="relative overflow-hidden bg-cream/35 py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        
        {/* LEFT COLUMN: Heading & Image Slider */}
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-3xl font-extrabold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            Help Shivaanand Feed 200+ Cancer Patients And Their Families
          </h1>
          
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)] border border-border/80 flex-1 min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] z-0">
            {/* Slides */}
            {HERO_SLIDES.map((s, i) => (
              <img
                key={i}
                src={s.image}
                alt={s.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${i === slide ? "opacity-100" : "opacity-0"}`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-0" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white z-10 pointer-events-none">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 animate-pulse-soft" /> {current.eyebrow}
              </div>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-2xl font-bold leading-tight sm:text-3xl">
                {current.title.split(current.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <em className="not-italic text-primary-glow underline decoration-primary-glow/60 decoration-2 underline-offset-2">{current.highlight}</em>
                    )}
                  </span>
                ))}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/85 sm:text-base">{current.sub}</p>
            </div>
            
            {/* Arrows */}
            <button
              aria-label="Previous slide"
              onClick={() => go(slide - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-black/35 hover:bg-black/55 text-white backdrop-blur transition hover:scale-105"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => go(slide + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-black/35 hover:bg-black/55 text-white backdrop-blur transition hover:scale-105"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Donation Card */}
        <div id="donate" className="lg:sticky lg:top-24 lg:self-start">
          <DonationCard />
        </div>

      </div>
    </section>
  );
}

function DonationCard() {
  const [raised, setRaised] = useState<number>(56746);
  const [donors, setDonors] = useState<number>(144);
  const [amount, setAmount] = useState<number>(3000);
  const presets = [3000, 5000, 7000, 9999, 14999];

  const goal = 1000000;
  const progressPct = Math.min(100, (raised / goal) * 100);

  const handleDonate = () => {
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid donation amount.");
      return;
    }
    setRaised(prev => prev + amount);
    setDonors(prev => prev + 1);
    toast.success(`Thank you! You successfully simulated a donation of ${inr(amount)} to TSA Foundation.`);
  };

  return (
    <div className="bg-card border border-border/80 rounded-[2rem] p-6 shadow-[var(--shadow-elegant)] space-y-6">
      
      {/* Top Pills */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center justify-center gap-2 rounded-full bg-[#6B46C1] py-2 px-4 text-xs font-bold text-white shadow-sm">
          <Heart className="h-4 w-4" fill="currentColor" /> Tax Benefit
        </div>
        <div className="flex items-center justify-center gap-2 rounded-full bg-[#ED8936] py-2 px-4 text-xs font-bold text-white shadow-sm">
          <Sparkles className="h-4 w-4" /> Updates
        </div>
      </div>

      {/* Progress & Info */}
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">RAISED SO FAR</div>
            <div className="text-2xl font-extrabold text-foreground mt-0.5">{inr(raised)}</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-extrabold text-[#6B46C1]">{donors}</div>
            <div className="text-[9px] uppercase tracking-wider font-bold text-[#6B46C1] leading-none">DONORS</div>
          </div>
        </div>

        {/* Progress Bar & Badges */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="inline-flex items-center rounded-full bg-[#6B46C1]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#6B46C1]">
              {progressPct.toFixed(1)}% Complete
            </span>
            <span className="text-muted-foreground font-medium">Goal {inr(goal)}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-[#ED8936] transition-[width] duration-1000 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="flex items-center gap-3 rounded-2xl bg-muted/30 border border-border/60 px-4 py-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-[#6B46C1] text-white font-extrabold text-lg shrink-0">
          ₹
        </div>
        <input
          type="number"
          value={amount || ""}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full bg-transparent text-xl font-bold text-foreground outline-none"
          placeholder="0"
        />
      </div>

      {/* Presets Grid */}
      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p}
            onClick={() => setAmount(p)}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
              amount === p
                ? "border-[#6B46C1] bg-[#6B46C1] text-white"
                : "border-border bg-card hover:border-[#6B46C1]/40"
            }`}
          >
            {p}
          </button>
        ))}
      </div>


      {/* Big CTA Buttons */}
      <div className="space-y-3 pt-2">
        <button 
          onClick={handleDonate}
          className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ED8936] hover:bg-[#DD6B20] py-4 text-base font-bold text-white shadow-[var(--shadow-elegant)] transition cursor-pointer"
        >
          {inr(amount || 0)} Donate Now (Simulate)
        </button>
        <RazorpayPaymentButton className="w-full flex justify-center pt-1" />
      </div>

      {/* Share Section */}
      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground border-t border-border/60 pt-4">
        <span className="font-semibold text-muted-foreground uppercase tracking-wider text-[10px]">Share</span>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/thesocialarchitectsmumbai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#1877F2] transition" aria-label="TSA Facebook Page">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/foodbanksion?igsh=MWs3bTExY3ZobTZrcQ==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#E1306C] transition" aria-label="TSA Instagram Page">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

    </div>
  );
}

/* ---------------- PACKAGES ---------------- */
const PACKAGES = [
  { name: "Kabuli Chana 5,KG", price: 550, donated: 12, goal: 500, progress: 2, image: kabuliChana },
  { name: "Grocery Kit", price: 990, donated: 9, goal: 1000, progress: 1, image: groceryKitNew },
  { name: "Rajma 5,KG", price: 550, donated: 7, goal: 500, progress: 1, image: rajma },
  { name: "vegetables", price: 550, donated: 12, goal: 2000, progress: 1, image: vegetables },
  { name: "Rice 20KG", price: 700, donated: 25, goal: 1000, progress: 3, image: rice },
  { name: "Atta 20Kg", price: 800, donated: 11, goal: 1000, progress: 1, image: atta },
];

function Packages() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const totalAmount = PACKAGES.reduce((sum, p) => sum + p.price * (quantities[p.name] ?? 0), 0);
  const totalQuantity = PACKAGES.reduce((sum, p) => sum + (quantities[p.name] ?? 0), 0);

  const updateQuantity = (name: string, val: number) => {
    setQuantities(prev => ({
      ...prev,
      [name]: Math.max(0, val),
    }));
  };

  const handlePackagesDonate = () => {
    triggerRazorpay();
  };

  return (
    <section id="packages" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Soft background flourishes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-success/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr] lg:gap-16">
          
          {/* LEFT SIDEBAR (Sticky) */}
          <div className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div>
              <SectionEyebrow>Choose your impact</SectionEyebrow>
              <SectionTitle>Pick the gift that matches your heart.</SectionTitle>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every package goes directly to a family staying near a treatment centre — fully tracked, fully transparent.
            </p>
            
            {totalQuantity > 0 ? (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 space-y-4 animate-fade-in shadow-[var(--shadow-soft)]">
                <div className="font-semibold text-xs text-primary uppercase tracking-wider">Your Donation Cart</div>
                <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                  {PACKAGES.map(p => {
                    const q = quantities[p.name] ?? 0;
                    if (q === 0) return null;
                    return (
                      <div key={p.name} className="flex justify-between text-sm items-center">
                        <span className="truncate mr-2 font-medium text-foreground">{p.name} <span className="text-xs text-muted-foreground">(x{q})</span></span>
                        <span className="font-semibold shrink-0">{inr(p.price * q)}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-primary/10 pt-3 flex justify-between font-bold text-base">
                  <span>Total Amount</span>
                  <span className="text-primary">{inr(totalAmount)}</span>
                </div>
                <RazorpayPaymentButton className="w-full flex justify-center pt-2" />
              </div>
            ) : (
              <div className="inline-flex items-center gap-2.5 rounded-2xl border border-success/30 bg-success/5 px-4 py-3.5 text-sm font-semibold text-success shadow-sm">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <span>100% of your donation reaches patient families directly</span>
              </div>
            )}
          </div>

          {/* RIGHT GRID OF PACKAGES */}
          <div className="grid gap-6 sm:grid-cols-2">
            {PACKAGES.map((p) => (
              <PackageCard 
                key={p.name} 
                p={p} 
                qty={quantities[p.name] ?? 0}
                onChange={(qty) => updateQuantity(p.name, qty)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

interface PackageCardProps {
  p: typeof PACKAGES[number];
  qty: number;
  onChange: (qty: number) => void;
}

function PackageCard({ p, qty, onChange }: PackageCardProps) {
  return (
    <article className="group relative flex items-center gap-4 overflow-hidden rounded-[1.5rem] border border-border bg-card p-4 transition hover:shadow-[var(--shadow-elegant)] hover:border-primary/30">
      
      {/* Product Image */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-2xl border border-border/40 bg-white p-1.5 flex items-center justify-center">
        <img src={p.image} alt={p.name} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" loading="lazy" />
      </div>

      {/* Product Info & Controls */}
      <div className="flex-1 min-w-0 space-y-1.5">
        <h3 className="font-display text-base font-bold text-foreground truncate">{p.name}</h3>
        
        {/* Donation Goal Progress */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span>{p.donated} / {p.goal} Donated</span>
            <span className="font-bold text-primary">{p.progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-[var(--gradient-primary)] transition-[width] duration-500" style={{ width: `${p.progress}%` }} />
          </div>
        </div>

        {/* Bottom Row: Price & Quantity */}
        <div className="flex items-end justify-between pt-1">
          <div>
            <div className="text-[9px] uppercase tracking-wider font-semibold text-muted-foreground leading-none">PRICE</div>
            <div className="text-lg font-extrabold text-foreground mt-0.5">{inr(p.price)}</div>
          </div>

          {/* Counter Widget */}
          <div className="flex items-center rounded-xl border border-border/80 bg-background overflow-hidden shadow-sm shrink-0">
            <button 
              onClick={() => onChange(qty - 1)} 
              className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground font-bold hover:bg-muted/30 transition text-sm"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <div className="w-8 text-center font-bold text-foreground text-xs border-x border-border/80 py-0.5 bg-muted/10">
              {qty}
            </div>
            <button 
              onClick={() => onChange(qty + 1)} 
              className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground font-bold hover:bg-muted/30 transition text-sm"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

    </article>
  );
}

/* ---------------- NGO ---------------- */
function KnowNGO() {
  const stats = [
    { v: "1,000+", l: "Lives impacted", icon: Heart },
    { v: "200+", l: "Beneficiaries", icon: Users },
    { v: "7", l: "Years of service", icon: Calendar },
    { v: "100%", l: "Fund transparency", icon: ShieldCheck },
  ];
  const initiatives = [
    { icon: Soup, t: "Food Drive", d: "Sustained meal support for 300–400 people during the pandemic and beyond." },
    { icon: IdCard, t: "Aadhar Card Campaign", d: "Helped 200–300 mental hospital patients access government welfare schemes." },
    { icon: Home, t: "Yodha Ghar", d: "Affordable, dignified accommodation for cancer patients travelling for treatment." },
    { icon: Utensils, t: "Cancer Family Kitchens", d: "Today, feeding families fighting cancer — one warm plate at a time." },
  ];
  return (
    <section id="ngo" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow center>Know Your NGO</SectionEyebrow>
          <SectionTitle>The Social Awakening — a movement born in lockdown.</SectionTitle>
        </div>

        {/* Stat grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] flex flex-col items-center text-center">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary mb-3"><s.icon className="h-5 w-5" /></div>
              <div className="mt-1 font-display text-3xl font-bold text-foreground">{s.v}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>

        {/* NGO Info + Founder split layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: NGO History Story */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-xl leading-relaxed text-foreground/90">
              Founded by <span className="font-semibold text-foreground">7 MSW graduates</span> from Mumbai University during COVID-19, TSA has run multiple initiatives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We started with a food drive supporting 300–400 people, an Aadhar card campaign helping 200–300 mental hospital patients access government schemes, and established <span className="font-semibold text-foreground font-display text-primary not-italic">Yodha Ghar</span> — affordable accommodation for cancer patients. Today, our focus is feeding families fighting cancer.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 text-xs pt-2">
              {["12A Registered", "80G Certified", "FCRA Compliant", "GuideStar India", "Annual Audit Public"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-success" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Founder Glass Identity Card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[2rem] border border-border/80 bg-card/60 p-8 shadow-[var(--shadow-elegant)] backdrop-blur-sm relative overflow-hidden">
              {/* Background gradient flourish */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/15 blur-2xl" />
              
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">NGO Leadership</div>
              <div className="mt-2 font-display text-3xl font-bold text-foreground">Shivaanand Dhuriya</div>
              <div className="mt-1 text-sm font-medium text-primary">Founder, The Social Awakening (TSA)</div>
              
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Shivaanand leads a team of dedicated social work professionals, driving on-the-ground food security and social welfare initiatives across Mumbai, Pune, and Bengaluru.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <BadgeCheck className="h-3.5 w-3.5" /> Verified Profile
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                  <ShieldCheck className="h-3.5 w-3.5" /> 100% Fund Transparency
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Initiatives cards - grid layout below */}
        <div className="mt-16 space-y-6">
          <h3 className="text-center font-display text-2xl font-bold tracking-tight text-foreground">Key Historical Initiatives</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {initiatives.map((i) => (
              <div key={i.t} className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]">
                <div>
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-warm)] text-primary mb-4"><i.icon className="h-5 w-5" /></div>
                  <h4 className="font-bold text-lg text-foreground">{i.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
function Story() {
  return (
    <section id="story" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionEyebrow>The story</SectionEyebrow>
        <SectionTitle>When treatment begins, the kitchen at home grows cold.</SectionTitle>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-elegant)]">
              <img src={storyImg} alt="Family receiving a meal box" className="h-[640px] w-full object-cover" loading="lazy" width={1100} height={1300} />
            </div>
            <div className="glass-card absolute bottom-6 left-6 right-6 rounded-2xl p-5">
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-2 font-display text-lg italic leading-snug">
                "We sold our jewellery for her chemo. The meals you sent meant our other children didn't go hungry."
              </p>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">— Rashida, mother of a 9-year-old patient</div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-foreground/90">
              For a family hearing the word <em className="font-display text-primary not-italic">cancer</em>, the next months become a brutal arithmetic of medicine, transport, and food. Treatment often costs more than what they earn in a year.
            </p>
            <p className="text-lg text-muted-foreground">
              Most families travel from villages to big-city hospitals and live in shelters or footpaths near the wards. With every rupee going toward chemotherapy and radiation, hot meals become a luxury they cannot afford.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { v: "73%", t: "of patient families skip meals during treatment" },
                { v: "₹14L", t: "average cost of cancer treatment in India" },
                { v: "1 in 3", t: "families lose their primary earner mid-treatment" },
                { v: "60+ km", t: "average travel for chemotherapy access" },
              ].map((s) => (
                <div key={s.t} className="rounded-2xl border border-border bg-card p-5">
                  <div className="font-display text-3xl font-bold text-primary">{s.v}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.t}</div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-foreground p-8 text-background sm:p-10">
              <Quote className="h-8 w-8 text-primary-glow" />
              <p className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
                "Nutrition is not separate from medicine. It is the dignity that lets a body fight, and a family hope."
              </p>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-background/70">— Dr. Kavita Rao, Oncologist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VIDEO ---------------- */
function VideoSection() {
  const [playing, setPlaying] = useState(true);
  return (
    <section className="py-20 sm:py-28 bg-cream/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow center>Watch</SectionEyebrow>
          <h2 className="text-balance mt-3 text-4xl font-bold sm:text-5xl">See the difference your support creates.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every meal we deliver lets a family focus on recovery instead of survival. Hear it directly from the people whose lives have been changed.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-10">
          <div className="group relative aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-elegant)] border border-border bg-black">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/YzP6C_Xjg4c?autoplay=1&mute=1"
                title="Campaign video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full">
                <img src={heroSlide3} alt="Watch the campaign film" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-white/50 animate-ping-soft" />
                    <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-primary shadow-[var(--shadow-elegant)] transition group-hover:scale-110">
                      <Play className="h-7 w-7" fill="currentColor" />
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-left text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-80">2 min film</div>
                  <div className="font-display text-2xl font-bold">TSA Foundation — In their words</div>
                </div>
              </button>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Utensils, t: "1,200+ meals daily", d: "Across three community kitchens" },
              { icon: Stethoscope, t: "Hospital-partnered", d: "Tata Memorial, HCG, KEM" },
              { icon: HandHeart, t: "100% to families", d: "Operations funded separately" },
            ].map((b) => (
              <div key={b.t} className="flex flex-col items-center text-center p-6 rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] hover:border-primary/40 hover:-translate-y-0.5 transition duration-300">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4"><b.icon className="h-5 w-5" /></div>
                <div className="font-semibold text-base">{b.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- IMPACT BANNER ---------------- */
function ImpactBanner() {
  return (
    <section className="relative overflow-hidden">
      <img src={impactBanner} alt="Volunteers distributing meals at sunset" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Your impact
          </div>
          <h2 className="text-balance mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            One meal changes everything.
          </h2>
          <p className="mt-5 text-xl text-white/85">
            Your support brings hope to families fighting cancer — one warm plate, one full grocery kit, one good morning at a time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <RazorpayPaymentButton className="inline-flex items-center" />
            <a href="#story" className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 underline-offset-4 hover:underline">
              Read their stories <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- UPDATES ---------------- */
const UPDATES = [
  { name: "Priya S.", amt: 2500, time: "2 min ago", msg: "For my mother who fought it bravely.", verified: true },
  { name: "Anonymous", amt: 500, time: "8 min ago", msg: "Every plate matters. Sending love." },
  { name: "Rohan Mehta", amt: 10000, time: "22 min ago", msg: "Sponsored 4 grocery kits this month.", verified: true },
  { name: "The Kapoor Family", amt: 5000, time: "1 hr ago", msg: "In memory of our beloved Naani." },
  { name: "Aisha K.", amt: 1000, time: "2 hrs ago", msg: "Hoping this small gift brings comfort." },
  { name: "Vikram T.", amt: 7500, time: "3 hrs ago", msg: "Recurring monthly donor — keep going!", verified: true },
];
const MILESTONES = [
  { icon: Users, t: "3,800+ donors joined", d: "Crossed a community milestone this week." },
  { icon: Utensils, t: "50,000 meals delivered", d: "In partnership with three city hospitals." },
  { icon: Calendar, t: "23 days left", d: "Help us close the gap to ₹75L." },
];

function Updates() {
  return (
    <section id="updates" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Live updates</SectionEyebrow>
            <SectionTitle>A community showing up, every hour.</SectionTitle>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-success/50 animate-ping-soft" /><span className="relative inline-flex h-2 w-2 rounded-full bg-success" /></span>
            {DONORS.toLocaleString("en-IN")} donors and counting
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            {UPDATES.map((u, i) => (
              <div key={i} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--gradient-warm)] font-display text-lg font-bold text-primary">
                  {u.name[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="truncate font-semibold">{u.name}</span>
                        {u.verified && <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary"><BadgeCheck className="h-3 w-3" /> Verified</span>}
                      </div>
                      <div className="text-xs text-muted-foreground"><Clock className="mr-1 inline h-3 w-3" />{u.time}</div>
                    </div>
                    <div className="shrink-0 font-display text-lg font-bold text-primary">{inr(u.amt)}</div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">"{u.msg}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {MILESTONES.map((m) => (
              <div key={m.t} className="rounded-2xl border border-border bg-[var(--gradient-warm)] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/70 text-primary"><m.icon className="h-5 w-5" /></div>
                  <div className="font-display text-lg font-bold">{m.t}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
              </div>
            ))}
            <RazorpayPaymentButton className="w-full flex justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "How is my donation actually used?", a: "100% of your contribution funds groceries, cooking, packaging and last-mile delivery of meals. Operational and admin costs are funded separately by founding partners, audited annually." },
  { q: "Is this campaign verified and transparent?", a: "Yes. TSA Foundation is a registered 12A & 80G NGO (Reg. MH/2020/00482). Monthly impact reports and yearly audits are published openly on our website." },
  { q: "Will I receive a tax-deduction receipt?", a: "Every donation above ₹500 receives an 80G receipt by email within 48 hours. You can claim deductions while filing returns in India." },
  { q: "Are donations secure?", a: "Payments are processed via PCI-DSS certified gateways with 256-bit SSL encryption. Your card or UPI details never touch our servers." },
  { q: "Can I volunteer in person?", a: "Absolutely. We welcome volunteers across Mumbai, Pune and Bengaluru — for cooking, packing, delivery and hospital visits. Sign up via the volunteer form on our site." },
  { q: "Can I sponsor meals every month?", a: "Yes — you can set up a monthly recurring donation for as little as ₹500. You'll get a personalised impact dashboard showing the families you've supported." },
];

function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <SectionEyebrow>Questions</SectionEyebrow>
          <SectionTitle>Everything you want to know before giving.</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Transparency is non-negotiable. If you don't see your question, write to us at <a className="font-semibold text-primary underline-offset-4 hover:underline" href="mailto:hello@tsafoundations.com">hello@tsafoundations.com</a>.
          </p>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`overflow-hidden rounded-2xl border bg-card transition ${isOpen ? "border-primary/40 shadow-[var(--shadow-soft)]" : "border-border"}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left">
                  <span className="min-w-0 font-display text-lg font-semibold">{f.q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground transition ${isOpen ? "rotate-180 bg-primary text-primary-foreground" : ""}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background shadow-[var(--shadow-elegant)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[360px]">
              <img src={ctaFamilies} alt="Families receiving support" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1600} height={1100} />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-foreground" />
            </div>
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                <Heart className="h-3.5 w-3.5" fill="currentColor" /> One last ask
              </div>
              <h2 className="text-balance mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
                One meal can change someone's day. Your donation can change their journey.
              </h2>
              <p className="mt-4 text-lg text-background/80">
                Tonight, a mother will sit beside her child's hospital bed. Whether she eats — and whether she has the strength to keep showing up — depends on people like you.
              </p>
              <div className="mt-8">
                <RazorpayPaymentButton className="inline-flex items-center" />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-background/15 pt-6">
                {[
                  { v: "1.4M", l: "Meals served" },
                  { v: "8,200", l: "Families helped" },
                  { v: "100%", l: "To beneficiaries" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl font-bold">{s.v}</div>
                    <div className="text-xs uppercase tracking-wider text-background/60">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-background/70">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Verified Campaign</span>
                <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-3.5 w-3.5" /> 80G Tax Benefits</span>
                <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Secure Donations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-cream py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center">
            <span className="font-display text-xl font-bold">TSA Foundation</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A registered Indian non-profit serving nutritious meals to cancer patients and families across Mumbai, Pune and Bengaluru.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> Andheri (E), Mumbai · India</div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://www.instagram.com/foodbanksion?igsh=MWs3bTExY3ZobTZrcQ==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/45 transition shadow-sm">
              <Instagram className="h-3.5 w-3.5 text-primary" /> Instagram
            </a>
            <a href="https://www.facebook.com/thesocialarchitectsmumbai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/45 transition shadow-sm">
              <Facebook className="h-3.5 w-3.5 text-primary" /> Facebook
            </a>
          </div>
        </div>
        {[
          { t: "Campaign", l: ["Donate", "Packages", "Stories", "Updates"] },
          { t: "Organisation", l: ["About", "Founder", "Reports", "Volunteer"] },
          { t: "Legal", l: ["12A & 80G", "Privacy", "Terms", "Contact"] },
        ].map((c) => (
          <div key={c.t}>
            <div className="font-display text-sm font-bold uppercase tracking-wider">{c.t}</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.l.map((i) => <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-border px-5 pt-6 text-xs text-muted-foreground">
        <div>© 2026 TSA Foundation. All rights reserved.</div>
        <div className="inline-flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-success" /> Verified NGO</span>
          <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-success" /> SSL Secure</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function SectionEyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary ${center ? "mx-auto" : ""}`}>
      <span className="h-1 w-1 rounded-full bg-primary" /> {children}
    </div>
  );
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-balance mt-4 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl">{children}</h2>;
}
