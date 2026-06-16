export interface SlideContent {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
}

export interface OperatorInsight {
  slideId: number;
  topic: string;
  operatorQuote: string;
  hardMetrics: string[];
}

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    tag: "Welcome to Fluno",
    title: "Care in Every Drop",
    subtitle: "Re-engineering skincare & daily hygiene for the next generation. Premium formulations, honest pricing, and habit-forming brand equity."
  },
  {
    id: 2,
    tag: "The Market Gap",
    title: "The Outdated Polarization",
    subtitle: "Today's consumer is stuck between cheap chemist brands that use questionable mass-fillers, and luxury skincare that is too expensive for daily habit routines."
  },
  {
    id: 3,
    tag: "Our Solution",
    title: "The Mid-Premium Vacuum",
    subtitle: "Fluno introduces skin-first daily essentials. Beautiful, eco-conscious packaging, dermatologically clean non-toxic ingredients, and accessible daily-use pricing."
  },
  {
    id: 4,
    tag: "The Pipeline",
    title: "Product Portfolio",
    subtitle: "Our formulations are designed around high-turnover daily habits. Low-churn, subscription-friendly, and high-margin."
  },
  {
    id: 5,
    tag: "Strategic Position",
    title: "We Sit in the Empty Sweet Spot",
    subtitle: "Mass hygiene operates on razor-thin margins and generic formulas. Luxury operates on low volume. Fluno dominates the high-volume, high-trust mid-premium tier."
  },
  {
    id: 6,
    tag: "Interactive Simulator",
    title: "Investor Capital Planner",
    subtitle: "Simulate cash allocation across core operational engines. Watch how direct scale leverages quick commerce velocity and compounding margins."
  },
  {
    id: 7,
    tag: "Scale Strategy",
    title: "Omnichannel Growth & GTM",
    subtitle: "A digital-first launch targeting tier-1 metropolitan density, shifting quickly to high-density retail partnerships of premium hypermarkets."
  },
  {
    id: 8,
    tag: "The Pipeline Metrics",
    title: "Roadmap to ₹100 Cr+ Run Rate",
    subtitle: "A multi-phase launch designed for robust unit economics, active chemical stability milestones, and compounding retention."
  },
  {
    id: 9,
    tag: "The Brains",
    title: "Operational Leadership",
    subtitle: "Backed by passionate founders and seasoned supply-chain veterans who understand scaling compounding formulations from lab to household."
  },
  {
    id: 10,
    tag: "The Capital Ask",
    title: "Join the Fluno Journey",
    subtitle: "We are raising capital to accelerate inventory compounding, scale new product SKUs, and acquire prime digital shelf space."
  }
];

