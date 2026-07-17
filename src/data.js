import haecoLobby from './assets/blog/haeco-lobby.jpg';
import haecoEngine from './assets/blog/haeco-engine.jpg';
import cathayPacificAircraft from './assets/blog/cathay-pacific-aircraft.jpg';

export const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About me', href: '/#about' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export const blogPosts = [
  {
    slug: 'haeco-excel-automation',
    title: 'Breaking into the Real World: My Internship Journey at HAECO',
    excerpt: 'A behind-the-scenes look at building a practical automation solution during my internship — and what I learned about change management inside large organisations.',
    tag: 'Operations',
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
  {
    slug: 'aviation-precision-engineering',
    title: 'What aviation taught me about precision in engineering',
    excerpt: "Reflections from working within Cathay Pacific's corporate teams — the rigour of aviation translated into everyday workflow habits and systems thinking.",
    tag: 'Reflections',
    content: [
      { type: 'paragraph', text: 'Full write-up coming soon.' },
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
