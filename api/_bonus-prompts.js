/* ===================================================================
   BONUS 1 — 100 ChatGPT Prompt Templates.  SERVER SIDE ONLY.

   The "_" prefix keeps Vercel from routing this file, so the pack is
   never a public download. /api/bonuses hands it over only to a caller
   holding a valid access token — otherwise it would be the same as the
   free 50-prompt lead magnet and worth nothing as a paid bonus.

   Square brackets are placeholders the student fills in.
   =================================================================== */

const PROMPT_PACK = [
  {
    category: 'Work & Email',
    icon: '💼',
    prompts: [
      { t: 'Reply to a difficult email', p: 'Here is an email I received: [paste]. Write a reply that stays professional, addresses every point raised, and protects my position without sounding defensive. Keep it under 150 words.' },
      { t: 'Shorten a long email', p: 'Rewrite this email so it is half the length but loses nothing important: [paste]. Put the ask in the first line.' },
      { t: 'Chase a late payment', p: 'Write a polite but firm follow-up to a client who is [X] days late on an invoice of [amount]. This is reminder number [N]. Keep the relationship intact but make the deadline clear.' },
      { t: 'Say no without burning a bridge', p: 'I need to decline [request] from [who]. Write a short reply that says no clearly, gives one honest reason, and offers one alternative.' },
      { t: 'Summarise a long thread', p: 'Summarise this email thread into: 1) what was decided, 2) what is still open, 3) what I specifically need to do next. Thread: [paste].' },
      { t: 'Meeting notes to action items', p: 'Turn these rough meeting notes into a clean list of action items with owner and deadline for each. Flag anything where the owner was never agreed. Notes: [paste].' },
      { t: 'Ask for a raise', p: 'I have worked at [company] as [role] for [duration]. My achievements: [list]. Write a short, confident note requesting a salary review, built on results rather than need.' },
      { t: 'Explain a delay to a client', p: 'I need to tell [client] that [deliverable] will be [X] days late because [reason]. Write it so it takes responsibility, gives a firm new date, and offers something to make up for it.' },
      { t: 'Write a job description', p: 'Write a job description for a [role] at my [business type] in [city]. Include responsibilities, must-have skills, nice-to-haves and salary range [range]. Plain language, no corporate jargon.' },
      { t: 'Prepare for a difficult conversation', p: 'I need to talk to [who] about [issue]. Give me: 1) how to open, 2) three things they will likely say and how to respond, 3) what a good outcome looks like.' },
    ],
  },
  {
    category: 'Content & Social Media',
    icon: '📱',
    prompts: [
      { t: 'Instagram captions in bulk', p: 'I run [business] in [city]. Write 7 Instagram captions for [topic]. Each two lines, one emoji, one call to action, written for [audience]. Vary the opening line every time.' },
      { t: 'Content calendar for a month', p: 'Build a 30-day content calendar for my [business]. Mix: 40% educational, 30% proof/results, 20% behind-the-scenes, 10% offers. Give date, format (reel/carousel/post) and hook for each. Table format.' },
      { t: 'Turn one idea into ten posts', p: 'Take this one idea: [idea]. Turn it into 10 different posts — each with a different angle, format and hook, but the same core message.' },
      { t: 'LinkedIn post that does not cringe', p: 'Write a LinkedIn post about [topic//result]. No "I am humbled", no fake vulnerability, no one-line-per-paragraph gimmick. Make one clear point with one real example.' },
      { t: 'Carousel outline', p: 'Create a 8-slide Instagram carousel on [topic]. Slide 1 is the hook, slides 2-7 are one point each with max 15 words, slide 8 is the call to action.' },
      { t: 'Rewrite for a different audience', p: 'Rewrite this post for [new audience] instead of [original audience]. Keep the message, change the examples and vocabulary: [paste].' },
      { t: 'Comment replies at scale', p: 'Here are comments on my post: [paste]. Write a short, warm, non-repetitive reply to each. Flag any that are complaints needing a real response from me.' },
      { t: 'Hashtag sets', p: 'Give me 3 hashtag sets for a post about [topic] targeting [city/audience] in India: one broad-reach set, one niche set, one local set. 8 tags each.' },
      { t: 'Repurpose a blog into social', p: 'Take this blog post and turn it into: 1 LinkedIn post, 3 tweets, 1 reel script, 1 carousel outline. Blog: [paste].' },
      { t: 'Find your content angles', p: 'I am a [role] serving [audience]. List 20 content topics I could own — things my audience actually searches for or worries about. Rank by how easy each is for me to make.' },
    ],
  },
  {
    category: 'Sales & Clients',
    icon: '🤝',
    prompts: [
      { t: 'Cold DM that gets a reply', p: 'I sell [service] to [type of business] in [city]. Write a WhatsApp/DM pitch: max 5 lines, opens with their problem, offers one small free sample, ends with a clear next step. Not sales-y. Give 3 versions.' },
      { t: 'Handle the price objection', p: 'A prospect said "[objection]" about my [service] priced at [amount]. Write three different responses: one that reframes value, one that offers a smaller first step, one that walks away gracefully.' },
      { t: 'Proposal in one page', p: 'Write a one-page proposal for [client] for [scope]. Include: their problem, what I will deliver, timeline, price [amount], and what is NOT included. Plain English.' },
      { t: 'Follow-up sequence', p: 'Write a 4-message follow-up sequence for a prospect who went quiet after [stage]. Message 1 at day 3, 2 at day 7, 3 at day 14, 4 at day 30. Each shorter than the last. Never guilt-trip.' },
      { t: 'Discovery call questions', p: 'I am about to talk to a potential [client type] about [service]. Give me 12 questions that uncover their real problem, budget and urgency — without sounding like an interrogation.' },
      { t: 'Turn a testimonial into copy', p: 'Here is a client message: [paste]. Turn it into: 1) a short testimonial quote, 2) a case-study paragraph, 3) a social post. Do not exaggerate anything they did not say.' },
      { t: 'Price your service', p: 'I offer [service] in [city], it takes me [hours] and my target monthly income is [amount]. Suggest three pricing tiers with what each includes, and tell me which to lead with.' },
      { t: 'Win back an old client', p: 'Write a message to a client I last worked with [time] ago on [project]. Reference the past work, share one new thing I can now do, and make a low-pressure offer.' },
      { t: 'Scope creep script', p: 'A client keeps adding to [project] beyond what we agreed. Write a message that holds the line, restates the original scope, and offers the extra work as a paid add-on.' },
      { t: 'Onboarding checklist', p: 'Create a client onboarding checklist for my [service] business — everything from signed agreement to first deliverable. Include what I need from them and by when.' },
    ],
  },
  {
    category: 'Study & Learning',
    icon: '🎓',
    prompts: [
      { t: 'The Feynman tutor', p: 'You are my tutor. Topic: [topic]. My level: [class/course]. 1) Explain it as if I am 12 using an Indian everyday example. 2) Explain it technically. 3) Ask me 3 questions to check understanding. Do not hand me the answer — make me work it out.' },
      { t: 'Notes photo to study material', p: 'This is a photo of my class notes. Produce: 1) clean typed notes with headings, 2) a 10-bullet summary, 3) 5 likely exam questions, 4) 5 flashcards. Mark anything unclear rather than guessing.' },
      { t: 'Strict examiner', p: 'Question: [question]. My answer: [answer]. Act as a strict [board/university] examiner: award marks out of [total], show point-by-point where marks were lost, then write a full-marks model answer.' },
      { t: 'Study plan that fits my life', p: 'Exam on [date]. Syllabus: [paste]. I can study [X] hours a day. Weak topics: [list]. Build a realistic day-by-day plan with revision and practice tests. Do not overload it.' },
      { t: 'Mnemonics for anything', p: 'Help me memorise [list/sequence]. Give me 3 different mnemonics and tell me which is easiest to recall under exam pressure.' },
      { t: 'Explain a research paper', p: 'Summarise this paper for someone at [level]: what question it asks, what it did, what it found, and what its weaknesses are. Paper: [paste/link].' },
      { t: 'Practice questions on demand', p: 'Generate 10 practice questions on [topic] at [difficulty] level. Give the questions first. Only give answers when I ask.' },
      { t: 'One-page revision sheet', p: 'Make a one-page revision sheet for [chapter/topic]: key definitions, formulas, common traps, and the 5 things most likely to be examined.' },
      { t: 'Fix my understanding', p: 'Here is my explanation of [topic]: [paste]. Tell me exactly what I have got wrong, what is missing, and what I have half-understood. Be blunt.' },
      { t: 'Career research', p: 'I am studying [subject] and interested in [field]. What roles exist, what skills does each need, typical starting salary in India, and what should I build now to be hireable?' },
    ],
  },
  {
    category: 'Business & Money',
    icon: '📊',
    prompts: [
      { t: 'Read my bill', p: 'This is my [electricity/phone/vendor] bill. Tell me: 1) the total, 2) the largest single cost, 3) what could realistically be reduced. Max 5 bullets.' },
      { t: 'Sheet formula in plain English', p: 'I need a Google Sheets formula that [describe what you want]. Give the formula, explain each part, and tell me exactly which cell to paste it into.' },
      { t: 'Cash-flow reality check', p: 'My monthly revenue is [amount], fixed costs [list], variable costs [list]. Show where the money actually goes, my break-even point, and the two costs worth cutting first.' },
      { t: 'Quotation template', p: 'Write a professional quotation for [service] to [client type] in India. Include scope, timeline, price [amount], payment terms, validity period and GST note.' },
      { t: 'Compare two options', p: 'I am deciding between [option A] and [option B] for my business. Build a comparison table on cost, time, risk and long-term benefit, then tell me which you would choose and why.' },
      { t: 'Simple business plan', p: 'Write a one-page plan for [business idea] in [city]: customer, problem, offer, pricing, first 10 customers, monthly costs, and the single biggest risk.' },
      { t: 'Vendor negotiation', p: 'I pay [vendor] [amount] for [service]. Write a message asking for better terms — based on volume, loyalty or a competing quote — without threatening to leave.' },
      { t: 'Explain a financial term', p: 'Explain [term] as if I run a small shop, not as if I studied finance. Use one Indian example with real numbers.' },
      { t: 'Invoice follow-up tracker', p: 'Design a simple Google Sheet to track invoices: which columns, what each does, and one formula that flags anything overdue by more than 15 days.' },
      { t: 'Pricing psychology check', p: 'My price for [product/service] is [amount]. Tell me how it reads to a customer, whether the number itself is working against me, and three alternative price points with the reasoning.' },
    ],
  },
  {
    category: 'Images & Design',
    icon: '🎨',
    prompts: [
      { t: 'Product photo', p: 'Professional product photograph of [product], on a clean [marble/wooden/white] surface, soft natural window light from the left, 45 degree angle, shallow depth of field, warm premium tones, commercial e-commerce style, 1:1. No text, no watermark, no distorted shapes.' },
      { t: 'Festival offer poster', p: 'Vibrant [festival] sale poster for an Indian [shop type]. Warm golden lighting, traditional motifs, large clean empty space in the centre for text, A4 portrait 3:4, rich colours, premium look. No text in the image.' },
      { t: 'YouTube thumbnail', p: 'Bold YouTube thumbnail, 16:9. Subject: [topic]. High contrast, dramatic lighting, strong focal point, clean background with space on the right for a headline. No text, no distorted hands or faces.' },
      { t: 'Get AI to write the image prompt', p: 'You are an expert image prompt writer. Write me 3 detailed prompts for [what you need], each in a different style. Include subject, setting, style, lighting, camera angle, colour mood and a negative prompt.' },
      { t: 'Logo directions', p: 'Suggest 5 logo directions for [business name], a [business type] in [city]. For each: the concept, colour palette, font style and what it signals. No image, just the brief.' },
      { t: 'Brand colour palette', p: 'Build a colour palette for [business] targeting [audience]. Give 5 colours with hex codes, what each is used for, and why the combination fits the audience.' },
      { t: 'Fix a weak design', p: 'Here is a description of my current [poster/post/page]: [describe or attach]. Tell me the 5 things hurting it most and exactly how to fix each.' },
      { t: 'Social media template set', p: 'Describe a consistent Canva template set for my [business]: post, story, carousel cover. Specify fonts, colours, layout rules and where the logo goes, so everything looks like one brand.' },
      { t: 'Background removal brief', p: 'I have a photo of [subject] and need it on [new background]. Describe the ideal replacement background — lighting direction, colour, depth — so it looks natural and not cut-out.' },
      { t: 'Image variations', p: 'Give me 3 variations of this image concept with a different angle, background and mood each, while keeping the product and brand feel identical: [describe].' },
    ],
  },
  {
    category: 'Video & Scripts',
    icon: '🎬',
    prompts: [
      { t: '45-second reel script', p: 'You are a short-form scriptwriter for an Indian audience. Topic: [topic]. Audience: [who]. Structure: hook (3s), problem (7s), 3 points (30s), CTA (5s). After each line, bracket what appears on screen. Give 3 alternative hooks.' },
      { t: 'One script, five videos', p: 'Make 5 versions of this script, each with a different hook and angle but the same core message. Add a caption and 8 Indian hashtags for each: [paste].' },
      { t: 'YouTube long-form outline', p: 'Outline a [X]-minute YouTube video on [topic]: hook, chapters with timestamps, what to show on screen in each, and the retention risk at each point.' },
      { t: 'Avatar/explainer script', p: 'Write a 60-second explainer script on [topic] for an AI avatar. Conversational, short sentences, a natural pause every 10 seconds, no jargon. End with one clear next step.' },
      { t: 'Hooks that stop the scroll', p: 'Give me 15 hooks for a video about [topic], aimed at [audience]. Mix: reversal, number+time, mistake, direct question. Max 12 words each.' },
      { t: 'Video description and tags', p: 'Write a YouTube description for a video titled "[title]": first 2 lines that work as a preview, a summary, timestamps [paste], and 15 tags.' },
      { t: 'Turn a testimonial into a video', p: 'Here is client feedback: [paste]. Write a 30-second video script built around it — what they say, what appears on screen, and how to end it.' },
      { t: 'Fix a video that flopped', p: 'My video on [topic] got [views] with [retention]% retention, dropping at [timestamp]. Here is the script: [paste]. Diagnose why and rewrite the first 15 seconds.' },
      { t: 'Faceless video concept', p: 'Suggest 5 faceless video formats I could make about [topic] with no camera — what appears on screen, what the voiceover says, and which tool to build each in.' },
      { t: 'Subtitle cleanup', p: 'Here are auto-generated subtitles with errors: [paste]. Fix spelling of names, brands and technical terms, and split lines so no line exceeds 40 characters.' },
    ],
  },
  {
    category: 'Website & Marketing',
    icon: '🌐',
    prompts: [
      { t: 'Whole page copy in one go', p: 'I run [business] in [city] selling [what] to [who] at [price range]. My biggest strength is [X]. Write full single-page website copy: headline (<10 words), sub-line, button text, 4 benefit bullets, 3 testimonial placeholders, pricing text, 4 FAQs, closing CTA. Short lines, no jargon.' },
      { t: '10 headline options', p: 'Give 10 headlines for my website. Each under 10 words, jargon-free, clearly stating I do [work] for [audience]. Say which customer type each appeals to.' },
      { t: 'Landing page for one offer', p: 'Write a landing page for [specific offer] at [price]. One goal: [action]. Include the problem, the promise, what they get, objection handling, and one CTA repeated twice.' },
      { t: 'Email sequence for new leads', p: 'Write a 5-email welcome sequence for someone who downloaded [lead magnet]. Email 1 delivers it, 2-4 build trust with useful content, 5 makes the offer. Subject lines included.' },
      { t: 'Google Business Profile description', p: 'Write a Google Business Profile description for [business] in [area, city]. Under 750 characters, include what we do, who we serve, and the areas we cover. Natural, not keyword-stuffed.' },
      { t: 'SEO content brief', p: 'Build a content brief for the keyword "[keyword]": search intent, suggested H2s, questions to answer, word count, and what competing pages are missing.' },
      { t: 'Ad copy variants', p: 'Write 5 ad variants for [product] targeting [audience] in [city]. Each with a different angle: problem, result, social proof, curiosity, offer. Include headline and body.' },
      { t: 'FAQ from real objections', p: 'My customers hesitate because of [list objections]. Turn each into an FAQ question and an honest answer that resolves it without overpromising.' },
      { t: 'Audit my page', p: 'Here is my landing page copy: [paste]. Tell me in 5 seconds of reading, can someone say what I sell and who for? Then list the 5 biggest problems and fix the headline.' },
      { t: 'WhatsApp broadcast message', p: 'Write a WhatsApp broadcast to my customer list about [offer/update]. Max 4 lines, no spam feel, one clear action, and an easy way to opt out.' },
    ],
  },
  {
    category: 'Automation & Productivity',
    icon: '⚙️',
    prompts: [
      { t: 'Automation audit', p: 'I work as [role]. My daily activities: [list]. Which 5 could be automated? For each: trigger, actions, tool (Zapier/Make/Apps Script), weekly time saved, and setup difficulty out of 5. Table, easiest and highest-saving first.' },
      { t: 'Apps Script written for me', p: 'Write a Google Apps Script that [describe exactly]. Full code, a comment on every line, and step-by-step instructions on where to paste it and how to set the trigger. I am non-technical.' },
      { t: 'Auto-reply template', p: 'Write an automatic WhatsApp reply for a new lead to my [business]. Max 3 lines, not robotic, one clear next step, placeholder for their name. Give 3 versions.' },
      { t: 'Daily digest design', p: 'Design a daily 8am digest email for my [business]: which numbers to include, where each comes from, and how to lay it out so I can read it in 30 seconds.' },
      { t: 'Weekly review template', p: 'Build a weekly review template for [role]: what to check, what to record, and 5 questions that surface problems early. Should take 15 minutes.' },
      { t: 'Break down a big task', p: 'I need to [big goal] by [date]. Break it into weekly milestones and daily tasks. Flag which tasks block others, and which I could delegate or automate.' },
      { t: 'Standard operating procedure', p: 'Write an SOP for [repetitive task] so someone else could do it without asking me questions. Numbered steps, tools needed, common mistakes, and how to know it is done right.' },
      { t: 'Inbox triage rules', p: 'Design a set of email rules and folders for someone receiving [X] emails a day as a [role]. What gets filtered, what gets flagged, what gets auto-archived.' },
      { t: 'Find my time leaks', p: 'Here is how I spent last week: [paste]. Identify where the time actually went, which activities produced no result, and the three changes with the biggest payoff.' },
      { t: 'Kill switch checklist', p: 'I am about to launch an automation that [describe]. List everything that could go wrong, how I would notice, and how to shut it off fast.' },
    ],
  },
  {
    category: 'Career & Growth',
    icon: '🚀',
    prompts: [
      { t: 'Personal 90-day plan', p: 'I am a [role] in [city]. Goal: [goal]. I have [X] minutes a day. Current skills: [list]. Build a realistic 90-day week-by-week plan. Each week: 1 learning target, 1 building target, 1 visibility target. Table. Do not overload it.' },
      { t: 'Make the case to your boss', p: 'I used AI to [what you did] and saved [time/money]. Write a note to my manager: the problem before, what I did, the result with numbers, and how to scale it to the team. Half a page max.' },
      { t: 'Rewrite my CV bullets', p: 'Here are my CV bullets: [paste]. Rewrite each to lead with a result and a number. Cut anything that is a duty rather than an achievement.' },
      { t: 'Interview preparation', p: 'I have an interview for [role] at [company type]. Give me the 10 most likely questions, a strong structure for each answer, and 5 questions I should ask them.' },
      { t: 'LinkedIn profile rewrite', p: 'Rewrite my LinkedIn headline and About section. I am a [role] who helps [audience] with [outcome]. Current version: [paste]. Make it specific, not aspirational.' },
      { t: 'Skill gap analysis', p: 'I want to move from [current role] to [target role] in India. What skills am I missing, which matter most, how do I prove each, and what is a realistic timeline?' },
      { t: 'Portfolio piece write-up', p: 'I built [thing]. Write a portfolio entry: the problem, what I made, the tools, the time it took and the result. Two short paragraphs, no fluff.' },
      { t: 'Freelance vs job decision', p: 'Help me think through [current job at salary] versus freelancing at [expected rate]. Cover income stability, time, skill growth, risk and what I would need in savings first. Give a recommendation.' },
      { t: 'Learn a skill fast', p: 'I want to learn [skill] to a usable level in [timeframe] with [hours] per week. Give a week-by-week plan built around building things, not watching content. Name the specific thing I build each week.' },
      { t: 'Weekly accountability check', p: 'My goal this week was [goal]. What actually happened: [paste]. Tell me honestly whether I made real progress, what I avoided, and the single most important thing for next week.' },
    ],
  },
];

const TOTAL = PROMPT_PACK.reduce((n, c) => n + c.prompts.length, 0);

module.exports = { PROMPT_PACK, TOTAL };
