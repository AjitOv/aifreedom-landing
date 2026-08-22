/* =========================================================================
   AI Basics — Zero to Hero · Full Lesson Content
   AI Freedom Institute · aifreedom.in
   Loaded by /course-player. Video slots stay separate — this is the written
   lesson every enrolled student reads, works through, and gets graded on.
   ========================================================================= */
window.AF_COURSE_CONTENT = window.AF_COURSE_CONTENT || {};

window.AF_COURSE_CONTENT["ai-basics"] = {

  /* ------------------------------------------------------------------ */
  "ab-01": {
    readTime: "8 min read",
    intro: "Until today you have heard about AI in the news, in reels, or from a friend. After this lesson AI stops being a buzzword and becomes a tool you use every day. No coding. No maths. Just clear understanding.",
    sections: [
      {
        heading: "1. What AI actually means",
        body: [
          "AI simply means software that learns patterns and makes decisions, without being programmed for every single step.",
          "Old software: you wrote the rules. If X happens, do Y. A calculator works exactly like that. AI flips the model. You show it thousands of examples and it works out the rule on its own."
        ],
        callout: { type: "note", text: "Remember this: AI does not understand, AI predicts. ChatGPT guesses the next word — just accurately enough that it feels human." }
      },
      {
        heading: "2. The three kinds of AI",
        body: ["People get confused because three completely different things share one name."],
        list: [
          "Narrow AI — expert at one job. ChatGPT, Google Maps traffic, YouTube recommendations, UPI fraud checks. Every AI you use today is this.",
          "General AI (AGI) — an AI that can do any task a human can. Does not exist yet. Research is ongoing.",
          "Super AI — beyond human ability. Only theory and films."
        ],
        callout: { type: "warn", text: "Anyone telling you AGI has arrived is either selling a product or selling fear. Your money and time are made with Narrow AI — that is the real game." }
      },
      {
        heading: "3. You already use AI",
        body: ["You touch AI over a hundred times a day. You just did not know its name."],
        list: [
          "WhatsApp and Gboard next-word suggestions",
          "Google Photos searching by face or place",
          "The Netflix, YouTube and Instagram feeds",
          "Your bank's fraud alert catching a wrong transaction",
          "Google Maps estimating arrival time and rerouting you",
          "Gmail's spam filter"
        ]
      },
      {
        heading: "4. Generative AI — where everything changed",
        body: [
          "Before 2022, AI mostly sorted, recognised and predicted. Now AI also creates — text, images, video, audio, code. This is called Generative AI.",
          "That is why one person today can do work that used to need five: a writer, a designer, a video editor, a researcher and a coder. This entire course is about that leverage."
        ]
      },
      {
        heading: "5. What AI cannot do",
        body: ["This is the most important section. People who end up disappointed by AI are the ones who never learned its limits."],
        list: [
          "AI states wrong things with total confidence. This is called hallucination. Numbers, dates, law, medicine, GST rates — always verify.",
          "AI has none of your context until you give it. It does not know your business, your client or your budget.",
          "AI has no taste. It produces average output. Your judgement is what lifts it above average.",
          "AI does not understand privacy. Never paste client data, Aadhaar numbers, bank details or medical reports into a public AI tool."
        ]
      }
    ],
    steps: [
      { title: "Create a ChatGPT account", detail: "Go to chatgpt.com and sign up with your Google account. The free plan is plenty." },
      { title: "Create a Gemini account", detail: "Go to gemini.google.com — your Gmail is already signed in, so it starts immediately." },
      { title: "Ask both the same question", detail: "Paste the prompt below into both and compare the answers. Noticing the difference is the real work of this lesson." },
      { title: "Start an AI notebook", detail: "A Google Doc or a paper notebook titled 'AI Wins'. Every time AI saves you time, write one line. In 30 days that becomes your proof." }
    ],
    prompts: [
      {
        label: "Your first prompt — connect AI to your own work",
        text: "I am a [your role — shopkeeper / student / teacher / freelancer] in India. List the 5 most boring, repetitive tasks in my day where AI could save me at least 30 minutes daily. For each task tell me which AI tool to use and how much time it saves. Answer in simple English."
      },
      {
        label: "Test hallucination yourself",
        text: "My company is called [any made-up name]. Tell me about its founder, funding and launch year."
      }
    ],
    mistakes: [
      "Asking a one-line question and concluding that AI is useless. Output quality is tied to input quality.",
      "Opening ten tools on day one. One tool for seven days — follow that rule.",
      "Sending an AI answer to a client or teacher without checking it."
    ],
    homework: {
      task: "Run the first prompt above in both ChatGPT and Gemini. Paste both answers into your AI Wins notebook and write three lines on which answer was better and why.",
      deliverable: "Two answers plus a three-line comparison in your notebook",
      time: "15 minutes"
    },
    quiz: [
      {
        q: "Every AI tool you use today falls into which category?",
        options: ["Narrow AI", "General AI (AGI)", "Super AI", "A mix of all three"],
        answer: 0,
        why: "ChatGPT, Gemini and Maps are all Narrow AI trained for specific jobs. AGI does not exist yet."
      },
      {
        q: "What does hallucination mean?",
        options: ["AI running slowly", "AI confidently giving a wrong answer", "AI refusing to answer", "AI losing internet access"],
        answer: 1,
        why: "AI predicts the next word, it does not verify truth. So wrong answers arrive in exactly the same confident tone."
      },
      {
        q: "Which of these should never go into a public AI tool?",
        options: ["A blog post idea", "A client's bank statement", "An email draft", "A recipe question"],
        answer: 1,
        why: "Never paste confidential or personal financial data into a public AI tool."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Google Gemini", url: "https://gemini.google.com" },
      { label: "Claude (a third option)", url: "https://claude.ai" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "ab-02": {
    readTime: "12 min read",
    intro: "Everyone has opened ChatGPT. Ninety percent of people use it like Google — type a question, take the answer, close the tab. After this lesson you will use it like an employee you brief properly. That difference is worth a lot of money.",
    sections: [
      {
        heading: "1. How to think about ChatGPT",
        body: [
          "ChatGPT is not a search engine. A search engine gives you links. ChatGPT does work — it writes, explains, edits and plans.",
          "The most accurate mental model: ChatGPT is a very well-read intern. Fast, never tired, a basic grasp of every subject — and zero knowledge of your company, your client or your style. You would never brief an intern in one line. The same rule applies here."
        ]
      },
      {
        heading: "2. Free versus paid, plainly",
        body: ["Start on free. Upgrade only once you are using it more than 30 minutes a day."],
        list: [
          "Free — limited access to the latest model, file uploads, image reading, basic web browsing. More than enough to learn on.",
          "Paid (around ₹1,999/month) — a stronger reasoning model, higher limits, deep research, and the ability to build custom GPTs.",
          "The rule: pay only when AI is already saving you more than ₹2,000 worth of time or work each month."
        ]
      },
      {
        heading: "3. The C-R-A-F-T formula",
        body: ["Memorise this. It comes back throughout the course."],
        list: [
          "C — Context: who you are and what this is for. 'I run a small saree shop in Pune.'",
          "R — Role: who AI should be. 'You are an experienced Instagram marketer who works with local Indian shops.'",
          "A — Action: the exact task. 'Write me 7 Instagram captions.'",
          "F — Format: what the output should look like. 'Each caption two lines, one emoji, one call to action.'",
          "T — Tone and Target: for whom and in what voice. 'For working women aged 25 to 40 in Pune, friendly tone.'"
        ],
        callout: { type: "tip", text: "Adding just Context and Format makes your output three times better. The other three are a bonus." }
      },
      {
        heading: "4. Follow-ups — where the real power sits",
        body: [
          "The first answer is never the final answer. Professionals go four or five rounds with ChatGPT.",
          "Four follow-ups that always work: 'Make this 40% shorter.' · 'Add an Indian example.' · 'Now explain it to a 12-year-old.' · 'What is weak about this? Critique yourself and rewrite it.'"
        ]
      },
      {
        heading: "5. Keeping chats organised",
        body: [
          "Open a new chat for every new job. Never mix five different tasks into one thread — the AI gets confused.",
          "Rename your chats by clicking the title. Something like 'Instagram captions — saree shop'. You will thank yourself a week later.",
          "Copy your good prompts into your AI Wins notebook. That becomes your personal prompt library."
        ]
      }
    ],
    steps: [
      { title: "Open a new chat and rename it", detail: "Call it 'AI Basics — Practice'." },
      { title: "Run a bad prompt", detail: "Type: 'Write an Instagram caption.' Look at the output — it will be generic." },
      { title: "Now run a CRAFT prompt", detail: "Fill in the template below for your own business and run it. Put both outputs side by side." },
      { title: "Fire three follow-ups", detail: "Make it shorter, then add an Indian example, then ask it to critique itself and rewrite." },
      { title: "Test a file upload", detail: "Upload any PDF or photo and ask: 'Summarise this in 5 bullet points.'" }
    ],
    prompts: [
      {
        label: "The CRAFT template — save this one",
        text: "Context: I am [who you are] working on [what].\nRole: You are an experienced [role] with 10 years of experience in India.\nAction: Do [the exact task] for me.\nFormat: [how many points / how many words / list or table].\nTone: [friendly / professional / funny], and the audience is [who].\nIf you need more information, ask me 3 questions first, then start."
      },
      {
        label: "The most under-rated line — put it at the end of every prompt",
        text: "Before you begin, ask me 3 clarifying questions."
      },
      {
        label: "The self-critique loop",
        text: "Now become a strict editor. List 5 weaknesses in the output above, with no politeness. Then fix those weaknesses and write the final version."
      }
    ],
    mistakes: [
      "Typing a one-line prompt and blaming AI for a bad output.",
      "Copy-pasting the first answer without a single follow-up.",
      "Running five different projects inside one chat.",
      "Using numbers, dates and legal details without verifying them."
    ],
    homework: {
      task: "Pick a real task from your work — an email, a caption, a lesson plan, a quotation. Do it once with a one-line prompt, then with a CRAFT prompt, then fire three follow-ups. Paste all three versions into your notebook.",
      deliverable: "Three versions of one task plus three lines on what improved",
      time: "25 minutes"
    },
    quiz: [
      {
        q: "What does the 'F' in CRAFT stand for?",
        options: ["Feeling", "Format", "Filter", "Frequency"],
        answer: 1,
        why: "Format tells the AI what the output should look like — how many points, how many words, which structure."
      },
      {
        q: "Which habit makes the biggest difference?",
        options: ["Writing longer prompts", "Buying the paid plan", "Following up on the first output", "Trying a new tool every day"],
        answer: 2,
        why: "The first answer is a draft. Follow-ups are what turn it into finished work."
      },
      {
        q: "What should you do when starting a new task?",
        options: ["Continue in the same old chat", "Open a new chat and rename it", "Switch accounts", "Open a different tool"],
        answer: 1,
        why: "A separate chat means clean context. Mixed context produces worse output."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "OpenAI Help Center", url: "https://help.openai.com" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "ab-03": {
    readTime: "10 min read",
    intro: "You have learned ChatGPT, so why Gemini? Because Gemini has two things ChatGPT does not — live Google Search data, and access to your own Gmail, Docs and Drive. The right tool for the right job is what this lesson teaches.",
    sections: [
      {
        heading: "1. What Gemini is",
        body: [
          "Gemini is Google's AI. You get it at gemini.google.com, and it is also built into Android phones, Gmail, Docs and Sheets.",
          "You do not need a new account. The Gmail you already use is your login."
        ]
      },
      {
        heading: "2. Gemini versus ChatGPT — when to use which",
        body: ["Do not pick a side. Open both and choose by the job in front of you."],
        list: [
          "Today's information, live prices, latest news, finding a place → Gemini, because live Google Search is attached",
          "Long structured writing — a blog, a script, a sales page → ChatGPT",
          "Replying to Gmail, summarising a Google Doc, writing a Sheets formula → Gemini, because the data already lives there",
          "Deep thinking work — strategy, code, complex analysis → ChatGPT's reasoning model",
          "Summarising a YouTube video → Gemini, since YouTube is Google's own platform"
        ],
        callout: { type: "tip", text: "A professional habit: run important work through both and take the better answer. It costs thirty extra seconds and noticeably improves the result." }
      },
      {
        heading: "3. Gemini inside Google Workspace",
        body: ["This opens up fully on Google's paid Workspace plans, but a good amount works on a free account too."],
        list: [
          "Gmail — summarise a long thread and draft a one-click reply",
          "Docs — 'Help me write', turn an outline into a full draft, change the tone",
          "Sheets — describe the formula you want in plain English and it writes it",
          "Drive — 'Find last month's invoice in my Drive'"
        ]
      },
      {
        heading: "4. Multimodal — photos, screenshots and voice",
        body: [
          "Gemini reads images extremely well. For everyday Indian life this is its most useful feature.",
          "Photograph an electricity bill and ask what is costing the most. Photograph handwritten notes and ask for typed notes. Photograph a product label and ask about ingredients and allergy risks."
        ],
        callout: { type: "warn", text: "Never upload a photo containing an Aadhaar number, PAN, bank details, or someone else's face." }
      },
      {
        heading: "5. Where Gemini is weak",
        body: [
          "Gemini sometimes becomes over-cautious and avoids answering. When that happens, rephrase the question clearly and in a professional tone.",
          "Live search does not mean the answer is correct. Gemini gives you source links — clicking through and checking them is your responsibility."
        ]
      }
    ],
    steps: [
      { title: "Open gemini.google.com", detail: "It signs you in automatically through Gmail." },
      { title: "Test live data", detail: "Ask: 'What is the petrol price in Pune today? Include source links.' Ask ChatGPT the same and compare." },
      { title: "Test a photo", detail: "Upload a photo of your electricity or phone bill and ask for a summary." },
      { title: "Test a YouTube summary", detail: "Paste a link to a 20-minute video and ask for a 10-bullet summary." },
      { title: "Try it inside Gmail", detail: "Open Gmail and use the Gemini summarise option on a long thread." }
    ],
    prompts: [
      {
        label: "Local research — where Gemini is strongest",
        text: "I live in [city]. Find me the top 5 options for [what you need — for example, a CA who handles GST filing]. For each one give the name, area, approximate price range and a source link. Put it in a table. Only include entries you have a source link for."
      },
      {
        label: "Bill or document photo",
        text: "This is a photo of my [electricity bill / phone bill / bank statement]. Tell me: 1) the total, 2) the single largest expense, 3) what could be reduced. Simple English, no more than 5 bullet points."
      },
      {
        label: "Notes from a YouTube video",
        text: "Here is the video link: [URL]. Extract the 10 most important points, one line each. Finish with 3 action items I could do today."
      }
    ],
    mistakes: [
      "Treating Gemini and ChatGPT as replacements for each other — they are complementary.",
      "Believing an answer because it has live search, without clicking the source.",
      "Uploading photos containing personal identity documents."
    ],
    homework: {
      task: "Ask one real research question from your own work in both tools. Open the source links Gemini provides and check whether the answer is actually supported by them.",
      deliverable: "Both answers plus the number of source links that actually checked out",
      time: "20 minutes"
    },
    quiz: [
      {
        q: "Which tool is better for live data such as today's petrol price?",
        options: ["ChatGPT", "Gemini", "Both equally", "Neither"],
        answer: 1,
        why: "Gemini is connected to live Google Search, so it returns current information with source links."
      },
      {
        q: "A source link in Gemini's answer means...",
        options: ["The answer is 100% true", "The answer is worth checking", "The answer is paid", "The answer is outdated"],
        answer: 1,
        why: "Verifying is your job. AI sometimes summarises a link incorrectly."
      },
      {
        q: "What is Gemini's most useful everyday feature?",
        options: ["Reading photos and documents", "Playing games", "Making music", "Making phone calls"],
        answer: 0,
        why: "Bills, handwritten notes, labels and screenshots — image reading is Gemini's most practical use in India."
      }
    ],
    resources: [
      { label: "Google Gemini", url: "https://gemini.google.com" },
      { label: "Gemini in Google Workspace", url: "https://workspace.google.com/solutions/ai/" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "ab-04": {
    readTime: "14 min read",
    intro: "This is the most enjoyable lesson in the course, and the most profitable. Write one line and a professional-quality image appears. Posters, product photos, logo ideas, thumbnails, Instagram creatives — all without a designer. Today you make your first ten images.",
    sections: [
      {
        heading: "1. Which tool for which job",
        body: ["Every tool has its own personality. The same prompt gives three different results in three tools."],
        list: [
          "ChatGPT's image mode — the easiest. Type in the chat and the image appears. Best at writing text inside an image, like a name or an offer on a poster. Best for beginners.",
          "Google Gemini — good quality on the free tier, starts straight from your Google account.",
          "Canva Magic Media — image plus a full design template in one place. The most practical for business material.",
          "Midjourney — the most artistic and cinematic output. Paid, runs through Discord or the web. For serious creators.",
          "Ideogram — the strongest at rendering clean text on posters and logos."
        ],
        callout: { type: "tip", text: "Start with ChatGPT plus Canva. Those two cover 90% of Indian small-business work. Take Midjourney only once you are selling images to clients." }
      },
      {
        heading: "2. The formula for a good image prompt",
        body: ["An image prompt has six parts. Include them all and the output looks professional. Skip them and it looks like clip art."],
        list: [
          "Subject — what the thing is. 'A steel tiffin box'",
          "Action and setting — where and how. 'On a wooden table, an Indian kitchen in the background'",
          "Style — the look. 'Product photography, realistic' or 'flat vector illustration' or 'watercolour'",
          "Lighting — 'soft natural window light' or 'golden hour' or 'studio softbox'",
          "Camera and composition — 'close-up, 45 degree angle, shallow depth of field'",
          "Colour and mood — 'warm tones, clean and premium feel'"
        ]
      },
      {
        heading: "3. Aspect ratio — state it upfront",
        body: ["Cropping afterwards destroys quality. Put it in the prompt itself."],
        list: [
          "Instagram post — 1:1, square",
          "Instagram reel, story or YouTube Short — 9:16, vertical",
          "YouTube thumbnail — 16:9",
          "Website banner or hero image — 16:9 or 21:9",
          "A4 poster or flyer for print — 3:4, or say 'A4 portrait'"
        ]
      },
      {
        heading: "4. Negative prompting — what you do not want",
        body: [
          "The most common problems in AI images are wrong fingers, misspelled text and plastic-looking faces.",
          "The fix is to state clearly at the end of the prompt what to avoid: 'No text, no watermark, no distorted hands, natural skin texture, not over-saturated.'"
        ]
      },
      {
        heading: "5. Copyright and safety — important in India",
        body: [
          "Do not generate a brand's logo or a real celebrity's face and then use it commercially. There is real legal risk.",
          "If you use an AI image in an ad or product listing, always include a real photo of the product too — otherwise you risk customer complaints and platform bans.",
          "Commercial rights to the images you create depend on your plan with that tool. Read its terms once before you sell anything to a client."
        ],
        callout: { type: "warn", text: "Never generate or edit a real person's face with AI without their permission — in India this raises personality rights issues." }
      }
    ],
    steps: [
      { title: "Your first image in ChatGPT", detail: "Paste the product photo prompt below, with your own product name in it." },
      { title: "The same prompt in Gemini", detail: "Compare the difference in style, lighting and realism." },
      { title: "Create a Canva account", detail: "Go to canva.com for a free account. Search for Magic Media and run the same prompt." },
      { title: "Add a negative prompt", detail: "Append 'no text, no watermark, no distorted hands' to your earlier prompt and run it again." },
      { title: "Generate variations", detail: "Ask the AI for '3 more variations of this image with a different angle and background'." },
      { title: "Finish in Canva", detail: "Import the best image into Canva and add your logo and offer text on top. That is your first ready-to-post creative." }
    ],
    prompts: [
      {
        label: "Product photo — for e-commerce",
        text: "Professional product photograph of [your product], placed on a clean [marble / wooden / plain white] surface, soft natural window light from the left, 45 degree angle, shallow depth of field, warm premium tones, high detail, commercial e-commerce style, square 1:1. No text, no watermark, no logo, no distorted shapes."
      },
      {
        label: "Festival offer poster — Indian small business",
        text: "Vibrant [Diwali / Ganesh Utsav / Eid / New Year] sale poster for an Indian [shop type]. Festive background with warm golden lighting and traditional Indian motifs, plenty of clean empty space in the centre for text, A4 portrait 3:4, rich colours, modern and premium look. No text in the image, no watermark."
      },
      {
        label: "YouTube thumbnail",
        text: "Bold YouTube thumbnail, 16:9. Central subject: [your topic]. High contrast colours, dramatic lighting, strong focal point, clean uncluttered background with space on the right for a headline. Cinematic and eye-catching. No text, no watermark, no distorted hands or faces."
      },
      {
        label: "Get AI to write the prompt for you",
        text: "You are an expert AI image prompt writer. Write me 3 different detailed image prompts for [what you need an image of], each in a different style. Every prompt should include subject, setting, style, lighting, camera angle, colour mood and a negative prompt."
      }
    ],
    mistakes: [
      "A tiny prompt like 'make a beautiful poster'. The output will be exactly that generic.",
      "Not stating the aspect ratio, then ruining quality by cropping later.",
      "Trying to get text rendered inside the image — better to make the image with AI and add text in Canva.",
      "Generating celebrity faces and brand logos for commercial use."
    ],
    homework: {
      task: "Make one real creative for your own work — a product photo or a festival poster. Generate the image with AI, take it into Canva, add your name, offer and contact number, and export the final PNG.",
      deliverable: "One finished creative (PNG) plus the prompt that finally worked",
      time: "40 minutes"
    },
    quiz: [
      {
        q: "When should you state the aspect ratio?",
        options: ["After the image is generated", "In the prompt, from the start", "Never", "Only in Midjourney"],
        answer: 1,
        why: "Cropping afterwards damages both resolution and composition."
      },
      {
        q: "What is the most reliable way to get clean text on a poster?",
        options: ["Have the AI write the text", "Image from AI, text added in Canva", "Screenshot and edit", "Leave text out entirely"],
        answer: 1,
        why: "Image models still make mistakes with text. A Canva text layer is always correct and stays editable."
      },
      {
        q: "What is a negative prompt for?",
        options: ["Making the image faster", "Removing what you do not want", "Making the image free", "Increasing resolution"],
        answer: 1,
        why: "Watermarks, distorted fingers and stray text are greatly reduced by a negative prompt."
      }
    ],
    resources: [
      { label: "Canva (Magic Media)", url: "https://www.canva.com" },
      { label: "Ideogram — text-heavy posters", url: "https://ideogram.ai" },
      { label: "Midjourney", url: "https://www.midjourney.com" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "ab-05": {
    readTime: "13 min read",
    intro: "No camera. No editing software. No need to show your face. In this lesson you make your first complete video with AI — from script to voiceover, visuals and subtitles. The full pipeline for reels and YouTube Shorts.",
    sections: [
      {
        heading: "1. Three routes to AI video",
        body: ["The confusion exists because three completely different things are all called 'AI video'."],
        list: [
          "Text-to-video slideshow — you give a script, the tool assembles stock clips, voiceover and subtitles. The most practical and the cheapest. Tools: InVideo AI, Pictory, Canva.",
          "AI avatar or talking head — a digital person speaks your script. Good for explainers, training and ads. Tools: HeyGen, Synthesia, D-ID.",
          "Pure generative video — the AI creates entirely new footage. The most cinematic, the most expensive, and the least controllable. Tools: Runway, Google Veo, Kling."
        ],
        callout: { type: "tip", text: "The beginner's route: start with a slideshow tool. Your first video will be done in 20 minutes. Avatars and generative video come later." }
      },
      {
        heading: "2. Script first, always",
        body: [
          "People open the video tool first and get stuck. Do the opposite: script in ChatGPT first, then the video tool.",
          "The structure of short-form video is fixed. Hook in the first 3 seconds, problem from 3 to 10 seconds, three points from 10 to 45 seconds, call to action in the last 5. That is all."
        ]
      },
      {
        heading: "3. The hook — everything happens in 3 seconds",
        body: ["Ninety percent of reels die in the first three seconds. Four hook formulas that work in India:"],
        list: [
          "The reversal — 'Posting every day on Instagram is holding your growth back.'",
          "Number plus time — 'A complete website, in 10 minutes, for zero rupees.'",
          "The mistake — 'Every new freelancer makes these 3 mistakes.'",
          "The direct question — 'What is your phone recording at night?'"
        ]
      },
      {
        heading: "4. Sorting out the voice",
        body: [
          "Two options: record your own voice — a phone mic in a quiet room is enough — or use an AI voice.",
          "For AI voice, ElevenLabs is the most natural. The video tools also have built-in voices, and on a free plan that is where to start.",
          "Your own voice always wins because it builds trust. Use AI voice when you need volume or you are camera-shy."
        ]
      },
      {
        heading: "5. Subtitles are non-negotiable",
        body: [
          "More than 80% of people in India watch video with the sound off. A reel without subtitles loses half its audience.",
          "Every major tool auto-generates subtitles. Do one thing after they generate: check the spellings yourself, because AI often gets names and technical words wrong."
        ],
        callout: { type: "warn", text: "Check the licence on stock footage and music. YouTube's Content ID catches copyrighted music immediately and you lose monetisation." }
      }
    ],
    steps: [
      { title: "Get a 45-second script from ChatGPT", detail: "Use the reel script prompt below." },
      { title: "Open InVideo AI or Canva", detail: "invideo.io or canva.com — both have a free plan." },
      { title: "Paste the script", detail: "Choose the text-to-video option, paste the script, and select 9:16 vertical." },
      { title: "Pick a voice", detail: "Choose an Indian-accent voice, or upload your own recording." },
      { title: "Replace the visuals", detail: "Swap out any clip that does not match the topic. This two-minute job is what takes a video from amateur to professional." },
      { title: "Check the subtitles", detail: "Fix spellings, keep the font large and the colour high contrast." },
      { title: "Export and post", detail: "1080x1920, MP4. Post the reel and watch the first-three-second retention." }
    ],
    prompts: [
      {
        label: "45-second reel script",
        text: "You are a short-form video scriptwriter who writes for an Indian audience. Topic: [your topic]. Audience: [who]. Write me a 45-second reel script.\nStructure: Hook (first 3 seconds, must stop the scroll), Problem (7 seconds), 3 practical points (30 seconds), Call to action (5 seconds).\nAfter each line, put in brackets what should appear on screen.\nUse simple spoken language, no heavy words. Finish by giving me 3 alternative hooks."
      },
      {
        label: "One script into five videos",
        text: "Make 5 different versions of the script above — each with a different hook and angle, but the same core message. For each version also give a caption and 8 relevant Indian hashtags."
      },
      {
        label: "Avatar video script (HeyGen / Synthesia)",
        text: "Write me a 60-second explainer script on [topic] for an AI avatar to speak. Conversational language, short sentences, a natural pause every 10 seconds. No jargon at all. End with one clear next step."
      }
    ],
    mistakes: [
      "Opening the video tool before writing a script.",
      "Spending more than 5 seconds on the hook — the audience leaves.",
      "Making a horizontal video and posting it to Instagram.",
      "Skipping subtitles, or using a small font.",
      "Adding copyrighted music."
    ],
    homework: {
      task: "Make one 45-second vertical video related to your work — script from AI, video from a slideshow tool, subtitles on. Post it, or at minimum export it.",
      deliverable: "One MP4 (9:16, with subtitles) plus the script",
      time: "45 minutes"
    },
    quiz: [
      {
        q: "What is the correct order for making a video?",
        options: ["Open the tool, then think", "Script first, then the tool", "Choose music first", "Make the thumbnail first"],
        answer: 1,
        why: "Once the script is settled the video tool is a 20-minute job. Without a script, hours disappear."
      },
      {
        q: "How long do you have for the hook?",
        options: ["3 seconds", "15 seconds", "30 seconds", "1 minute"],
        answer: 0,
        why: "In a short-form feed the first 3 seconds decide whether the video gets watched at all."
      },
      {
        q: "Why are subtitles essential?",
        options: ["The algorithm requires them", "Most people watch with sound off", "They make the video look longer", "They avoid copyright"],
        answer: 1,
        why: "A large share of Indian viewers scroll on mute — without subtitles the message never lands."
      }
    ],
    resources: [
      { label: "InVideo AI", url: "https://invideo.io" },
      { label: "Canva Video", url: "https://www.canva.com" },
      { label: "HeyGen — AI avatars", url: "https://www.heygen.com" },
      { label: "ElevenLabs — AI voice", url: "https://elevenlabs.io" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "ab-06": {
    readTime: "12 min read",
    intro: "Writing is a skill people in India pay anywhere from ₹5,000 to ₹50,000 for. AI does not make you a writer — it makes you fast. This lesson teaches you how to get writing out of AI that does not read like AI.",
    sections: [
      {
        heading: "1. The biggest truth about AI writing",
        body: [
          "AI's first draft is always average. It averages millions of articles from the internet — and average writing impresses nobody.",
          "Your job is not the writer's, it is the editor's. AI gives you 80% of the speed, you add 20% of the soul. That 20% is your entire value."
        ],
        callout: { type: "note", text: "Remember the formula: AI's draft plus your real example plus your opinion equals content that sells." }
      },
      {
        heading: "2. Six giveaways of AI writing — remove them",
        body: ["A reader spots AI writing immediately. These six things are why."],
        list: [
          "Words like delve, moreover, furthermore, in today's fast-paced world, unlock the power of",
          "Every paragraph the same length and the same rhythm",
          "Everything in threes — always exactly three items",
          "No real names, numbers or places — everything generic",
          "Zero opinion — both sides presented, no position taken",
          "Too many em-dashes and the 'It's not just X, it's Y' pattern"
        ]
      },
      {
        heading: "3. Teach AI your voice",
        body: [
          "This single technique will improve your output tenfold. Give AI three samples of your own writing and tell it to copy the style.",
          "Nothing you have written to hand? Five messages you sent clients on WhatsApp will do — that is your real voice."
        ]
      },
      {
        heading: "4. Which tool",
        body: ["Each tool has its place, but the truth is 90% of the work is done by ChatGPT and Gemini."],
        list: [
          "ChatGPT — long structured writing, blogs, sales pages, email sequences. The default choice.",
          "Gemini — when you need current information and source links.",
          "Claude — very good for long documents and a natural tone.",
          "Grammarly — final grammar and clarity check.",
          "Canva Magic Write — when you need writing directly inside a design."
        ]
      },
      {
        heading: "5. AI content and Google",
        body: [
          "Google does not ban AI content. Google demotes low-value content — whether a human or an AI wrote it.",
          "The way through is simple: put one thing in every article that AI does not have — your own experience, your client's result, a screenshot you took, your numbers."
        ],
        callout: { type: "warn", text: "Never deliver raw AI output to a client. Get caught once and the reputation does not come back. Always edit and always check the facts." }
      }
    ],
    steps: [
      { title: "Collect three of your own samples", detail: "Old emails, WhatsApp messages or posts — things you actually wrote." },
      { title: "Build a voice profile", detail: "Run the style clone prompt below. Save the style guide it produces into your notebook." },
      { title: "Write one real piece", detail: "Paste the voice profile in and write an actual email or post." },
      { title: "Strip out the AI tells", detail: "Run the de-slop prompt below." },
      { title: "Add your 20%", detail: "Add one real example, one number and one opinion by hand. This is the step that makes content sellable." }
    ],
    prompts: [
      {
        label: "Style clone — the most important prompt here",
        text: "Below are 3 samples of my writing. Read them and build a style guide for my writing — sentence length, tone, which words I use and which I avoid, formal or casual.\nGive the style guide as 10 bullet points so I can paste it into every future prompt.\n\nSAMPLE 1: [paste]\nSAMPLE 2: [paste]\nSAMPLE 3: [paste]"
      },
      {
        label: "De-slop — remove the AI fingerprint",
        text: "Rewrite this text so it reads as human-written. Rules:\nNever use 'delve', 'moreover', 'furthermore', 'in today's fast-paced world', 'unlock', 'game-changer'.\nVary sentence length — some short, some long.\nTake a clear position at least once.\nAdd one concrete Indian example or number.\nCut 20% of the words.\nKeep the meaning the same."
      },
      {
        label: "Outline to draft",
        text: "Topic: [topic]. Audience: [who]. My writing style guide: [paste].\nFirst give me only an outline with H2 headings and one line under each. Do not write the draft yet.\nOnce I approve the outline, I will tell you to write it in full."
      },
      {
        label: "Sales and offer copy",
        text: "I sell [product/service] to [audience] at [price]. Write me a short sales copy containing: 1 headline, a 3-line problem, 3 benefit bullets (benefits, not features), 1 objection handled, and 1 clear call to action. No hype, no false promises."
      }
    ],
    mistakes: [
      "Publishing the first draft.",
      "Running generic prompts without teaching it your style.",
      "Using AI-generated numbers, statistics or quotes without verifying them.",
      "Keeping the same three-point list pattern in every article.",
      "Sending raw AI output to a client."
    ],
    homework: {
      task: "Build your voice profile with the style clone prompt. Use it to write one real piece — an email, a post or a product description. Run the de-slop prompt. Then add one real example and one opinion by hand.",
      deliverable: "A voice profile (10 points) plus the final edited piece",
      time: "35 minutes"
    },
    quiz: [
      {
        q: "What is the strongest way to make AI writing sound human?",
        options: ["Writing longer prompts", "Giving it 3 samples to learn your style", "Buying a paid tool", "Using bigger words"],
        answer: 1,
        why: "Style samples let AI copy your voice and escape the generic average."
      },
      {
        q: "What does Google do with AI content?",
        options: ["Bans it instantly", "Automatically ranks it top", "Demotes low-value content regardless of who wrote it", "Ignores it"],
        answer: 2,
        why: "Google evaluates quality, not authorship. AI-assisted content that adds value still ranks."
      },
      {
        q: "What is your real value-add?",
        options: ["Fast typing", "Real examples, numbers and your own opinion", "More words", "More headings"],
        answer: 1,
        why: "AI does not have your experience. That 20% is what makes the content unique and sellable."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Claude", url: "https://claude.ai" },
      { label: "Grammarly", url: "https://www.grammarly.com" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "ab-07": {
    readTime: "13 min read",
    intro: "Today your own website goes live — a real URL you can send to anyone. No code, no developer, and without spending ₹25,000. In 40 minutes at most.",
    sections: [
      {
        heading: "1. Decide the website's one job first",
        body: [
          "Most websites fail because nobody ever decided what they are for.",
          "A website should have one job: bring a WhatsApp enquiry, or get a call, or get a form filled, or sell something. Everything else is decoration."
        ],
        callout: { type: "tip", text: "One page is enough. Do not lose three weeks trying to build a five-page site. One good page and one clear button." }
      },
      {
        heading: "2. Choosing a tool",
        body: ["Every one of these will produce a website. The difference is control and learning time."],
        list: [
          "Carrd — the fastest. A one-page site in 20 minutes. Perfect for a local business, personal page or link-in-bio.",
          "Canva Websites — if you already use Canva, go straight from design to website. Free subdomain included.",
          "Framer AI — a full professional site from one prompt. Best design, slightly more to learn.",
          "Wix ADI — answer a few questions and a full multi-page site appears. Blog and booking built in.",
          "v0.dev — an AI-built site with real code. Choose this when a developer will scale it later."
        ]
      },
      {
        heading: "3. Every converting page has the same structure",
        body: ["These seven blocks are enough. Do not build more."],
        list: [
          "Headline — what you do and for whom, in one line. Zero jargon.",
          "Sub-line — how, in what time, at what cost.",
          "Button — 'Talk on WhatsApp'. It must be visible without scrolling.",
          "Proof — 3 customer reviews, or photos, or numbers.",
          "What they get — 3 to 5 points, benefits not features.",
          "Price or price range — do not hide it, hiding breaks trust.",
          "Button again at the bottom, plus phone number and location."
        ]
      },
      {
        heading: "4. Content first, design second",
        body: [
          "People do it backwards — they pick a theme first, then get stuck on the text. Reverse it.",
          "Get ChatGPT to write the full page text using the prompt below, then paste it into the tool. The website is finished in 20 minutes."
        ]
      },
      {
        heading: "5. Six checks before going live",
        body: ["These six are missing from most new websites."],
        list: [
          "Open it on a phone — over 80% of Indian traffic is mobile.",
          "Does the WhatsApp button actually open? Test it. The link format is wa.me/91XXXXXXXXXX",
          "The page should load in 3 seconds — compress large images.",
          "A real phone number and location must be on the page — Google local search needs it.",
          "The browser tab title and description should be correct.",
          "Send it to a friend and ask: 'In 5 seconds, can you tell me what I sell?'"
        ],
        callout: { type: "warn", text: "If you take payments you need a privacy policy, terms and a refund policy — both Razorpay and PhonePe ask for them during verification." }
      }
    ],
    steps: [
      { title: "Decide the one job", detail: "Write it down: 'The job of this website is ___'." },
      { title: "Get the text written", detail: "Run the website copy prompt below." },
      { title: "Open Carrd or Canva", detail: "Create a free account and pick a simple template." },
      { title: "Paste the text", detail: "Do not touch the design yet. Just fill in the text." },
      { title: "Add the WhatsApp button", detail: "Button link: https://wa.me/91XXXXXXXXXX?text=Hi, I want to know about [service]" },
      { title: "Add an image", detail: "Make a hero image with the AI image tools from lesson 4." },
      { title: "Publish and test", detail: "Hit publish, open it on a phone, press the button, and send it to a friend." }
    ],
    prompts: [
      {
        label: "The whole website's text — in one prompt",
        text: "I run [your business] in [city]. I sell [what] to [which customers]. My price range is [range]. My biggest strength is [X].\nWrite the complete text for a single-page website, in this order:\n1) Headline (under 10 words), 2) Sub-line (1 sentence), 3) Button text, 4) 4 'what you get' benefit bullets, 5) 3 short customer testimonial placeholders, 6) pricing section text, 7) 4 FAQ questions and answers, 8) closing call to action.\nSimple English. No corporate jargon. Keep every line short."
      },
      {
        label: "One-line prompt for Framer / Wix AI",
        text: "Create a clean, modern one-page website for [business] in [city], India. Sections: hero with headline and WhatsApp CTA, services, why choose us, testimonials, pricing, FAQ, contact with phone and map. Mobile-first, fast loading, warm professional colour scheme, minimal text."
      },
      {
        label: "Ten headline options",
        text: "Give me 10 headline options for my website. Each under 10 words, jargon-free, and clearly stating that I do [work] for [audience]. Next to each headline, say which type of customer it would appeal to most."
      }
    ],
    mistakes: [
      "Design first, content second.",
      "Trying to build a five-page website when one page is enough.",
      "Not testing on a phone.",
      "Hiding the price — it reduces enquiries, it does not increase them.",
      "Heavy images making the site slow."
    ],
    homework: {
      task: "Build and publish one live one-page website with a working WhatsApp button on it. Send the URL to one friend and write their feedback in your notebook.",
      deliverable: "A live URL plus one feedback note",
      time: "40 minutes"
    },
    quiz: [
      {
        q: "What is the correct order for building a website?",
        options: ["Design first, content second", "Content first, design second", "Domain first", "Logo first"],
        answer: 1,
        why: "Once the text is settled any tool is a 20-minute job. Doing it backwards takes weeks."
      },
      {
        q: "What is the most important button on a local business page?",
        options: ["Newsletter signup", "WhatsApp or Call", "Social media follow", "Read the blog"],
        answer: 1,
        why: "In India most local enquiries come through WhatsApp or a call. That button belongs at the top."
      },
      {
        q: "What is the most important test before publishing?",
        options: ["Viewing on a laptop", "Viewing on a phone", "Printing it", "Changing the font"],
        answer: 1,
        why: "Over 80% of Indian traffic is mobile. A broken mobile page means the whole page is wasted."
      }
    ],
    resources: [
      { label: "Carrd — fastest one-pager", url: "https://carrd.co" },
      { label: "Canva Websites", url: "https://www.canva.com/website-builder/" },
      { label: "Framer", url: "https://www.framer.com" },
      { label: "v0 by Vercel", url: "https://v0.dev" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "ab-08": {
    readTime: "11 min read",
    intro: "This lesson is for students — school, college, competitive exams, or anyone learning something new. But be careful: getting AI to do your homework will make you fail. Learning with AI will make you a topper. This lesson is about that difference.",
    sections: [
      {
        heading: "1. The one-line rule",
        body: [
          "Do not ask AI for answers. Ask AI for understanding.",
          "'Write this answer for me' — you learned nothing and you fail the exam. 'Explain this as if I am 12, then ask me 3 questions' — you now own the topic. Ten seconds separate those two prompts, and an entire career separates the outcomes."
        ],
        callout: { type: "warn", text: "Submitting AI-written work as your own is academic misconduct at most colleges. Check the rules first. It is not worth the risk." }
      },
      {
        heading: "2. The Feynman method, with AI",
        body: [
          "The strongest learning technique there is, and AI makes it perfect.",
          "Step 1: get AI to explain the topic in simple language. Step 2: explain it back to AI in your own words. Step 3: AI tells you where you are wrong. Step 4: fill the gaps and repeat. In 20 minutes the topic is yours."
        ]
      },
      {
        heading: "3. Notes — from a photo to ready material",
        body: ["Gemini and ChatGPT both read handwriting. For students this is the single biggest time-saver."],
        list: [
          "A photo of the class board becomes typed, structured notes",
          "A textbook page becomes a 10-bullet summary plus 5 likely exam questions",
          "Past question papers become a topic-wise pattern analysis",
          "Your notes become flashcards and a quiz"
        ]
      },
      {
        heading: "4. An AI system for exam prep",
        body: ["Studying is one thing, being ready for an exam is another. AI can do both."],
        list: [
          "Paste the syllabus and get a realistic study plan built around the hours you actually have",
          "Generate 10 practice questions per chapter, and ask for the answers separately",
          "Give AI your written answer and say: 'Act as a strict examiner, award marks and list the errors'",
          "Get mnemonics built for anything you have to memorise",
          "The day before: 'Make a one-page revision sheet for this chapter'"
        ]
      },
      {
        heading: "5. Research and references",
        body: [
          "AI sometimes invents completely fake references — real-looking authors, years and journals, all imaginary.",
          "The rule: never use a reference until you have opened that paper's page yourself. Search Google Scholar and confirm it."
        ]
      }
    ],
    steps: [
      { title: "Pick a difficult topic", detail: "Take the one that did not make sense today." },
      { title: "Run the Feynman prompt", detail: "Use the prompt below and answer the questions AI asks you." },
      { title: "Test the notes photo", detail: "Upload a photo of your handwritten notes to Gemini and get typed notes." },
      { title: "Generate a quiz", detail: "Get 10 questions on that topic, attempt them yourself, then have AI check them." },
      { title: "Make a revision sheet", detail: "Get a one-page revision sheet and print or save it." }
    ],
    prompts: [
      {
        label: "The Feynman learning loop — the most powerful student prompt",
        text: "You are my personal tutor. Topic: [topic]. My level: [class/course].\n1) First explain it as if I am 12 years old, using an everyday Indian example.\n2) Then explain it at a slightly technical level.\n3) Then ask me 3 questions that check whether I actually understood.\nAfter my answers, tell me where I am wrong and what is missing. Do not just give me the answer — make me work it out."
      },
      {
        label: "Study material from a photo of your notes",
        text: "This is a photo of my class notes. From it produce: 1) clean typed notes with headings, 2) a 10-bullet summary, 3) 5 questions that could come up in an exam, 4) 5 flashcards with questions and answers separated. If anything in the photo is unclear, mark it 'unclear' rather than guessing."
      },
      {
        label: "Examiner mode — get your answer marked",
        text: "The question was: [question]. This is my written answer: [answer].\nNow act as a strict [board/university] examiner. 1) Award marks out of [total], 2) explain point by point where marks were lost and why, 3) write a model answer that would score full marks. Do not go easy on me."
      },
      {
        label: "Study plan",
        text: "My exam is on [date]. Here is the syllabus: [paste]. I can study [X] hours a day. My weak topics: [list].\nBuild a realistic day-by-day study plan including revision and practice tests. Give it as a table. Do not overload it — the plan must be one I can actually follow."
      }
    ],
    mistakes: [
      "Getting AI to write an answer and submitting it as it is.",
      "Putting AI-generated references into a bibliography without verifying them.",
      "Only reading, never attempting practice questions yourself.",
      "Accepting AI's maths steps without checking — it makes calculation errors."
    ],
    homework: {
      task: "Pick a topic you do not properly understand. Run the full Feynman loop and answer all three of AI's questions. Then generate a one-page revision sheet for the same topic.",
      deliverable: "A screenshot of the Feynman chat plus a one-page revision sheet",
      time: "30 minutes"
    },
    quiz: [
      {
        q: "What is the best student use of AI?",
        options: ["Getting assignments written", "Understanding and testing yourself", "Marking attendance", "Using it in an exam"],
        answer: 1,
        why: "The understanding stays with you, the written work belongs to AI. Only understanding helps in the exam."
      },
      {
        q: "What should you do with AI-supplied academic references?",
        options: ["Use them directly", "Verify each one yourself, then use it", "Ignore them", "Double them"],
        answer: 1,
        why: "AI invents real-looking but fake references. Open and check every single one."
      },
      {
        q: "What is the core of the Feynman method?",
        options: ["Reading repeatedly", "Explaining the topic in simple language yourself", "Highlighting notes", "Watching videos"],
        answer: 1,
        why: "Understanding is only complete when you can explain it simply. That is also where the gaps show up."
      }
    ],
    resources: [
      { label: "Google Gemini — from a photo of notes", url: "https://gemini.google.com" },
      { label: "NotebookLM — AI over your own notes", url: "https://notebooklm.google.com" },
      { label: "Google Scholar — verify references", url: "https://scholar.google.com" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "ab-09": {
    readTime: "13 min read",
    intro: "So far you have had AI do work while you sat there each time. In this lesson AI does the work while you sleep. Set it up once and it keeps running. This is automation, and this is the real leverage.",
    sections: [
      {
        heading: "1. What automation actually means",
        body: [
          "Every automation has the same shape: Trigger, then Action. When this happens, do that.",
          "For example: a new form is submitted (trigger), so a row is added to a Google Sheet, a WhatsApp alert reaches you, and a welcome email goes out (actions). You do nothing."
        ]
      },
      {
        heading: "2. What to automate — and what not to",
        body: ["Do not automate everything. There is a simple test."],
        list: [
          "Automate if the task is repetitive, the rules are clear, and it happens more than three times a week",
          "Do not automate if it needs judgement every time, or if a mistake is expensive — money, legal, medical",
          "Start with the tasks eating 15 or more minutes of your week; that is where the return shows up immediately"
        ],
        callout: { type: "tip", text: "Choose a first automation where nothing breaks if it fails. A small win first is what builds the confidence." }
      },
      {
        heading: "3. Tools that are practical in India",
        body: ["All of these have a free plan. Pick one and build three automations in it before looking at another."],
        list: [
          "Zapier — the easiest, with the most app connections. The free plan covers simple two-step automations.",
          "Make.com — a little more to learn, but a more generous free plan and far more powerful logic.",
          "n8n — the most flexible, and free if you self-host. For technical people.",
          "Google Apps Script — completely free for Sheets, Gmail and Drive. Have AI write the script for you.",
          "ChatGPT Projects and custom instructions — for keeping repetitive prompts in one place."
        ]
      },
      {
        heading: "4. Four automations every Indian business needs",
        body: ["These four save the most time. Start with any one."],
        list: [
          "Lead alert — a website or Instagram form is submitted, so it saves to a Google Sheet and pings you instantly on WhatsApp or Telegram",
          "Invoice follow-up — it scans the Sheet for 'pending' rows and sends a polite reminder email weekly, on its own",
          "Content pipeline — you drop an idea into a Sheet, AI turns it into a caption, hashtags and a script and writes them back",
          "Daily digest — at 8am, one email with yesterday's enquiries, pending payments and today's tasks"
        ]
      },
      {
        heading: "5. Rules of automation — do not break these",
        body: [
          "Test every automation on yourself first. Alerts to your own number, emails to your own inbox. Never point it straight at customers.",
          "Build a kill switch into everything — one on/off toggle that stops it immediately.",
          "Check once a month that everything is still running. A broken automation is more dangerous than no automation, because you believe the work is happening."
        ],
        callout: { type: "warn", text: "Never send raw AI output in an automatic message to customers. Keep the template fixed and change only the name and details. One wrong auto-message reaches a hundred people." }
      }
    ],
    steps: [
      { title: "List your 5 repetitive tasks", detail: "Remember the first prompt from lesson 1? Start with that list." },
      { title: "Pick the most boring one", detail: "The one that happens most often and needs the least thought." },
      { title: "Write the trigger and action", detail: "In one line: 'When ___ happens, do ___'." },
      { title: "Create a Zapier or Make account", detail: "Free plan. Connect the apps." },
      { title: "Build it and test on yourself", detail: "Send the alert to your own number. Test it three times." },
      { title: "Let it run a week", detail: "Write down in your notebook how much time it saved. That number is what makes you build the next one." }
    ],
    prompts: [
      {
        label: "Automation audit — where to start",
        text: "I work as [your role]. My daily activities are: [list].\nWhich 5 of these could be automated? For each one tell me: 1) the trigger, 2) the actions, 3) which tool (Zapier/Make/Apps Script), 4) how much time it saves per week, 5) setup difficulty out of 5.\nGive it as a table, sorted with the biggest time-saving and easiest at the top."
      },
      {
        label: "Get AI to write Google Apps Script",
        text: "I need a Google Apps Script that does the following: [state the job clearly — for example, 'for every row in Sheet1 where status is Pending and the date is 7 days old, send a reminder to the email in that row'].\nGive the full code with a comment on every line explaining what it does, and step-by-step instructions on where to paste it in Google Sheets and how to set the trigger. I am non-technical."
      },
      {
        label: "Auto-message template",
        text: "Write an automatic WhatsApp message template for my [business] that goes out when a new lead arrives. Rules: no more than 3 lines, must not sound robotic, one clear next step, and a placeholder for the name. Give me 3 versions."
      }
    ],
    mistakes: [
      "Trying to build a complex eight-step automation on day one.",
      "Testing directly on customers.",
      "Not building a kill switch.",
      "Setting no alert for when the automation breaks.",
      "Sending raw AI output in automatic messages."
    ],
    homework: {
      task: "Build one working automation — small is fine. A lead alert or a daily digest is the easiest. Test it on yourself three times. Write down in your notebook which task it covers and how much time it saves weekly.",
      deliverable: "One live automation plus a time-saved estimate",
      time: "45 minutes"
    },
    quiz: [
      {
        q: "What is the basic shape of every automation?",
        options: ["Input to Output", "Trigger to Action", "Start to Stop", "Prompt to Answer"],
        answer: 1,
        why: "When this event happens (trigger), do this work (action). Every tool runs on that model."
      },
      {
        q: "Which task should NOT be automated?",
        options: ["Daily data entry", "Anything needing judgement every time", "A lead alert", "A weekly report"],
        answer: 1,
        why: "Judgement tasks have no fixed rules, and automation makes mistakes there."
      },
      {
        q: "Who should a new automation be tested on first?",
        options: ["Customers", "Yourself", "Friends", "Nobody"],
        answer: 1,
        why: "Alerts to your own number, emails to your own inbox. One wrong auto-message goes straight to a hundred customers."
      }
    ],
    resources: [
      { label: "Zapier", url: "https://zapier.com" },
      { label: "Make.com", url: "https://www.make.com" },
      { label: "Google Apps Script", url: "https://script.google.com" },
      { label: "n8n", url: "https://n8n.io" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "ab-10": {
    readTime: "12 min read",
    intro: "The last lesson. You have learned nine skills. The question now is what to do with them. This is not a course summary — this is your plan for the next 90 days. Take it seriously, because the people who stop here forget everything.",
    sections: [
      {
        heading: "1. The biggest truth",
        body: [
          "AI will not take your job. A person using AI will. That line sounds worn out, but it is proving true in every industry.",
          "You do not need to become an AI engineer. You need to become the person in your field who uses AI best. That path is shorter and pays better."
        ]
      },
      {
        heading: "2. Four routes — pick yours",
        body: ["Choose one of the four. Do not chase all four — that is the most common mistake."],
        list: [
          "Route A — Become the AI person in your current job. Lowest risk. Do twice the work where you already are, show it, and teach the team. Promotions and raises come from here.",
          "Route B — Freelancing and services. Selling content, design, video and automation done with AI. In India that runs from ₹15,000 to ₹1,00,000 a month depending on skill and clients. The fastest cash.",
          "Route C — Run your own business with AI. A shop, a coaching centre, a clinic, an agency — content, ads, support and admin all handled by AI. The time and money saved is profit.",
          "Route D — Teach. Very few people in India are teaching AI yet. Workshops, YouTube, local classes. What you have just learned is enough for someone two steps behind you."
        ],
        callout: { type: "tip", text: "If you are unsure, pick Route A. Applying AI where you already are gives the fastest result, and it opens the doors to B, C and D." }
      },
      {
        heading: "3. A portfolio — nothing happens without one",
        body: [
          "Nobody will ask for your certificate. People want to see work.",
          "The good news: every homework in this course is a portfolio piece. You already have them — a creative, a video, a website, a writing sample, an automation. Just put them in one place."
        ],
        list: [
          "Turn the website from lesson 7 into your portfolio page",
          "Write two lines with each piece: what the problem was, what you built, how long it took",
          "Show screenshots, do not just describe",
          "Put the link in your WhatsApp status, Instagram bio and LinkedIn"
        ]
      },
      {
        heading: "4. The first 30 days — the exact plan",
        body: ["The most important month is the one after the course ends. 45 minutes a day."],
        list: [
          "Week 1 — Pick a route. Do one AI task a day inside your real work. Record the time saved in your notebook.",
          "Week 2 — Put your portfolio page live with all five pieces on it.",
          "Week 3 — Tell 10 people. For freelancing: offer 10 businesses one small job free. For a job: show your manager. For a business: use it on your customers.",
          "Week 4 — Your first payment or first official result. Small counts. A first client paying ₹500 is infinitely better than zero."
        ]
      },
      {
        heading: "5. What to learn next — in this order",
        body: [
          "Do not go and learn everything now. Follow this order: Prompt Engineering first, because everything rests on it, then the deep skill for your chosen route — freelancing, or trading, or business automation.",
          "Do not chase tools. A new one arrives every week. Doing 10 real jobs with what you already have beats opening 10 new tools."
        ],
        callout: { type: "note", text: "Remember: watching 10 lessons changes nothing. Building 10 things changes everything. You already have 5 built — just 5 more to go." }
      }
    ],
    steps: [
      { title: "Pick your route", detail: "A, B, C or D — write it down. Only one." },
      { title: "Put your portfolio page live", detail: "Add your 5 homework pieces to the website from lesson 7." },
      { title: "Get your 30-day plan built", detail: "Run the prompt below, print the plan, put it on the wall." },
      { title: "Tell 10 people", detail: "WhatsApp status, Instagram, LinkedIn — wherever you already are." },
      { title: "Book your next course", detail: "Prompt Engineering, or the specialised course for your route." },
      { title: "Leave a review", detail: "What you learned and what you built, in your own words. It is also your own record." }
    ],
    prompts: [
      {
        label: "Your personal 90-day AI plan",
        text: "I am a [your role / student] in [city]. I have just finished the AI Basics course — ChatGPT, Gemini, AI images, AI video, AI writing, website building and automation.\nMy goal is: [job upgrade / freelancing income / growing my business / teaching].\nI have [X] minutes a day. My current skills: [list].\nBuild me a realistic 90-day plan, week by week. Each week should have: 1 learning target, 1 building target, 1 target for putting it in front of people. Give it as a table. Do not overload it — the plan must be one I can actually follow."
      },
      {
        label: "Your first freelancing pitch",
        text: "I want to sell [service — for example, 'AI-made Instagram content'] to [which local businesses] in [city].\nWrite me a WhatsApp or DM pitch: no more than 5 lines, opening with their problem, offering one small free sample, and ending with a clear next step. It must not sound sales-y. Give me 3 versions."
      },
      {
        label: "Make the case for AI at work (for your manager)",
        text: "I am a [role] at [company]. I used AI to [what you did] and it saved [how much time or money].\nWrite a short note for my manager showing: the problem before, what I did, the result with numbers, and how this could scale across the team. Professional tone, no more than half a page."
      }
    ],
    mistakes: [
      "Finishing the course and hunting for the next one without building anything.",
      "Chasing all four routes at once.",
      "Not building a portfolio because you feel 'not ready yet'.",
      "Trying a new tool every week and mastering none.",
      "Being shy about offering free work — the first client usually comes from there."
    ],
    homework: {
      task: "Pick your route, get your 90-day plan built, and put your portfolio page live with every homework piece from this course on it. Then send that link to at least 10 people.",
      deliverable: "A 90-day plan, a live portfolio URL, and proof you sent it to 10 people",
      time: "60 minutes"
    },
    quiz: [
      {
        q: "What is the most important step after the course?",
        options: ["Buying the next course", "Building something and showing it", "Watching more videos", "Trying new tools"],
        answer: 1,
        why: "People look at work, not certificates. What you build is your only real proof."
      },
      {
        q: "Which route carries the least risk?",
        options: ["Quitting your job to freelance", "Becoming the AI person in your current job", "Starting a new business", "Starting a YouTube channel"],
        answer: 1,
        why: "Applying AI where you already are gives the fastest result, with no risk to your income."
      },
      {
        q: "What is the correct first step for learning further?",
        options: ["Coding", "Prompt Engineering", "Data Science", "Machine Learning maths"],
        answer: 1,
        why: "Every AI tool runs on prompts. Prompt engineering improves the output of every other skill."
      }
    ],
    resources: [
      { label: "Prompt Engineering course", url: "/courses/ai-prompt-engineering" },
      { label: "AI Se Kamao course", url: "/courses/ai-se-kamao" },
      { label: "AI Freelancing course", url: "/courses/ai-freelancing" }
    ]
  }
};