export const OPERATOR_INSIGHTS: Record<number, OperatorInsight> = {
  1: {
    slideId: 1,
    topic: "Introduction & Mandate",
    operatorQuote: "Look, I've spent 10 years in the personal care trenches scaling consumer logistics. Let me tell you: consumers aren't looking for more 'beauty marketing.' They want skin confidence and daily hygiene they can trust without needing a luxury loan. Fluno isn't a speculative play; it's a structural upgrade to the Indian bathroom rack.",
    hardMetrics: ["₹30,000 Cr+ Addressable India Hygiene Market", "12% Industry CAGR through 2030", "94% Customer Churn in generic fragrance-led brands"]
  },
  2: {
    slideId: 2,
    topic: "Market Friction & Pain Points",
    operatorQuote: "The mass shelf is a race to the bottom. Big-box brands load handwashes and soaps with harsh cheap surfactants (SLS) to force high foam and cut chemical costs. Then expensive brands markup raw extracts by 1500%. That leaves the middle class entirely stranded with no safe daily habit brand.",
    hardMetrics: ["SKU Fatigue: Avg. consumer sees 42 identical cheap options", "Dermal Sensitivity: 68% increase in soap-induced dry skin cases", "Price Barrier: Premium brands cost up to 8x the mass base"]
  },
  3: {
    slideId: 3,
    topic: "The Fluno Disruption",
    operatorQuote: "Our solution isn't just chemical; it's operational. We utilize clean, botanical active ingredients but put them in highly efficient refilling pouches. This reduces our packaging freight costs by 42% and allows us to pump that saved capital directly into premium ingredients, offering luxury grade formulas at a fraction of the price.",
    hardMetrics: ["Refillable design cuts transport footprint by 35%", "Skin pH-balanced formulas at ₹250 price points", "65% projected organic subscription refill rate"]
  },
  4: {
    slideId: 4,
    topic: "In-Depth Product Specs",
    operatorQuote: "Our current heroes are engineered for instant traction. The Hand Wash Pouch uses biodegradable surfactants for dynamic lather without drying hands. Our SPF 50 Broad-Spectrum Sunscreen leaves absolute zero white cast, resolving the biggest complaint in Indian skincare. We're launching refill packs next to lock in high-frequency cohorts.",
    hardMetrics: ["Hand Wash: Zero parabens, ₹199 per 300ml pouch", "Sunscreen: Broad-spectrum PA+++, non-comedogenic", "Pipeline SKUs: Dry skin botanical cleanser & barrier repairs"]
  },
  5: {
    slideId: 5,
    topic: "Defensible Moats & Position",
    operatorQuote: "Generic mass players cannot easily transition to this model—their distribution networks are bloated with high distributor cuts (up to 45%). By maintaining direct-to-consumer relationships and partnering with modern instant commerce hubs (Blinkit, Instamart, Zepto), we retain heavy margins with lightning-fast inventory turn times.",
    hardMetrics: ["62% Gross Margin on mid-premium price spectrum", "18-day average fulfillment center turnaround", "Distributor markup eliminated by 60% compared to traditional retail"]
  },
  6: {
    slideId: 6,
    topic: "Interactive Cash Allocation Model",
    operatorQuote: "Play with the controller on the left. In most cosmetics startups, founders blow 70% of capital on celebrity endorsements that have zero retention value. Fluno prioritizes compounding inventory health. For every rupee in inventory, we generate ₹2.8 in customer-contributed equity within 90 days. This is how we scale without burning.",
    hardMetrics: ["Target CAC: ₹280 vs Premium Avg. ₹650", "Calculated LTV: ₹1,550 over first 12 months", "CAC-to-LTV payback occurring by Month 4 of purchase cycle"]
  },
  7: {
    slideId: 7,
    topic: "Go-To-Market Execution",
    operatorQuote: "Phase 1 is about absolute local velocity. We establish hyper-local supply rings in Tier-1 cities to serve instant-delivery hubs inside 10 minutes. Phase 2 transitions to premium physical experience stores and pharmacy counter displays. This drives high offline trust which then fuels our digital subscription loops.",
    hardMetrics: ["10-Min In-Door Delivery coverage via Quick Commerce alignment", "40% organic monthly search volume increases", "Subscription loyalty locks in 55% of continuous annual revenue"]
  },
  8: {
    slideId: 8,
    topic: "Scale Milestones to ₹100Cr+",
    operatorQuote: "We don't inflate numbers. We tie every revenue trigger directly to operational capacity. Launching sunscreen in Year 1 drives our Average Order Value up by 65%. Year 2 refill subscriptions level out standard cash flows, while Year 3 retail expansion pushes broad brand authority, establishing Fluno as a household word.",
    hardMetrics: ["Year 1: ₹5.5 Cr Target (Core Quick Commerce focus)", "Year 2: ₹24 Cr (Refill Launch + Tier-2 Metro expansion)", "Year 3: ₹100 Cr+ (Omnichannel integration & international trial)"]
  },
  9: {
    slideId: 9,
    topic: "Founders & Board Dynamics",
    operatorQuote: "I've worked with dozens of entrepreneurs, and what sets Sai Varun and Dr. Sai Prasad apart is execution discipline. Dr. Sai Prasad brings heavy clinical backing, ensuring formulations aren't just market-speak but certified dermal solutions. Sai Varun runs a tight digital ship. Combined with our logistics crew, we represent raw executing muscle.",
    hardMetrics: ["Clinical formulation verification under Dr. Sai Prasad", "Logistics team brings collectively over 25 years of distribution expertise", "100% in-house regulatory clearances secured"]
  },
  10: {
    slideId: 10,
    topic: "Use of Funds Playbook",
    operatorQuote: "This round of capital isn't for burn; it's a compounding engine. We've optimized raw manufacturing so that 50% of the ask directly purchases raw materials to fulfill guaranteed quick-commerce purchase orders. We scale our SKUs aggressively and secure our position. Let's build the future of daily care together.",
    hardMetrics: ["50% Inventory and Procurement Scale", "25% R&D and 5 new SKU Formulations", "25% High-ROAS performance acquisition & local branding"]
  }
};

export interface PainComparison {
  ingredient: string;
  massBrandIssue: string;
  flunoAlternative: string;
  category: "surfactant" | "preservative" | "moisture" | "scent";
}

export const PAIN_COMPARISONS: PainComparison[] = [
  {
    ingredient: "Sodium Laureth Sulfate (SLES)",
    massBrandIssue: "Cheap foaming agent that strips skin lipids, causing long-term micro-tears & chronic dry skin.",
    flunoAlternative: "Sodium Cocoyl Isethionate (from coconut fatty acids) which cleanses gently while retaining skin oils.",
    category: "surfactant"
  },
  {
    ingredient: "Methylisothiazolinone (MI)",
    massBrandIssue: "Harsh mass preservative linked to hand eczema, dermal flare-ups, and skin allergies.",
    flunoAlternative: "Natural plant-derived Potassium Sorbate & food-grade citric acid. Clean, reliable, and non-allergenic.",
    category: "preservative"
  },
  {
    ingredient: "Synthetic Fragrance Overload",
    massBrandIssue: "Industrial-grade synthetic perfumes used to cover bad chemical odors, causing allergic reactions.",
    flunoAlternative: "Tsubaki flower and delicate botanical extracts. Therapeutic, organic, with skin-nourishing antioxidants.",
    category: "scent"
  },
  {
    ingredient: "Synthetic Petroleums / Silicones",
    massBrandIssue: "Cheap thickeners that block pores and simulate temporary smoothness while trapping bacteria.",
    flunoAlternative: "Hyaluronic leaf acid & plant glycerin. Naturally draws moisture deep into epidermal tissue without clogging.",
    category: "moisture"
  }
];
