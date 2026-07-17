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
    org: 'Personal · Ongoing',
    title: 'SpeakFlow — AI Interview Prep',
    desc: 'Building an AI-powered interview practice tool with voice interaction, countdown timers, and real-time feedback across banking, consulting, and software engineering verticals.',
    tech: ['AI / LLM', 'Voice UX', 'Web Dev'],
    content: [
      'Full write-up coming soon.',
    ],
  },
];
