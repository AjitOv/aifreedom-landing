/* =========================================================================
   AI Prompt Engineering — 10x Better Output · Full Lesson Content
   AI Freedom Institute · aifreedom.in
   Loaded by /course-player. Same shape as ai-basics.js.
   ========================================================================= */
window.AF_COURSE_CONTENT = window.AF_COURSE_CONTENT || {};

window.AF_COURSE_CONTENT["prompt-eng"] = {

  /* ------------------------------------------------------------------ */
  "pe-01": {
    readTime: "9 min read",
    intro: "Two people open the same AI tool on the same day. One gets output they throw away. The other gets work they bill for. The tool is identical — the difference is entirely in what they typed. This course is about that difference.",
    sections: [
      {
        heading: "1. What prompt engineering actually is",
        body: [
          "A prompt is your instruction to an AI. Prompt engineering is the craft of writing that instruction so the output needs little or no fixing.",
          "It is not a hack or a secret word. It is closer to briefing a capable new employee: the clearer the brief, the less rework you do."
        ],
        callout: { type: "note", text: "The honest framing: you are not learning magic words. You are learning to specify what you want precisely — a skill that transfers to managing people, writing specs, and running a business." }
      },
      {
        heading: "2. Why the same model gives different quality",
        body: [
          "A language model predicts the most likely continuation of your text. A vague prompt sits in a region of possibilities where the average answer is generic — so you get a generic answer.",
          "Detail narrows the possibilities. When you specify role, audience, format and constraints, you move the model into a much smaller space where the likely answers are the ones you actually wanted."
        ],
        list: [
          "\"Write about marketing\" — millions of plausible continuations, all average",
          "\"Write 5 Instagram captions for a Pune saree shop targeting women aged 25 to 40, two lines each, one call to action\" — a narrow space, and almost every answer in it is usable"
        ]
      },
      {
        heading: "3. What actually moves the needle",
        body: ["Ranked by how much difference each makes, from what consistently works:"],
        list: [
          "Context — who you are, what this is for. The single biggest lever.",
          "Format — what the output should look like. Second biggest, and the most often forgotten.",
          "Examples — showing one good example beats three paragraphs of description.",
          "Constraints — word counts, what to avoid, what not to include.",
          "Role — useful, but weaker than people claim. It shapes tone more than accuracy.",
          "Politeness, threats, offering tips — no reliable effect. Skip the folklore."
        ]
      },
      {
        heading: "4. The rework test",
        body: [
          "Here is how to know whether a prompt is good: how much do you have to edit the output before it is usable?",
          "Heavy rewriting means the prompt was under-specified. Instead of fixing the output by hand, fix the prompt and run it again. The second habit compounds; the first does not."
        ],
        callout: { type: "tip", text: "Keep every prompt that produced good work. Six months in, your saved library is worth more than any course — including this one." }
      },
      {
        heading: "5. What prompting cannot fix",
        body: [
          "No prompt makes a model know your private data, today's news it was not given, or facts it never learned. If the information is not in the model or in your prompt, no phrasing conjures it.",
          "No prompt eliminates hallucination. Better prompts reduce it and make it easier to spot, but verification stays your job — always, for numbers, dates, law and anything you will publish."
        ]
      }
    ],
    steps: [
      { title: "Pick one real task", detail: "Something from your actual work this week, not a practice exercise." },
      { title: "Write the lazy version", detail: "One line, the way you would normally type it. Save the output." },
      { title: "Add context and format only", detail: "Do not add anything else yet. Run it again and compare." },
      { title: "Measure the rework", detail: "For each version, note how many minutes of editing it would need. That number is your real score." },
      { title: "Start your library", detail: "A doc titled 'Prompts That Worked'. Paste the winner in with a one-line note on what it is for." }
    ],
    prompts: [
      {
        label: "The before/after test — run this on your own work",
        text: "Version A: [your normal one-line prompt]\n\nVersion B: I am [who you are] working on [what]. I need [exact task]. The output should be [format: length, structure, language]. The audience is [who]. Avoid [what you do not want]."
      },
      {
        label: "Make AI critique your prompt",
        text: "Here is a prompt I wrote: [paste your prompt].\nAct as a prompt engineer. Tell me: 1) what is ambiguous, 2) what context is missing, 3) what the output format should specify, 4) what a stronger version looks like. Do not run the prompt — critique it."
      },
      {
        label: "The clarifying-questions trick",
        text: "[your task]. Before you answer, ask me up to 4 questions that would most improve your output. Wait for my answers."
      }
    ],
    mistakes: [
      "Typing one line, getting a weak result, and concluding the model is bad.",
      "Editing the output by hand instead of fixing the prompt and re-running.",
      "Copying long 'magic prompts' from social media without understanding which part is doing the work.",
      "Believing politeness, urgency or offering money changes quality. It does not.",
      "Never saving a prompt that worked."
    ],
    homework: {
      task: "Take one real task from your work. Run the lazy prompt and the specified prompt. Estimate the editing minutes each would need before you could actually use it. Save the better prompt into a new 'Prompts That Worked' document.",
      deliverable: "Two outputs, two rework estimates, and the first entry in your prompt library",
      time: "20 minutes"
    },
    quiz: [
      {
        q: "Why does a vague prompt give a generic answer?",
        options: ["The model is being lazy", "It leaves a huge space of plausible continuations, and the average one is generic", "The free plan is limited", "The model does not understand English"],
        answer: 1,
        why: "Specificity narrows the space of likely outputs to the region you actually wanted."
      },
      {
        q: "Which has the biggest effect on output quality?",
        options: ["Being polite", "Offering a tip", "Context and format", "Prompt length"],
        answer: 2,
        why: "Context and format consistently produce the largest improvement. Politeness and incentives have no reliable effect."
      },
      {
        q: "What is the right response to output that needs heavy editing?",
        options: ["Edit it by hand and move on", "Fix the prompt and re-run", "Switch tools", "Accept it"],
        answer: 1,
        why: "Fixing the prompt improves every future run. Fixing the output helps once."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Claude", url: "https://claude.ai" },
      { label: "Google Gemini", url: "https://gemini.google.com" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "pe-02": {
    readTime: "12 min read",
    intro: "This lesson gives you the structure you will use for the rest of your life with AI. Six parts. Once you internalise them, writing a strong prompt takes about twenty seconds and stops feeling like guesswork.",
    sections: [
      {
        heading: "1. The six parts",
        body: ["Every reliably good prompt contains some combination of these. Not all six every time — but you should know which you are leaving out and why."],
        list: [
          "ROLE — who the AI should act as. 'You are a copywriter for Indian D2C brands.'",
          "CONTEXT — your situation. 'I run a 3-person agency in Pune. This is for a client in the fitness space.'",
          "TASK — the exact job, stated as an instruction. 'Write 5 subject lines.'",
          "FORMAT — the shape of the output. 'A markdown table with columns: subject line, angle, predicted open rate.'",
          "CONSTRAINTS — the boundaries. 'Under 45 characters. No emojis. No fake urgency.'",
          "EXAMPLES — one or two samples of what good looks like. The strongest single addition you can make."
        ],
        callout: { type: "tip", text: "If you only have time for two: Context and Format. Those two carry most of the improvement." }
      },
      {
        heading: "2. Task — say it as an instruction, not a wish",
        body: [
          "Weak: 'I need some help with my website copy.' That is a description of a feeling.",
          "Strong: 'Write the hero headline and sub-line for my website.' That is an instruction with a definite finish line.",
          "If you cannot state the task as a single imperative sentence, you have not decided what you want yet — and no prompt will rescue that."
        ]
      },
      {
        heading: "3. Format — the most under-used part",
        body: [
          "Most disappointment with AI is actually a format mismatch. You wanted a table and got prose. You wanted five options and got one essay.",
          "Be mechanical about it: how many items, how long each, what structure, what language, what should be bolded, whether you want headings."
        ],
        list: [
          "'A numbered list of exactly 7 items, each one sentence'",
          "'A markdown table with columns: Tool, Cost, Best for, Free tier?'",
          "'Three options labelled A, B and C, each under 60 words'",
          "'Plain English, no bullet points, two paragraphs'"
        ]
      },
      {
        heading: "4. Constraints — say what you do not want",
        body: [
          "Constraints do more work than people expect, because they eliminate the model's default habits.",
          "Common ones worth keeping in a snippet: no em-dashes, no 'delve' or 'moreover', do not invent statistics, do not use placeholder text like [Company Name], stay under X words, do not repeat the question back to me."
        ]
      },
      {
        heading: "5. Examples — the strongest single upgrade",
        body: [
          "Describing your desired style takes a paragraph and still misses. Showing one example lands it immediately.",
          "This works because the model pattern-matches. One good example is worth more than three sentences of adjectives — and two examples let it infer the pattern rather than copy the sample."
        ],
        callout: { type: "warn", text: "Pick your examples carefully. The model copies whatever is in them — including flaws. If your sample has a weak opening line, you will get weak opening lines back." }
      },
      {
        heading: "6. Building it up in layers",
        body: [
          "Do not write all six parts from scratch every time. Start with Task, run it, then add whichever part the output was missing.",
          "Output too generic → add Context. Wrong shape → add Format. Wrong tone → add Role or Examples. Too long or full of AI tics → add Constraints. This is faster than trying to be perfect first time."
        ]
      }
    ],
    steps: [
      { title: "Write a task-only prompt", detail: "Just the instruction. Nothing else. Run it." },
      { title: "Add Format", detail: "Specify structure, count and length. Run again. Note the change." },
      { title: "Add Context", detail: "Who you are, what it is for, who reads it. Run again." },
      { title: "Add one Example", detail: "Paste one sample of what good looks like. Run again — this is usually the biggest jump." },
      { title: "Add Constraints last", detail: "Trim the AI tics and lock the length." },
      { title: "Save the finished six-part prompt", detail: "Into your library, with the placeholders left in square brackets so it is reusable." }
    ],
    prompts: [
      {
        label: "The six-part template — save this",
        text: "ROLE: You are a [role] with [X] years of experience in [field] in India.\nCONTEXT: I am [who] working on [what]. The audience is [who] and they care about [what].\nTASK: [one imperative sentence].\nFORMAT: [structure, how many, how long, what language].\nCONSTRAINTS: [word limits, what to avoid, what never to include].\nEXAMPLE OF GOOD OUTPUT:\n[paste one sample]\n\nIf anything above is unclear, ask me before you start."
      },
      {
        label: "Universal constraint block — append to any prompt",
        text: "Constraints: Do not use the words delve, moreover, furthermore, or 'in today's fast-paced world'. Do not invent statistics or sources. Do not leave placeholder text. Vary sentence length. Do not restate my question back to me. Take a clear position rather than presenting both sides."
      },
      {
        label: "Upgrade a weak prompt into six parts",
        text: "Here is a weak prompt: [paste]. Rewrite it using this structure: ROLE, CONTEXT, TASK, FORMAT, CONSTRAINTS, EXAMPLE. Where information is missing, mark it as [I need to fill this in] rather than inventing it."
      }
    ],
    mistakes: [
      "Writing a wish instead of an instruction.",
      "Leaving format unspecified, then being annoyed at the shape of the output.",
      "Using a flawed example — the model copies the flaw.",
      "Trying to write all six parts perfectly on the first attempt instead of layering.",
      "Adding a role and expecting it to fix factual accuracy. It mostly affects tone."
    ],
    homework: {
      task: "Take a task you do weekly. Build it up in layers — task, then format, then context, then one example, then constraints — running it at each stage. Keep all five outputs so you can see which layer made the biggest difference for your kind of work.",
      deliverable: "Five outputs showing the progression, plus one reusable six-part template",
      time: "30 minutes"
    },
    quiz: [
      {
        q: "Which single addition usually produces the biggest jump in quality?",
        options: ["A longer role description", "One good example of the output you want", "Being more polite", "Asking twice"],
        answer: 1,
        why: "Models pattern-match. One concrete example communicates more than a paragraph of description."
      },
      {
        q: "Your output is the right content but the wrong shape. What is missing?",
        options: ["Role", "Format", "Constraints", "Context"],
        answer: 1,
        why: "Format specifies structure, count and length. Most 'bad output' complaints are actually format mismatches."
      },
      {
        q: "What is the risk of including an example?",
        options: ["It makes the prompt too long", "The model copies its flaws too", "It slows the model down", "It costs more"],
        answer: 1,
        why: "The model imitates whatever is in your sample, including weaknesses you did not notice."
      }
    ],
    resources: [
      { label: "Anthropic prompt engineering guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
      { label: "OpenAI prompting guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "pe-03": {
    readTime: "11 min read",
    intro: "Ask AI a hard question and it answers instantly — often confidently and wrong. Chain-of-thought is the technique that makes it slow down and work through the problem before committing. For anything with logic, numbers or multiple steps, this is the single highest-value technique in the course.",
    sections: [
      {
        heading: "1. Why instant answers go wrong",
        body: [
          "A model generates one token at a time. If it commits to an answer in the first sentence, everything after that is justification for a guess it already made.",
          "Give it room to reason first and the answer comes at the end of the working, not before it. The reasoning genuinely changes the answer — it is not decoration."
        ]
      },
      {
        heading: "2. The simplest version",
        body: [
          "Append one line: 'Think through this step by step before giving your answer.'",
          "That alone measurably improves accuracy on multi-step problems. It is the cheapest upgrade in prompting."
        ],
        callout: { type: "tip", text: "Newer reasoning models do much of this internally. Explicit step-by-step still helps on messy real-world problems, and it lets you SEE the reasoning — which is how you catch a wrong assumption." }
      },
      {
        heading: "3. Structured reasoning — better than 'step by step'",
        body: ["Naming the steps beats leaving them to the model, because you control what gets considered."],
        list: [
          "'First list what you know. Then list what is missing. Then reason. Then answer.'",
          "'Work through this in three passes: understand the problem, consider two approaches, then pick one and justify it.'",
          "'Show your calculation line by line, then state the final figure separately.'"
        ]
      },
      {
        heading: "4. Reading the reasoning to find the fault",
        body: [
          "The real payoff is diagnostic. When the answer is wrong, the visible reasoning shows you exactly where it went wrong — usually a wrong assumption in step two, not bad arithmetic at the end.",
          "You then fix that assumption in your prompt and re-run. Without visible reasoning you would just see a wrong number and have no idea why."
        ]
      },
      {
        heading: "5. Self-consistency — for decisions that matter",
        body: [
          "For a question where being wrong is expensive, run it three times in separate chats and compare.",
          "If all three agree, confidence is reasonable. If they diverge, the question is genuinely ambiguous or the model is guessing — and that divergence is useful information you would never see from a single run."
        ],
        callout: { type: "warn", text: "Visible reasoning is not proof of correctness. A model can produce confident, well-structured, entirely wrong working — especially with arithmetic. Check the numbers yourself." }
      },
      {
        heading: "6. When not to use it",
        body: [
          "Chain-of-thought costs tokens and time, and adds nothing to simple tasks. Do not use it to write an Instagram caption.",
          "Use it for: analysis, comparisons, anything with arithmetic, debugging, planning with dependencies, and decisions with trade-offs."
        ]
      }
    ],
    steps: [
      { title: "Find a multi-step problem", detail: "Something real — a pricing decision, a comparison, a plan with dependencies." },
      { title: "Ask it cold", detail: "No reasoning instruction. Save the answer." },
      { title: "Add step-by-step", detail: "Same question plus 'think through this step by step before answering'. Compare." },
      { title: "Structure the steps yourself", detail: "Name the passes you want. Compare again." },
      { title: "Audit the reasoning", detail: "Read each step. Find the first one you disagree with — that is your prompt fix." },
      { title: "Run it three times", detail: "Separate chats. Note whether the answers agree." }
    ],
    prompts: [
      {
        label: "Structured reasoning — the workhorse",
        text: "Problem: [describe].\nWork through this in order:\n1) List the facts I have given you.\n2) List what is missing that you would need to be confident.\n3) Reason through the options.\n4) State your recommendation and the single biggest risk with it.\nDo not give the recommendation before step 4."
      },
      {
        label: "Show the arithmetic separately",
        text: "[the calculation]. Show every step of the calculation on its own line with the numbers visible. Then state the final figure on a separate line labelled ANSWER. Do not round until the final step."
      },
      {
        label: "Find your own mistake",
        text: "Here is your previous reasoning: [paste]. Review it as a sceptic. Identify any step that relies on an assumption I did not give you, and any step where the arithmetic could be wrong. Then redo it correcting whatever you find."
      },
      {
        label: "Self-consistency check",
        text: "Answer this independently, without referring to any earlier answer: [question]. Show your reasoning, then your answer."
      }
    ],
    mistakes: [
      "Using chain-of-thought on trivial tasks and paying for tokens you did not need.",
      "Reading only the final answer and skipping the reasoning that would have revealed the error.",
      "Treating confident reasoning as proof — well-structured working can still be wrong.",
      "Asking for a re-check in the same chat, where the model tends to defend its earlier answer. Use a fresh chat."
    ],
    homework: {
      task: "Take a real decision you are weighing. Run it cold, then with structured reasoning, then three times independently in separate chats. Write down whether the three agreed, and which reasoning step you would challenge.",
      deliverable: "Three independent answers plus the one reasoning step you disagree with",
      time: "30 minutes"
    },
    quiz: [
      {
        q: "Why does reasoning before answering improve accuracy?",
        options: ["It makes the model try harder", "The answer comes after the working rather than being justified backwards", "It uses a better model", "It searches the web"],
        answer: 1,
        why: "Committing to an answer first turns everything after into justification for a guess."
      },
      {
        q: "What is the main practical benefit of visible reasoning?",
        options: ["It looks professional", "You can find the exact step where it went wrong", "It is faster", "It uses fewer tokens"],
        answer: 1,
        why: "The diagnostic value is the point — you fix the faulty assumption rather than guessing at the prompt."
      },
      {
        q: "When should you NOT use chain-of-thought?",
        options: ["Financial calculations", "A short social caption", "Comparing two options", "Debugging"],
        answer: 1,
        why: "It costs tokens and time with no benefit on simple generation tasks."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Claude", url: "https://claude.ai" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "pe-04": {
    readTime: "10 min read",
    intro: "You can describe the style you want in three paragraphs and still not get it. Or you can paste two examples and get it immediately. Few-shot prompting is showing instead of telling, and it is the fastest way to make AI sound like you rather than like AI.",
    sections: [
      {
        heading: "1. Zero-shot, one-shot, few-shot",
        body: ["The vocabulary is simple and worth knowing because it tells you what to reach for."],
        list: [
          "Zero-shot — instruction only, no examples. Fine for common tasks the model has seen endlessly.",
          "One-shot — one example. Enough to fix format and rough tone.",
          "Few-shot — two to five examples. The model infers the underlying pattern rather than copying one sample. This is where the quality lives."
        ],
        callout: { type: "tip", text: "Two examples is the sweet spot for most work. One risks being copied too literally; beyond five you get diminishing returns and a long prompt." }
      },
      {
        heading: "2. Cloning your own voice",
        body: [
          "This is the highest-value use for anyone producing content. Paste three things you have written, ask the model to derive a style guide, then reuse that guide forever.",
          "Nothing written to hand? Five WhatsApp messages you sent clients count. That is your actual voice, unpolished — which is exactly what makes it recognisable."
        ]
      },
      {
        heading: "3. What makes a good example",
        body: ["The quality of your examples caps the quality of your output. Choose deliberately."],
        list: [
          "Pick your best work, not your most recent",
          "Keep examples the same length as the output you want — the model matches length",
          "Use examples that differ from each other, so the model infers the pattern instead of copying one",
          "Label them clearly: INPUT: … OUTPUT: … so the mapping is obvious",
          "Strip anything you do not want repeated — a stray formatting quirk will come back every time"
        ]
      },
      {
        heading: "4. Input-output pairs for repetitive work",
        body: [
          "When you have a task you do the same way each time — turning a product spec into a listing, a bug report into a summary, a testimonial into a caption — show two complete input-output pairs.",
          "The model then handles the third, fourth and hundredth without further instruction. This is what turns AI from a chat toy into a production tool."
        ]
      },
      {
        heading: "5. Where few-shot backfires",
        body: [
          "Examples create a groove. That is the point — but it also means the output will not surprise you. For brainstorming and idea generation, examples narrow your range rather than widening it.",
          "Use zero-shot with a high-variety instruction when you want range, and few-shot when you want consistency."
        ],
        callout: { type: "warn", text: "Never paste a client's confidential work as an example into a public AI tool. Use your own work, or anonymise it properly first — replacing the name is not enough if the details identify them." }
      }
    ],
    steps: [
      { title: "Collect three samples of your writing", detail: "Emails, posts, client messages — things you actually wrote." },
      { title: "Derive a style guide", detail: "Run the style clone prompt below. Save the 10-point guide it produces." },
      { title: "Test it on a new piece", detail: "Write something new using the guide. Does it sound like you?" },
      { title: "Build an input-output pair set", detail: "For a repetitive task, write two complete examples showing input and desired output." },
      { title: "Run the third case", detail: "Give only the input. The output should now need almost no editing." }
    ],
    prompts: [
      {
        label: "Style clone — the highest-value prompt in this lesson",
        text: "Below are 3 samples of my writing. Derive a style guide covering: average sentence length, tone, vocabulary I use and avoid, how I open and close, formality level, and any habits or quirks.\nGive it as 10 bullet points I can paste into future prompts.\n\nSAMPLE 1: [paste]\nSAMPLE 2: [paste]\nSAMPLE 3: [paste]"
      },
      {
        label: "Few-shot input-output pattern",
        text: "I will show you two examples of a task, then give you a third input. Match the pattern exactly.\n\nINPUT: [example input 1]\nOUTPUT: [your ideal output 1]\n\nINPUT: [example input 2]\nOUTPUT: [your ideal output 2]\n\nINPUT: [your real input]\nOUTPUT:"
      },
      {
        label: "Apply a saved style guide",
        text: "My style guide: [paste the 10 points].\nWrite [what you need] following that guide exactly. If any instruction in the guide conflicts with the task, follow the guide and tell me where the conflict was."
      }
    ],
    mistakes: [
      "Describing your style in adjectives instead of showing two examples.",
      "Using a mediocre example and wondering why the output is mediocre.",
      "Using examples of a different length than the output you want.",
      "Using few-shot for brainstorming, then complaining the ideas all sound the same.",
      "Pasting client-confidential work as an example."
    ],
    homework: {
      task: "Build your style guide from three real samples. Then set up an input-output pair set for one repetitive task you do, and run a live third case through it.",
      deliverable: "A 10-point style guide plus a working few-shot template for one repeated task",
      time: "35 minutes"
    },
    quiz: [
      {
        q: "How many examples is usually the sweet spot?",
        options: ["One", "Two", "Ten", "As many as fit"],
        answer: 1,
        why: "Two lets the model infer a pattern rather than copy a single sample, without bloating the prompt."
      },
      {
        q: "Your examples are mediocre. What happens?",
        options: ["The model improves on them", "The output is mediocre too", "It ignores them", "It asks for better ones"],
        answer: 1,
        why: "Example quality caps output quality — the model imitates what you show it."
      },
      {
        q: "When is few-shot the wrong choice?",
        options: ["Repetitive production work", "Matching your writing voice", "Brainstorming for range and surprise", "Formatting consistency"],
        answer: 2,
        why: "Examples create a groove. For idea generation that narrows your range instead of widening it."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Claude — strong at long examples", url: "https://claude.ai" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "pe-05": {
    readTime: "9 min read",
    intro: "\"You are an expert marketer\" is the most copied prompt line on the internet, and it is also the most misunderstood. Roles do help — but not in the way most people think, and believing otherwise leads to confident, wrong output.",
    sections: [
      {
        heading: "1. What a role actually changes",
        body: [
          "A role shifts vocabulary, tone, structure and which considerations the model raises. Asking as a lawyer surfaces risk; asking as a marketer surfaces positioning.",
          "What a role does not do is add knowledge. 'You are a doctor' does not make the model more medically accurate — it makes it sound more medical, which is genuinely more dangerous."
        ],
        callout: { type: "warn", text: "This is the trap: a role raises confidence and jargon without raising accuracy. An authoritative-sounding wrong answer is harder to catch than an obviously uncertain one." }
      },
      {
        heading: "2. Specific roles beat grand ones",
        body: ["'World-class expert' is noise. Specificity is what changes the output."],
        list: [
          "Weak: 'You are a world-class expert marketer.'",
          "Strong: 'You are a performance marketer who has run Meta ads for Indian D2C brands with budgets under ₹1 lakh a month.'",
          "The second one knows about small budgets, Indian platforms and realistic constraints. The first knows about being called world-class."
        ]
      },
      {
        heading: "3. Audience is often more useful than role",
        body: [
          "Who the output is FOR shapes it more than who it is FROM. 'Explain to a shop owner with no technical background' does more work than any expert framing.",
          "Best results come from setting both: an expert speaking to a specific non-expert."
        ]
      },
      {
        heading: "4. Panels — several roles at once",
        body: [
          "For a decision, ask for multiple perspectives in one pass. Each role surfaces different objections, and the disagreement between them is the valuable part.",
          "This is genuinely useful for plans: a finance lens, a customer lens and an operations lens will each find a different hole in the same idea."
        ]
      },
      {
        heading: "5. Persona for consistency across a team",
        body: [
          "If several people generate content for one brand, a shared persona block keeps the output consistent. Define who the brand sounds like, what it never says, and its stance on the topics it covers.",
          "Save it once, paste it every time. This is how you stop five people producing five different brand voices."
        ]
      }
    ],
    steps: [
      { title: "Run a task with no role", detail: "Baseline output." },
      { title: "Add a grand role", detail: "'You are a world-class expert in X.' Compare — usually barely different." },
      { title: "Add a specific role", detail: "Constrain it with market, budget, years, region. Compare again — this is where it moves." },
      { title: "Add the audience", detail: "Who reads this and what they already know." },
      { title: "Run a three-role panel", detail: "Use the panel prompt below on a real decision." },
      { title: "Fact-check the confident bits", detail: "Pick the two most authoritative-sounding claims and verify them." }
    ],
    prompts: [
      {
        label: "Specific role, specific audience",
        text: "You are a [role] with [X] years working specifically with [narrow market] in [region], on budgets around [scale].\nYou are explaining to [audience] who knows [what they know] and cares about [what they care about].\nTask: [task].\nUse their vocabulary, not yours."
      },
      {
        label: "Three-role panel — for decisions",
        text: "I am considering [decision].\nGive me three separate assessments:\n1) As a finance person — what does this cost and what is the downside case?\n2) As a customer — why would I not buy this?\n3) As an operations person — what breaks when this scales?\nEach under 120 words. Then state where the three disagree most sharply — that is what I most need to think about."
      },
      {
        label: "Brand persona block — save and reuse",
        text: "BRAND PERSONA (apply to everything below):\nWe are [brand], we serve [audience]. We sound [3 adjectives]. We always [habit]. We never [habit]. Our stance on [topic] is [position]. We avoid [words/claims].\nNow: [task]."
      }
    ],
    mistakes: [
      "Believing a role improves factual accuracy. It improves tone.",
      "Using grand titles instead of specific constraints.",
      "Setting the role but never the audience.",
      "Trusting jargon-heavy output more because it sounds expert.",
      "Asking for medical, legal or financial specifics behind a role and acting on the answer without a real professional."
    ],
    homework: {
      task: "Take a real decision you are facing and run the three-role panel on it. Write down the sharpest disagreement between the three, and what you would do about it.",
      deliverable: "Three assessments plus the disagreement that matters most",
      time: "25 minutes"
    },
    quiz: [
      {
        q: "What does adding a role reliably change?",
        options: ["Factual accuracy", "Tone, vocabulary and what it considers", "Response speed", "Token cost"],
        answer: 1,
        why: "Roles shape how it sounds and what it raises — not what it actually knows."
      },
      {
        q: "Which role framing is stronger?",
        options: ["'You are a world-class expert'", "'You are a performance marketer who runs Meta ads for Indian D2C brands under ₹1 lakh/month'", "'You are very intelligent'", "'You are the best in the world'"],
        answer: 1,
        why: "Specific constraints — market, budget, region — change the output. Grand titles do not."
      },
      {
        q: "Why is a confident expert persona a risk?",
        options: ["It uses more tokens", "It raises authority without raising accuracy", "It is slower", "It refuses more often"],
        answer: 1,
        why: "An authoritative wrong answer is much harder to catch than a hedged one."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Claude", url: "https://claude.ai" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "pe-06": {
    readTime: "12 min read",
    intro: "This is the lesson that pays for the course. Content is where prompting turns into billable work — blogs, scripts, ads, emails. The difference between output you publish and output you bin is entirely in the prompt structure, and here are the ones that hold up.",
    sections: [
      {
        heading: "1. Never ask for the finished piece first",
        body: [
          "Asking for a full blog post in one shot gives you a mediocre full blog post, and fixing it means rewriting everything.",
          "Ask for the outline. Approve or correct it. Then ask for the draft. Correcting an outline takes thirty seconds; correcting a finished draft takes twenty minutes."
        ],
        callout: { type: "tip", text: "The rule for anything over 300 words: outline first, draft second. It feels slower and is dramatically faster." }
      },
      {
        heading: "2. The angle is the work",
        body: [
          "Ten people prompting about 'AI for small business' get the same article. The prompt that produces something worth reading specifies an angle — a position, a tension, a specific reader.",
          "Ask for angles before you ask for content: 'Give me 10 angles on this topic, each with a different position. Rank them by how few other people are saying it.'"
        ]
      },
      {
        heading: "3. Structures that hold up",
        body: ["Give the model a skeleton and it fills it well. Leave it open and it produces mush."],
        list: [
          "Blog — hook, the problem stated plainly, why the common advice fails, your approach, one worked example, what to do Monday morning",
          "Ad — one promise, one proof, one objection removed, one action",
          "Email — reason for writing in line one, the value, one clear ask, no postscript filler",
          "Script — hook in 3 seconds, problem, three points, call to action",
          "Sales page — problem, promise, what you get, proof, objections, price, action"
        ]
      },
      {
        heading: "4. Editing prompts do more than writing prompts",
        body: [
          "Most people stop at generation. The professionals spend their prompts on editing.",
          "Cut 30 percent without losing meaning. Replace every abstract claim with a concrete one. Find the weakest paragraph and rewrite only that. Read it as a sceptical customer and list the objections it fails to answer."
        ]
      },
      {
        heading: "5. Making it not sound like AI",
        body: [
          "The tells are consistent: uniform paragraph lengths, everything in threes, no position taken, no specific names or numbers, and a vocabulary of delve, moreover, unlock, game-changer, in today's fast-paced world.",
          "Strip them explicitly, then add the one thing AI cannot supply — your own example, your own number, your own opinion. That 20 percent is what makes it yours."
        ],
        callout: { type: "warn", text: "Never publish AI-generated statistics, quotes or case studies without verifying them. Invented numbers in a published piece are the fastest way to destroy your credibility." }
      },
      {
        heading: "6. Repurposing — one idea, many formats",
        body: [
          "The economics of content only work when one piece of thinking becomes many assets.",
          "One good article becomes a LinkedIn post, a reel script, a carousel, an email and three tweets — each rewritten for the platform, not copy-pasted across it."
        ]
      }
    ],
    steps: [
      { title: "Pick a real topic", detail: "Something you would actually publish." },
      { title: "Get 10 angles", detail: "Use the angles prompt. Pick the one least-said." },
      { title: "Outline only", detail: "Approve or fix the outline before any draft exists." },
      { title: "Draft against the outline", detail: "With your style guide from lesson 4 pasted in." },
      { title: "Run the editing pass", detail: "Cut 30 percent, then de-slop." },
      { title: "Add your 20 percent", detail: "One real example, one number, one opinion — by hand." },
      { title: "Repurpose", detail: "Turn it into four other formats using the repurposing prompt." }
    ],
    prompts: [
      {
        label: "Angles before content",
        text: "Topic: [topic]. Audience: [who].\nGive me 10 angles on this — each taking a different position, not just a different subheading. For each: the angle in one line, who it would annoy, and how commonly it is already said (rare / occasional / everywhere).\nDo not write any content yet."
      },
      {
        label: "Outline first — do not skip this",
        text: "Angle: [chosen angle]. Audience: [who]. Target length: [X] words.\nGive me only an outline: H2 headings with one line under each on what it will argue. Mark which section carries the main argument.\nDo not write the draft. I will approve the outline first."
      },
      {
        label: "Draft against an approved outline",
        text: "Write the full draft following this approved outline exactly: [paste outline].\nMy style guide: [paste].\nRules: vary sentence and paragraph length; take a clear position at least twice; include at least one concrete example with real specifics; no invented statistics; do not use delve, moreover, furthermore, unlock, game-changer, or 'in today's fast-paced world'."
      },
      {
        label: "The editing pass",
        text: "Here is my draft: [paste].\n1) Cut 30% without losing any argument.\n2) Replace every vague claim with a concrete one, or mark it [NEEDS REAL DATA] if you cannot.\n3) Identify the weakest paragraph and rewrite only that.\n4) List 3 objections a sceptical reader would have that the piece fails to answer."
      },
      {
        label: "Repurpose into five formats",
        text: "Take this piece: [paste]. Produce: 1 LinkedIn post (no cringe, no one-line-paragraph gimmick), 1 reel script with on-screen directions, 1 eight-slide carousel outline, 1 email with subject line, 3 tweets. Rewrite for each platform — do not copy-paste the same text across them."
      }
    ],
    mistakes: [
      "Asking for the finished piece in one shot.",
      "Skipping the angle step and producing the same article everyone else has.",
      "Generating and publishing without an editing pass.",
      "Publishing AI-generated statistics or quotes unverified.",
      "Copy-pasting the same text across every platform."
    ],
    homework: {
      task: "Take one topic through the full pipeline: 10 angles, pick one, outline, draft with your style guide, editing pass, then add one real example and one opinion by hand. Finish by repurposing it into two other formats.",
      deliverable: "One publishable piece plus two repurposed versions",
      time: "50 minutes"
    },
    quiz: [
      {
        q: "What should you ask for before a draft?",
        options: ["A title", "An outline you can approve", "A word count", "A conclusion"],
        answer: 1,
        why: "Correcting an outline takes seconds; correcting a finished draft takes far longer."
      },
      {
        q: "Why ask for angles first?",
        options: ["It saves tokens", "Without an angle you get the same generic piece everyone else gets", "It is faster", "It improves grammar"],
        answer: 1,
        why: "The angle is what makes a piece worth reading — and worth being yours."
      },
      {
        q: "What must never be published unverified?",
        options: ["Headings", "AI-generated statistics, quotes and case studies", "Bullet lists", "Calls to action"],
        answer: 1,
        why: "Models invent plausible-looking numbers and sources. Publishing them destroys credibility."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Claude — strong long-form writing", url: "https://claude.ai" },
      { label: "Grammarly", url: "https://www.grammarly.com" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "pe-07": {
    readTime: "11 min read",
    intro: "Image prompting follows completely different rules from text prompting. Text models want instructions; image models want description. Get that distinction and your images stop looking like clip art.",
    sections: [
      {
        heading: "1. Describe, do not instruct",
        body: [
          "For text you write commands: 'Write five captions.' For images that phrasing wastes words.",
          "Image models respond to description of a finished scene. Not 'create an image of a tiffin box' but 'a steel tiffin box on a worn wooden table, morning light from a window on the left'. You are describing a photograph that already exists."
        ],
        callout: { type: "note", text: "Drop 'create an image of', 'generate a picture showing', 'please make me'. Every word should describe the scene, not request it." }
      },
      {
        heading: "2. The six components",
        body: ["Include these and the output looks deliberate rather than accidental."],
        list: [
          "Subject — what it is, with material and condition. 'A steel tiffin box, slightly scratched'",
          "Setting — where, and what surrounds it",
          "Style — photograph, flat vector, watercolour, 3D render, line art",
          "Lighting — soft window light, golden hour, studio softbox, harsh midday",
          "Camera — close-up, wide, 45-degree, shallow depth of field, overhead flat lay",
          "Mood and palette — warm and premium, cool and clinical, muted earth tones"
        ]
      },
      {
        heading: "3. Lighting does most of the work",
        body: [
          "If you change one thing to make an image look professional rather than generated, change the lighting description.",
          "'Soft natural window light from the left with gentle shadows' produces a fundamentally different image from no lighting instruction at all. Photographers know lighting is the craft; the same applies here."
        ]
      },
      {
        heading: "4. Aspect ratio belongs in the prompt",
        body: ["Cropping later costs resolution and ruins composition. State it upfront."],
        list: [
          "1:1 — Instagram post",
          "9:16 — reel, story, Short",
          "16:9 — YouTube thumbnail, website hero",
          "3:4 — A4 poster or flyer for print",
          "21:9 — wide banner"
        ]
      },
      {
        heading: "5. Negative prompts",
        body: [
          "State what must not appear. This removes the model's default habits, which are the source of most disappointing output.",
          "A reliable default to append: no text, no watermark, no logo, no distorted hands or fingers, natural skin texture, not over-saturated, no extra limbs."
        ]
      },
      {
        heading: "6. Text in images, and the law",
        body: [
          "Image models still misspell text. For anything with words — a poster, an offer, a name — generate the image clean and add the text in Canva. The text layer stays sharp and editable.",
          "Two legal cautions for India: do not generate a real person's face for commercial use without permission, and do not reproduce brand logos. Commercial rights to your generated images depend on the tool's terms — read them once before selling client work."
        ],
        callout: { type: "warn", text: "If you use an AI image in a product listing or ad, include a real photo of the actual product too. AI-only product imagery invites complaints and platform action." }
      }
    ],
    steps: [
      { title: "Write a bad prompt on purpose", detail: "'A nice poster for my shop.' Look at the result." },
      { title: "Rebuild with all six components", detail: "Subject, setting, style, lighting, camera, mood. Same tool." },
      { title: "Add the aspect ratio", detail: "Match the platform you will actually post to." },
      { title: "Add the negative prompt", detail: "Append the default block below." },
      { title: "Change only the lighting", detail: "Run twice with two lighting descriptions. This shows you how much it carries." },
      { title: "Finish in Canva", detail: "Add text, logo and contact details as real layers." }
    ],
    prompts: [
      {
        label: "Product photograph",
        text: "Professional product photograph of [product, material, condition], on a [marble / weathered wood / plain white] surface, [setting detail] in the soft-focus background. Soft natural window light from the left, gentle shadows. 45-degree angle, shallow depth of field. Warm premium tones, clean commercial e-commerce style. Square 1:1.\nNegative: no text, no watermark, no logo, no distorted shapes, not over-saturated."
      },
      {
        label: "Festival poster with space for text",
        text: "Vibrant [Diwali / Eid / Ganesh Utsav] promotional background for an Indian [shop type]. Warm golden lighting, traditional Indian motifs at the edges, deep rich colours. Large clean uncluttered area in the centre reserved for text. A4 portrait 3:4, modern premium finish.\nNegative: no text, no watermark, no faces."
      },
      {
        label: "YouTube thumbnail",
        text: "Bold cinematic YouTube thumbnail. Central subject: [subject], sharply lit against a dark simple background. High contrast, dramatic side lighting, strong focal point, generous empty space on the right for a headline. 16:9.\nNegative: no text, no watermark, no distorted hands or faces."
      },
      {
        label: "Have AI write image prompts for you",
        text: "You are an expert image prompt writer. I need an image of [what you need] for [where it will be used].\nWrite 3 complete prompts, each in a different visual style. Every one must specify subject, setting, style, lighting, camera angle, colour mood, aspect ratio and a negative prompt. Output the prompts only — no explanation."
      }
    ],
    mistakes: [
      "Writing instructions ('create an image of') instead of describing a finished scene.",
      "Leaving lighting unspecified — the single biggest quality lever.",
      "Forgetting aspect ratio and cropping later.",
      "Trying to get the model to render text correctly instead of adding it in Canva.",
      "Generating celebrity faces or brand logos for commercial use."
    ],
    homework: {
      task: "Create one image you would actually use — a product shot or a festival creative. Build the prompt with all six components plus a negative prompt, generate it, take it into Canva, add your text and logo, and export the final file.",
      deliverable: "One finished creative plus the prompt that produced it",
      time: "40 minutes"
    },
    quiz: [
      {
        q: "How should an image prompt be phrased?",
        options: ["As an instruction to create something", "As a description of a scene that already exists", "As a question", "As a list of keywords only"],
        answer: 1,
        why: "Image models respond to description of a finished image, not to requests."
      },
      {
        q: "Which single element most improves professionalism?",
        options: ["Lighting description", "Longer prompt", "More adjectives", "Higher resolution"],
        answer: 0,
        why: "Lighting is the craft in photography, and the same holds for generated images."
      },
      {
        q: "Where should poster text come from?",
        options: ["The image model", "Canva or a design tool, as a real text layer", "Handwritten", "It should be left out"],
        answer: 1,
        why: "Image models misspell text. A design-tool text layer is always correct and stays editable."
      }
    ],
    resources: [
      { label: "Canva Magic Media", url: "https://www.canva.com" },
      { label: "Midjourney", url: "https://www.midjourney.com" },
      { label: "Ideogram — best at text in images", url: "https://ideogram.ai" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "pe-08": {
    readTime: "10 min read",
    intro: "Every prompt fails eventually. The difference between someone who gets good at this and someone who gives up is whether they can diagnose why. This lesson is the debugging method — treat a failing prompt like a bug, not like bad luck.",
    sections: [
      {
        heading: "1. The four failure types",
        body: ["Almost every disappointing output is one of these, and each has a different fix. Naming it first saves you from randomly rewriting."],
        list: [
          "Wrong shape — right content, wrong structure or length. Fix: FORMAT.",
          "Wrong content — it answered a different question. Fix: TASK, stated as one imperative sentence.",
          "Wrong voice — accurate but sounds nothing like you. Fix: EXAMPLES.",
          "Wrong facts — confident and incorrect. Fix: give it the source material, or verify externally. No phrasing solves this."
        ],
        callout: { type: "tip", text: "Name the failure type before you touch the prompt. People waste hours rewriting the whole thing when only one component was wrong." }
      },
      {
        heading: "2. Negative prompting for text",
        body: [
          "Negative instructions work for text as well as images, and they are under-used.",
          "Do not use these words. Do not invent statistics. Do not leave placeholder text. Do not restate my question. Do not present both sides — take a position. Do not use headings. Each of these removes a specific default behaviour you did not ask for."
        ]
      },
      {
        heading: "3. When the model ignores an instruction",
        body: ["It happens, and there are three reliable causes."],
        list: [
          "The instruction was buried in the middle of a long prompt — move it to the end, which carries most weight",
          "Two instructions contradicted each other — 'be detailed' and 'under 50 words' cannot both win",
          "It was phrased as a preference rather than a rule — 'try to keep it short' is optional; 'maximum 50 words' is not"
        ]
      },
      {
        heading: "4. The context problem in long chats",
        body: [
          "After many turns the model weights recent messages heavily and earlier instructions fade. Output that was good at turn three degrades by turn thirty.",
          "The fix is not a cleverer prompt. Start a fresh chat and paste in only what still matters. Long chats are the most common cause of mysteriously worsening quality."
        ]
      },
      {
        heading: "5. Ask the model to debug itself",
        body: [
          "Paste your prompt and the disappointing output, and ask what in the prompt caused it. This works surprisingly well because the model can see the ambiguity you could not.",
          "Then ask for the corrected prompt — not the corrected output. You want the fix to be reusable."
        ]
      },
      {
        heading: "6. Version your prompts",
        body: [
          "When a prompt works, save it with a note on what it is for and what you changed. When you improve it, keep the old version.",
          "This sounds like bureaucracy for one prompt. Across a hundred, it is the difference between a library and a pile."
        ]
      }
    ],
    steps: [
      { title: "Find a prompt that disappointed you", detail: "A real one from your own history." },
      { title: "Classify the failure", detail: "Shape, content, voice or facts. Just one." },
      { title: "Change only that component", detail: "Resist rewriting everything. Change one thing and re-run." },
      { title: "Move critical rules to the end", detail: "If something is being ignored, put it last." },
      { title: "Check for contradictions", detail: "Read your prompt for instructions that cannot both be satisfied." },
      { title: "Ask the model to diagnose", detail: "Use the debug prompt below and save the corrected version." }
    ],
    prompts: [
      {
        label: "Debug a failing prompt",
        text: "Here is a prompt I used:\n[paste prompt]\n\nHere is the output it gave, which was not what I wanted:\n[paste output]\n\nWhat I actually wanted was: [describe].\n\nTell me: 1) which part of my prompt caused this, 2) whether any two instructions contradict, 3) what was ambiguous. Then give me the corrected prompt — not the corrected output."
      },
      {
        label: "Universal negative block for text",
        text: "Do not: use the words delve, moreover, furthermore, unlock, game-changer, or 'in today's fast-paced world'; invent statistics, studies or quotes; leave placeholder text like [Company Name]; restate my question back to me; present both sides without taking a position; exceed [X] words."
      },
      {
        label: "Restart a degraded long chat",
        text: "I am starting fresh because our earlier chat got long. Here is everything that still matters:\nCONTEXT: [paste]\nSTYLE GUIDE: [paste]\nWHAT WE ALREADY DECIDED: [paste]\nNow: [new task]."
      }
    ],
    mistakes: [
      "Rewriting the whole prompt when one component was wrong.",
      "Burying the most important rule in the middle of a long prompt.",
      "Giving contradictory instructions and blaming the model.",
      "Phrasing rules as preferences — 'try to' is read as optional.",
      "Continuing in a 40-message chat and wondering why quality dropped.",
      "Asking for the corrected output instead of the corrected prompt."
    ],
    homework: {
      task: "Take a prompt that genuinely disappointed you. Classify the failure type, fix only that component, and re-run. Then run the debug prompt on it and compare your diagnosis with the model's. Save the corrected version to your library.",
      deliverable: "Original prompt, your diagnosis, the model's diagnosis, and the fixed prompt",
      time: "25 minutes"
    },
    quiz: [
      {
        q: "The output is accurate but sounds nothing like you. What do you fix?",
        options: ["Format", "Examples", "Task", "Role"],
        answer: 1,
        why: "Voice problems are solved by showing examples of your writing, not by describing it."
      },
      {
        q: "An instruction keeps getting ignored. What is the most likely cause?",
        options: ["The model is broken", "It was buried mid-prompt, contradicted, or phrased as a preference", "You need the paid plan", "The prompt is too short"],
        answer: 1,
        why: "Position, contradiction and soft phrasing are the three usual causes."
      },
      {
        q: "Quality has degraded over a long chat. What is the fix?",
        options: ["A cleverer prompt", "Start a fresh chat with only what still matters", "Ask it to try harder", "Switch models"],
        answer: 1,
        why: "Earlier instructions fade as the conversation grows. A clean restart restores them."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Claude", url: "https://claude.ai" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "pe-09": {
    readTime: "12 min read",
    intro: "Everything so far has been one prompt at a time, typed by you. This lesson is about stopping that — packaging your best prompts so they run without being retyped, and chaining them so one output feeds the next. This is where prompting turns into a system.",
    sections: [
      {
        heading: "1. Custom GPTs and Projects",
        body: [
          "Both ChatGPT and Claude let you save a set of instructions plus reference files, so every conversation starts already knowing your context.",
          "Instead of pasting your style guide and business background into every chat, you configure it once. Every conversation in that Project begins with it loaded."
        ],
        list: [
          "ChatGPT Projects — persistent instructions and files across chats. Available on free and paid.",
          "ChatGPT Custom GPTs — a shareable configured assistant. Requires a paid plan to build.",
          "Claude Projects — instructions plus a knowledge base of documents.",
          "Gemini Gems — Google's equivalent, tied to your Workspace."
        ],
        callout: { type: "tip", text: "Your first Project should be the one for the work you do most. Load it with your style guide, your business context, and the three prompts you use weekly." }
      },
      {
        heading: "2. What to put in the instructions",
        body: ["Treat it as onboarding a permanent assistant, not writing a prompt."],
        list: [
          "Who I am and what my business does",
          "Who my audience is and what they care about",
          "My writing style guide from lesson 4",
          "Rules that always apply — the negative block, the format defaults",
          "What to do when unsure: 'ask me rather than inventing'",
          "What is out of scope: 'do not give legal or medical specifics'"
        ]
      },
      {
        heading: "3. Prompt chains",
        body: [
          "A chain is a sequence where each output becomes the next input. It works because each step is simple and checkable, rather than one giant prompt trying to do everything.",
          "A content chain: research the topic → pick an angle → outline → draft → edit → repurpose. Six focused prompts, each producing something you can inspect before moving on."
        ]
      },
      {
        heading: "4. Why chains beat one giant prompt",
        body: [
          "A single enormous prompt fails silently — you cannot tell which instruction was dropped.",
          "A chain fails visibly at a specific step, which you can fix without redoing the rest. You can also swap one step without rebuilding the whole thing, and reuse individual steps across different chains."
        ]
      },
      {
        heading: "5. Chaining across tools with automation",
        body: [
          "Once a chain is stable, the handoffs can run without you. A row added to a Google Sheet triggers a prompt, whose output writes back to the sheet and pings you on WhatsApp.",
          "Zapier and Make both have direct AI steps now, so this needs no code. Google Apps Script is free and equally capable if you can paste a script."
        ],
        callout: { type: "warn", text: "Never let a chain send output to customers unreviewed. Automate the generation; keep a human on the send button. One bad auto-message reaches everyone at once." }
      },
      {
        heading: "6. Knowing when to stop automating",
        body: [
          "Automate the repetitive and rule-bound. Keep the judgement calls manual.",
          "If a task needs you to decide something different each time, a chain will produce confident nonsense. The skill is knowing which half of your work is which."
        ]
      }
    ],
    steps: [
      { title: "Create your first Project", detail: "In ChatGPT or Claude. Name it after the work you do most." },
      { title: "Write the instructions", detail: "Use the Project instructions template below. Include your style guide." },
      { title: "Upload reference files", detail: "Your brand doc, price list, past best work — whatever you keep re-explaining." },
      { title: "Test that context persists", detail: "Open a new chat inside the Project and ask something that needs the context. It should already know." },
      { title: "Build one chain by hand", detail: "Run the six content steps as separate prompts. Note where it breaks." },
      { title: "Automate one handoff", detail: "Connect just one step to a Sheet or an email using Zapier, Make or Apps Script." }
    ],
    prompts: [
      {
        label: "Project instructions — paste into a Custom GPT or Project",
        text: "WHO I AM: [role] running [business] in [city], serving [audience].\nWHAT THEY CARE ABOUT: [list].\nMY STYLE GUIDE: [paste your 10 points from lesson 4].\nALWAYS: take a clear position; use concrete examples with real specifics; vary sentence length; use Indian context and ₹ pricing.\nNEVER: invent statistics, studies or quotes; use delve, moreover, furthermore, unlock, game-changer; leave placeholder text; give legal, medical or investment specifics.\nWHEN UNSURE: ask me a clarifying question rather than assuming.\nDEFAULT FORMAT: plain English, no headings unless I ask."
      },
      {
        label: "Design a chain for your own task",
        text: "I want to build a repeatable prompt chain for this task: [describe the task end to end].\nBreak it into 4-6 steps where each step's output becomes the next step's input.\nFor each step give: its purpose, the exact prompt, what its output should look like, and how I would know it failed.\nFlag which steps genuinely need my judgement and should not be automated."
      },
      {
        label: "Chain step — hand one output to the next",
        text: "STEP [N] of a chain.\nInput from the previous step:\n[paste previous output]\n\nYour job in this step only: [one specific task].\nOutput format: [exact shape].\nDo not do anything belonging to later steps. If the input looks wrong or incomplete, say so instead of proceeding."
      },
      {
        label: "Apps Script for a chain handoff",
        text: "Write a Google Apps Script that: [describe the trigger and action — e.g. 'when a new row is added to Sheet1, send the text in column B to an API and write the reply into column C'].\nGive the full code with a comment on every line, plus step-by-step instructions on where to paste it and how to set the trigger. I am non-technical."
      }
    ],
    mistakes: [
      "Building one giant prompt instead of a chain you can inspect step by step.",
      "Re-pasting your style guide into every chat instead of configuring a Project once.",
      "Automating a task that needs judgement every time.",
      "Letting a chain send customer-facing output without review.",
      "Building the automation before the manual chain reliably works."
    ],
    homework: {
      task: "Set up one Project with real instructions and at least one reference file. Then run one chain of at least four steps by hand for a task you repeat, noting which step is weakest.",
      deliverable: "A configured Project plus a documented four-step chain",
      time: "45 minutes"
    },
    quiz: [
      {
        q: "Why is a chain better than one large prompt?",
        options: ["It costs less", "It fails visibly at a specific step you can fix and reuse", "It is faster", "It uses a better model"],
        answer: 1,
        why: "A giant prompt fails silently. A chain shows you exactly which step broke."
      },
      {
        q: "What belongs in Project instructions?",
        options: ["Only the current task", "Context, style guide and always/never rules that apply every time", "Nothing — type it each time", "Only file uploads"],
        answer: 1,
        why: "It is onboarding a permanent assistant: everything you would otherwise re-explain."
      },
      {
        q: "Which task should stay manual?",
        options: ["Formatting a weekly report", "Anything needing a different judgement call each time", "Data entry", "Generating draft captions"],
        answer: 1,
        why: "Chains apply fixed rules. Where rules do not hold, they produce confident nonsense."
      }
    ],
    resources: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Claude Projects", url: "https://claude.ai" },
      { label: "Zapier", url: "https://zapier.com" },
      { label: "Make.com", url: "https://www.make.com" },
      { label: "Google Apps Script", url: "https://script.google.com" }
    ]
  },

  /* ------------------------------------------------------------------ */
  "pe-10": {
    readTime: "10 min read",
    intro: "The last lesson, and the one that determines whether any of this survives. Everyone finishes a prompting course able to write good prompts. Almost nobody keeps them. The people who compound are the ones who built a library — and this lesson builds yours.",
    sections: [
      {
        heading: "1. Why a library beats memory",
        body: [
          "A good prompt takes 15 minutes to develop and 5 seconds to reuse. If you do not save it, you pay the 15 minutes again every time.",
          "The compounding is the point. After six months a working library is a genuine asset — it is why an experienced operator produces in an hour what a beginner takes a day over."
        ],
        callout: { type: "note", text: "Your bonus pack in this course includes 100 prompt templates to start from. But the ones you write for your own work will outperform any pack, because they carry your context." }
      },
      {
        heading: "2. Organise by job, not by tool",
        body: [
          "Most people file prompts under 'ChatGPT prompts' and 'Midjourney prompts'. That is useless — you never think 'I need a ChatGPT thing'. You think 'I need to reply to this complaint'.",
          "File by the job to be done: Client communication, Content production, Research, Admin, Design briefs, Hiring. When you need one you will find it in seconds."
        ]
      },
      {
        heading: "3. What to record with each prompt",
        body: ["A bare prompt with no notes is nearly useless six months later."],
        list: [
          "The prompt itself, with [placeholders] in square brackets",
          "What job it does, in one line",
          "Which model you used, since output varies between them",
          "One line on what makes it work — the part you would not want to lose",
          "The date, so you know when the tool details might have gone stale"
        ]
      },
      {
        heading: "4. Where to keep it",
        body: [
          "The tool matters far less than the habit. Any of these works: a Google Doc with headings, a Notion database with tags, a spreadsheet, or Projects and Custom GPTs for the ones you use constantly.",
          "Pick the one you will actually open. A perfect Notion system you never use loses to a messy doc you do."
        ]
      },
      {
        heading: "5. Prune it",
        body: [
          "A library of 300 prompts you never search is a graveyard. Twice a year, delete what you have not used and promote what you use weekly into a Project.",
          "Tool-specific prompts date fastest — pricing, free-tier limits, model names. Check anything older than a year before trusting it."
        ]
      },
      {
        heading: "6. Where to go from here",
        body: [
          "Prompting is the layer under everything else. With it solid, the specialised courses get easier: freelancing if you want client income, the earning course if you want multiple streams, trading if that is your field.",
          "But the honest next step is not another course. It is using this for thirty days on real work until the six-part structure is automatic and you stop thinking about it."
        ],
        callout: { type: "tip", text: "The measure of this course working is not that you remember the techniques. It is that your rework time drops — you edit less because the first output is closer." }
      }
    ],
    steps: [
      { title: "Create the library", detail: "One doc or database. Six headings by job, not by tool." },
      { title: "Seed it from this course", detail: "Move every prompt you saved from lessons 1-9 into the right section." },
      { title: "Add the bonus pack", detail: "Bring across the ones from the 100-prompt bonus that fit your actual work. Ignore the rest." },
      { title: "Annotate the top ten", detail: "One line each on what makes it work." },
      { title: "Promote your top three", detail: "Turn them into a Project or Custom GPT so they run without pasting." },
      { title: "Diarise a prune", detail: "Six months out. Delete the unused, promote the weekly." }
    ],
    prompts: [
      {
        label: "Turn a working prompt into a reusable template",
        text: "Here is a prompt that worked well for me: [paste].\nRewrite it as a reusable template: replace everything specific to this one case with [clearly named placeholders], keep every part that is doing real work, and add a one-line note on what makes it effective. Do not make it longer than it needs to be."
      },
      {
        label: "Audit your library",
        text: "Here are the prompts in my library: [paste titles and one-line purposes].\nTell me: 1) which look redundant, 2) which jobs I do regularly that have no prompt yet, 3) which three are worth turning into a saved Project. Be blunt about what to delete."
      },
      {
        label: "Your personal 30-day prompting plan",
        text: "I am a [role] doing [main tasks]. I have just finished a prompt engineering course covering the six-part structure, chain-of-thought, few-shot, roles, content pipelines, image prompting, debugging and chains.\nBuild me a 30-day plan to make this automatic. One technique per few days, applied to my real work, with a specific thing to produce each time. Table format. Do not overload it — 20 minutes a day maximum."
      }
    ],
    mistakes: [
      "Finishing the course without building the library — the single biggest waste.",
      "Filing prompts by tool instead of by job.",
      "Saving prompts with no note on what makes them work.",
      "Hoarding hundreds of prompts you never search.",
      "Moving straight to another course instead of using this on real work for a month."
    ],
    homework: {
      task: "Build your prompt library with sections by job. Move every prompt you saved during this course into it, add the useful ones from the bonus pack, annotate your top ten, and turn your three most-used into a saved Project or Custom GPT.",
      deliverable: "A working library, organised by job, with three prompts promoted into a Project",
      time: "45 minutes"
    },
    quiz: [
      {
        q: "How should a prompt library be organised?",
        options: ["By tool", "By the job to be done", "By date", "By length"],
        answer: 1,
        why: "You search by the problem in front of you, never by which tool you plan to open."
      },
      {
        q: "What should be saved alongside each prompt?",
        options: ["Nothing", "The job it does, the model, and what makes it work", "Only the date", "A screenshot"],
        answer: 1,
        why: "A bare prompt with no context is close to useless months later."
      },
      {
        q: "What is the real measure that this course worked?",
        options: ["You remember all the techniques", "Your rework time drops because first outputs are closer", "You collected many prompts", "You finished every lesson"],
        answer: 1,
        why: "Less editing is the only outcome that shows up in your actual working day."
      }
    ],
    resources: [
      { label: "AI Basics course", url: "/courses/ai-basics" },
      { label: "AI Freelancing Masterclass", url: "/courses/ai-freelancing" },
      { label: "Notion — for a tagged prompt database", url: "https://www.notion.so" }
    ]
  }
};
