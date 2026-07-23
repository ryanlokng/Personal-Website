import haecoLobby from './assets/blog/haeco-lobby.jpg';
import haecoEngine from './assets/blog/haeco-engine.jpg';
import cathayPacificAircraft from './assets/blog/cathay-pacific-aircraft.jpg';
import cathayLionDance from './assets/blog/cathay-lion-dance.jpg';
import cathayCityGateNight from './assets/blog/cathay-city-gate-night.jpg';

export const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About me', href: '/#about' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export const blogPosts = [
  {
    slug: 'speakflow-ai-interview-prep',
    title: 'The Interview Panic Button: Building SpeakFlow AI in a 3-Hour Toronto Tech Week Hackathon',
    excerpt: 'How I turned "I have an interview tomorrow and I\'m not ready" into a working voice-AI coach — from a blank Cursor window to a live demo in 180 minutes.',
    tag: 'Hackathon',
    date: 'May 2026',
    content: [
      { type: 'heading', text: 'The idea: a panic button for interviews' },
      { type: 'paragraph', text: 'Everyone knows the feeling. The interview is tomorrow, the job actually matters, and your "prep" is staring at a list of questions and imagining good answers in your head. But an interview isn\'t a reading test — it\'s a speaking test. You can know exactly what to say and still fall apart the moment you have to say it out loud to another human, under pressure, in real time.' },
      { type: 'paragraph', text: "The problem isn't a lack of information. It's a lack of reps. And reps are the one thing you can't get, because you can't summon a realistic interviewer on demand at 11pm the night before." },
      { type: 'paragraph', text: "SpeakFlow AI is that interviewer. It's a panic button for interviews: an AI coach you can practice with by voice, any time, for the exact kind of interview you're walking into." },
      { type: 'heading', text: 'What it actually does' },
      { type: 'paragraph', text: 'Instead of a generic "tell me about yourself" simulator, SpeakFlow lets you dial in the interview you\'re actually facing:' },
      { type: 'list', items: [
        'Pick your field — Banking & Finance, Management Consulting, Software Engineering, Product Management, Marketing & Growth, or Data & Analytics.',
        'Pick the question type — Behavioural, Technical, or Case Study.',
        'Pick the difficulty — Easy, Medium, or Hard.',
      ] },
      { type: 'paragraph', text: "Then it runs a live session. The AI coach greets you, sets the scene, and asks one question at a time — the same way a real interviewer would, instead of dumping a wall of prompts on you. You click the mic and answer out loud, using voice AI, exactly like the real thing. You answer by talking. It listens, scores, and gives you feedback — so the tenth time you say the thing out loud, it's not the first time you've ever said it out loud. That's the whole bet: the practice should feel like the pressure, because that's what actually prepares you for it." },
      { type: 'heading', text: 'Why a hackathon was the right container' },
      { type: 'paragraph', text: 'Three hours is a brutal, beautiful constraint. It forces you to answer one question honestly: what is the smallest version of this that still feels like magic?' },
      { type: 'paragraph', text: 'For SpeakFlow, the magic was never going to be a settings page or user accounts. It was a stranger being able to walk up, pick "Software Engineering, Technical, Hard," hit the mic, and have a real back-and-forth spoken interview with an AI that clearly knew what it was doing. Everything that didn\'t serve that one moment got cut on sight.' },
      { type: 'heading', text: 'The part that almost broke it' },
      { type: 'paragraph', text: 'The scariest thing to demo in a loud room is anything involving a microphone. Voice input is exactly the kind of feature that behaves perfectly at your desk and then betrays you the second there\'s an audience and background noise. Getting the record-and-respond loop reliable enough to survive a live demo — first try, no do-overs — was the wall I spent the back half of the hackathon climbing.' },
      { type: 'heading', text: 'The buzzer' },
      { type: 'paragraph', text: 'When time ran out, SpeakFlow AI did the one thing I needed it to do: someone could pick their interview, hit the mic, and have a real spoken conversation with a coach that asked sharp, role-specific questions and handed back useful feedback. Not a mockup. Not a slide. A live, voice-driven interview simulator built from nothing in a single afternoon.' },
      { type: 'heading', text: 'What I actually took away' },
      { type: 'paragraph', text: 'The technical lessons were real, but the bigger one was about speed of belief. "An on-demand voice AI that runs realistic, role-specific mock interviews" is the kind of idea that used to be a someday-note in your phone — a whole weekend project, minimum. Three hours went from "not enough time to build anything real" to "enough time to build the core of a real product."' },
      { type: 'paragraph', text: "SpeakFlow AI started as a feeling everyone recognizes — that pre-interview panic — and left Toronto Tech Week as something I'd genuinely open the night before an interview. That's the entire reason to show up to a room with a countdown clock: you find out which of your ideas can survive contact with three hours." },
    ],
  },
  {
    slug: 'aviation-precision-engineering',
    title: 'Navigating Two Worlds: My Internship Experience at Cathay Pacific Airways',
    excerpt: "Reflections from working within Cathay Pacific's corporate teams — the rigour of aviation translated into everyday workflow habits and systems thinking.",
    tag: 'Operations',
    date: 'December 2025 – February 2026',
    content: [
      { type: 'paragraph', text: 'My internship at Cathay Pacific Airways marked a very different chapter in my introduction to the corporate and aviation industry. Unlike my previous exposure to the commercial side, this experience placed me within the Flight Operations Department, where I participated in pilot induction. It was a shift not only in function, but in perspective—moving closer to the operational core of aviation, where precision, discipline, and safety define every decision.' },
      { type: 'paragraph', text: "Observing pilot induction offered me a unique vantage point into how one of the world's leading airlines prepares its flight crew. The rigor, structure, and standardization were striking. Every procedure, briefing, and assessment reflected the industry's uncompromising commitment to safety and operational excellence. It became clear that aviation is not just a business—it is a system built on trust, accountability, and the seamless coordination of highly trained professionals." },
      { type: 'image', src: cathayLionDance, alt: 'Celebrating Lunar New Year with the Cathay Pacific team' },
      { type: 'paragraph', text: 'However, what made this experience particularly defining was not just the industry exposure, but the timing. My internship overlapped with one of the most intense academic periods I had faced—exams. Balancing the demands of corporate responsibilities during the day with academic preparation at night quickly turned into a test of endurance. There were moments of real chaos: tight deadlines, mental fatigue, and the constant pressure of switching between two high-stakes environments.' },
      { type: 'image', src: cathayCityGateNight, alt: 'Cathay City at night after a long day balancing work and exams' },
      { type: 'paragraph', text: 'From a broader perspective, this internship reshaped my understanding of the corporate world in a different way. If my previous experience taught me about decision-making and efficiency, Cathay Pacific showed me the human and operational intensity behind those decisions. It highlighted how corporate systems are sustained not just by strategy, but by discipline, training, and the individuals who execute them daily.' },
      { type: 'paragraph', text: 'Looking back, this experience was not defined by ease or balance, but by adaptation. It taught me that entering the professional world is not just about applying knowledge, but about managing competing demands and maintaining performance under pressure. In many ways, the overlap between my internship and exams mirrored the reality of high-responsibility roles—where multiple priorities coexist, and the ability to navigate them becomes a skill in itself.' },
    ],
  },
  {
    slug: 'haeco-excel-automation',
    title: 'Breaking into the Real World: My Internship Journey at HAECO',
    excerpt: 'A behind-the-scenes look at building a practical automation solution during my internship — and what I learned about change management inside large organisations.',
    tag: 'Business Optimisation',
    date: 'June 2025 – August 2025',
    content: [
      { type: 'paragraph', text: 'Stepping into HAECO for the first time marked a transition I had anticipated for years but never fully understood until I experienced it. Moving from academic frameworks into a live corporate environment, was both grounding and eye-opening. As part of the Commercial Department, I quickly realized that optimization in the real world is far more complex than any case study: it is shaped by operational constraints, client expectations, and the constant balancing of cost, efficiency, and safety.' },
      { type: 'image', src: haecoLobby, alt: 'Standing in front of the HAECO logo in the office lobby' },
      { type: 'paragraph', text: 'My role centered on optimization work, which initially sounded familiar given my academic background. However, the application was entirely different. Instead of working with clean datasets and controlled assumptions, I was dealing with imperfect information, time-sensitive decisions, and interconnected systems. Whether analyzing maintenance scheduling, resource allocation, or cost-efficiency strategies, every adjustment had ripple effects across operations. This experience reshaped my understanding of "optimization" from a purely quantitative exercise into a multidimensional decision-making process that requires both analytical rigor and practical judgment.' },
      { type: 'image', src: haecoEngine, alt: 'Standing beneath an aircraft engine in the HAECO hangar' },
      { type: 'paragraph', text: 'What stood out most was the structure and pace of corporate life. Meetings were purposeful, communication was precise, and decisions often needed to be made with incomplete information. Unlike academic settings where time allows for exploration and revision, the business environment demanded clarity and action. I also began to appreciate the importance of cross-functional collaboration—how commercial decisions are deeply intertwined with engineering, operations, and client relationships within the aviation sector.' },
      { type: 'image', src: cathayPacificAircraft, alt: 'A Cathay Pacific aircraft parked in the maintenance hangar' },
      { type: 'paragraph', text: 'Looking back, this experience was less about mastering a specific tool or model and more about recalibrating how I think about problems. It bridged the gap between theory and practice, showing me that real-world impact comes not just from correct analysis, but from actionable insight. My time at HAECO did not just introduce me to the corporate and aviation industry—it fundamentally changed how I approach problem-solving in any professional context.' },
    ],
  },
];

