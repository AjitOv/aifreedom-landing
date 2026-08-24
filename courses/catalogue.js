/* ===================================================================
   Course catalogue — summary level only.

   The course player keeps the full lesson data; this holds just what a
   listing needs (name, price, lesson ids for progress) so the dashboard
   and the player agree on the same set of courses and prices without
   duplicating every lesson.
   =================================================================== */
window.AF_CATALOGUE = [
  {
    id: 'ai-basics',
    name: 'AI Basics — Zero to Hero',
    tagline: 'Learn AI from absolute zero. No coding needed.',
    icon: '🚀',
    price: '₹499',
    originalPrice: '₹1,999',
    pricePaise: 49900,
    lessonCount: 10,
    lessonIds: ['ab-01','ab-02','ab-03','ab-04','ab-05','ab-06','ab-07','ab-08','ab-09','ab-10'],
    salesUrl: '/courses/ai-basics',
    // The only course with the full written lesson text published so far.
    hasWrittenLessons: true,
  },
  {
    id: 'prompt-eng',
    name: 'AI Prompt Engineering — 10x Better Output',
    tagline: 'Get dramatically better results from any AI tool.',
    icon: '✨',
    price: '₹699',
    originalPrice: '₹1,750',
    pricePaise: 69900,
    lessonCount: 11,
    lessonIds: ['pe-01','pe-02','pe-03','pe-04','pe-05','pe-06','pe-07','pe-08','pe-09','pe-10','pe-11'],
    salesUrl: '/courses/ai-prompt-engineering',
  },
  {
    id: 'ai-freelancing',
    name: 'AI Freelancing Masterclass',
    tagline: 'The ₹50K/month freelancing blueprint.',
    icon: '💼',
    price: '₹1,499',
    originalPrice: '₹3,750',
    pricePaise: 149900,
    lessonCount: 10,
    lessonIds: ['af-01','af-02','af-03','af-04','af-05','af-06','af-07','af-08','af-09','af-10'],
    salesUrl: '/courses/ai-freelancing',
  },
  {
    id: 'earn-ai',
    name: 'AI Se Kamao — Earn Money with AI',
    tagline: 'Ten ways to turn AI skills into income.',
    icon: '💰',
    price: '₹2,999',
    originalPrice: '₹9,999',
    pricePaise: 299900,
    lessonCount: 10,
    lessonIds: ['ea-01','ea-02','ea-03','ea-04','ea-05','ea-06','ea-07','ea-08','ea-09','ea-10'],
    salesUrl: '/courses/ai-se-kamao',
  },
  {
    id: 'ai-trading',
    name: 'AI Trading Mastery',
    tagline: 'Use AI for charts, screening and risk.',
    icon: '📈',
    price: '₹2,999',
    originalPrice: '₹7,999',
    pricePaise: 299900,
    lessonCount: 10,
    lessonIds: ['at-01','at-02','at-03','at-04','at-05','at-06','at-07','at-08','at-09','at-10'],
    salesUrl: '/courses/ai-trading',
  },
];
