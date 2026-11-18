export type ProjectCategory = (typeof categories)[number];

export interface Project {
  title: string;
  category: ProjectCategory[];
  shortDescription: string;
  techStack: string[];
  image: string;
  points: string[];
  link: string;
}

export interface experienceType {
    period: string;
    org: string;
    role: string;
    text: string;
    tags: string[];
}

export interface skillsProp {
  title: string;
  items: string[];
}

export const profile = {
    name: "San Shwe Htet",
    shortName: "san.dev",
    email: "sshtet01234@gmail.com",
    github: 'https://github.com/Alien-2301',
    linkedin: 'https://www.linkedin.com/'
}


export const projects: Project[] = [
    {
        title: 'Kanban Board',
        category: ['full stack'],
        shortDescription: 'A drag-and-drop task board backed by a RESTful ASP.NET Core API.',
        techStack: ['ASP.NET Core', 'EF Core', 'SQLite', 'Angular'],
        image: 'linear-gradient(135deg, #162b2a, #1d4d48 55%, #b8e7d4)',
        points: [
        'RESTful API with GET, POST, PUT, PATCH and DELETE endpoints, DTOs and Swagger docs.',
        'EF Core code-first migrations on SQLite; a PATCH endpoint renumbers card positions after every drag-and-drop.',
        'Angular 21 front end with signals, CDK drag-and-drop and RxJS, reloading from the API if a move fails.',
        'Configured CORS and string-serialised enums for a readable JSON contract.',
        ],
        link: 'https://github.com/Alien-2301/Kanban-Board-Revamped.git'
    },
    {
        title: 'Diabetes Risk Predictor',
        category: ['AI / ML'],
        shortDescription: 'A neural network risk model packaged as an interactive Streamlit app.',
        techStack: ['Python', 'Keras', 'scikit-learn', 'Streamlit'],
        image: 'linear-gradient(135deg, #28231d, #71543a 58%, #f2d6aa)',
        points: [
        'Compared neural networks with baselines on the Pima dataset (768 patients).',
        'Chose the model by 5-fold cross-validation (~78%), scoring 73% on held-out data.',
        'Streamlit app reuses the exported training preprocessing, with input range validation.',
        ],
        link: 'https://github.com/Alien-2301/PIMA-Dataset-Neural-Network.git'
    },
    {
        title: 'SynthwavePlayer',
        category: ['Desktop Application', 'Audio Software'],
        shortDescription: 'A dual-deck DJ application built in C++ with JUCE for real-time audio mixing.',
        techStack: ['C++', 'JUCE', 'juce_dsp', 'OOP'],
        image: 'linear-gradient(135deg, #1a0b2e, #7b2cbf 55%, #ff6ec7)',
        points: [
            'Mixes two tracks with per-deck controls, a waveform view, hot cues, drag-and-drop loading and a BPM readout.',
            'Built a custom audio chain for file reading, variable-speed playback (0.5x to 2.0x), a 3-band EQ and mixing.',
            'Separated the audio engine, UI and persistence into classes, saving cues, EQ and library data to CSV.',
        ],
        link: 'https://github.com/Alien-2301/OOP-JUCE',
    }
]


export const categories = ['full stack', 'Node.js', 'AI/ML']

export const stats = [
    // {number: `${projects.length}`, label: 'Projects'},
    { number: '04', label: 'Projects'},
    { number: '2027', label: 'Graduating' },
]


export const strength = [
      {
    icon: '{ }',
    title: 'Backend APIs',
    text: 'RESTful ASP.NET Core APIs with EF Core, LINQ, DTOs and Swagger docs.',
  },
  {
    icon: '</>',
    title: 'Front ends',
    text: 'Angular and React interfaces that talk to a clear JSON contract.',
  },
  {
    icon: 'ƒ(x)',
    title: 'Data and ML',
    text: 'Pandas, scikit-learn and Keras, with honest evaluation on held-out data.',
  },
]

// ---------- EXPERIENCE (timeline) ----------
export const experience: experienceType[] = [
  {
    period: '2024 — 2027',
    org: 'SIM–UOL',
    role: 'BSc Computer Science (University of London)',
    text: 'Studying software engineering, algorithms and machine learning. Expected graduation 2027.',
    tags: ['C#', 'Algorithms', 'ML'],
  },
  {
    period: 'Dec 2025 — now',
    org: 'SIM–UOL CSSC',
    role: 'Secretary',
    text: 'Maintain the 68-member database and manage council finances and CCA funds.',
    tags: ['Data', 'Finance'],
  },
  {
    period: 'Jan — Feb 2024',
    org: 'KMD',
    role: 'Intern',
    text: 'Data entry and examiner registration; configured the network infrastructure for an exam centre.',
    tags: ['Networking', 'Excel'],
  },
  {
    period: 'May — Jun 2023',
    org: 'Zowasel Agricultural Startup',
    role: 'Intern',
    text: 'Designed and styled web pages with CSS and Tailwind CSS.',
    tags: ['CSS', 'Tailwind'],
  },
  {
    period: '2018 — 2023',
    org: 'ISMGE',
    role: 'Junior Engineer',
    text: 'Gas pressure and density calibration at power plant sites across Burma; recorded calibration data and proofread technical proposals.',
    tags: ['Calibration', 'Technical writing'],
  },
]

export const skills: skillsProp[] = [
  { title: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'Python', 'C++', 'HTML5', 'CSS3'] },
  { title: '.NET', items: ['ASP.NET Core', 'Web API', 'Blazor Server', 'EF Core', 'LINQ', 'Identity', 'DI'] },
  { title: 'Frontend', items: ['Angular', 'React', 'Bootstrap 5', 'Tailwind CSS'] },
  { title: 'Backend and data', items: ['REST APIs', 'Swagger', 'Node.js', 'Express.js', 'SQLite', 'MySQL'] },
  { title: 'Machine learning', items: ['Pandas', 'NumPy', 'scikit-learn', 'TensorFlow / Keras', 'Streamlit'] },
  { title: 'Tools', items: ['GitHub', 'Pull requests', 'Wireshark', 'JUCE', 'Docker'] },
]