export const projects = [
  {
    slug: 'speakflow-ai-interview-prep',
    org: 'Personal · May 2026',
    link: 'https://speakflow-flax.vercel.app',
    title: 'SpeakFlow — AI Interview Prep',
    detailTitle: 'The Interview Panic Button: Building SpeakFlow AI in a 3-Hour Toronto Tech Week Hackathon',
    subtitle: 'How I turned "I have an interview tomorrow and I\'m not ready" into a working voice-AI coach — from a blank Cursor window to a live demo in 180 minutes.',
    desc: 'A voice-driven AI interview coach that runs realistic, role-specific mock interviews across six career tracks — configurable by field, question type, and difficulty, with live scoring and feedback. Built in a 3-hour hackathon at Toronto Tech Week.',
    tech: ['AI / LLM', 'Voice UX', 'Web Dev'],
    content: [
      { type: 'heading', text: 'The idea: a panic button for interviews' },
      { type: 'paragraph', text: 'Everyone knows the feeling. The interview is tomorrow, the job actually matters, and your "prep" is staring at a list of questions and imagining good answers in your head. But an interview isn\'t a reading test — it\'s a speaking test. You can know exactly what to say and still fall apart the moment you have to say it out loud to another human, under pressure, in real time.' },
      { type: 'paragraph', text: "The problem isn't a lack of information. It's a lack of reps. And reps are the one thing you can't get, because you can't summon a realistic interviewer on demand at 11pm the night before." },
      { type: 'paragraph', text: "SpeakFlow AI is that interviewer. It's a panic button for interviews: an AI coach you can practice with by voice, any time, for the exact kind of interview you're walking into." },
      { type: 'heading', text: 'What it actually does' },
      { type: 'paragraph', text: 'Instead of a generic "tell me about yourself" simulator, SpeakFlow lets you dial in the interview you\'re actually facing:' },
      { type: 'list', items: [
        'Pick your field — Banking & Finance, Management Consulting, Software Engineering, Product Management, Marketing & Growth, or Data & Analytics.',
        'Pick the question type — Behavioural, Technical, or Case Study.',
        'Pick the difficulty — Easy, Medium, or Hard.',
      ] },
      { type: 'paragraph', text: "Then it runs a live session. The AI coach greets you, sets the scene, and asks one question at a time — the same way a real interviewer would, instead of dumping a wall of prompts on you. You click the mic and answer out loud, using voice AI, exactly like the real thing. You answer by talking. It listens, scores, and gives you feedback — so the tenth time you say the thing out loud, it's not the first time you've ever said it out loud. That's the whole bet: the practice should feel like the pressure, because that's what actually prepares you for it." },
      { type: 'heading', text: 'Why a hackathon was the right container' },
      { type: 'paragraph', text: 'Three hours is a brutal, beautiful constraint. It forces you to answer one question honestly: what is the smallest version of this that still feels like magic?' },
      { type: 'paragraph', text: 'For SpeakFlow, the magic was never going to be a settings page or user accounts. It was a stranger being able to walk up, pick "Software Engineering, Technical, Hard," hit the mic, and have a real back-and-forth spoken interview with an AI that clearly knew what it was doing. Everything that didn\'t serve that one moment got cut on sight.' },
      { type: 'heading', text: 'The part that almost broke it' },
      { type: 'paragraph', text: 'The scariest thing to demo in a loud room is anything involving a microphone. Voice input is exactly the kind of feature that behaves perfectly at your desk and then betrays you the second there\'s an audience and background noise. Getting the record-and-respond loop reliable enough to survive a live demo — first try, no do-overs — was the wall I spent the back half of the hackathon climbing.' },
      { type: 'heading', text: 'The buzzer' },
      { type: 'paragraph', text: 'When time ran out, SpeakFlow AI did the one thing I needed it to do: someone could pick their interview, hit the mic, and have a real spoken conversation with a coach that asked sharp, role-specific questions and handed back useful feedback. Not a mockup. Not a slide. A live, voice-driven interview simulator built from nothing in a single afternoon.' },
      { type: 'heading', text: 'What I actually took away' },
      { type: 'paragraph', text: 'The technical lessons were real, but the bigger one was about speed of belief. "An on-demand voice AI that runs realistic, role-specific mock interviews" is the kind of idea that used to be a someday-note in your phone — a whole weekend project, minimum. Three hours went from "not enough time to build anything real" to "enough time to build the core of a real product."' },
      { type: 'paragraph', text: "SpeakFlow AI started as a feeling everyone recognizes — that pre-interview panic — and left Toronto Tech Week as something I'd genuinely open the night before an interview. That's the entire reason to show up to a room with a countdown clock: you find out which of your ideas can survive contact with three hours." },
    ],
  },
];
