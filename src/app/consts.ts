export const links: Links[] = [{ name: 'home', path: 'home' }, { name: 'services', path: 'services' }, { name: 'resume', path: 'resume/experience' }, { name: 'projects', path: 'projects' }, { name: 'contact', path: 'contact' }]

export const hardSkills: HardSkills = {
    'Front End': [
        { name: 'Html', icon: 'flowbite:html-solid' },
        { name: 'Css', icon: 'flowbite:css-solid' },
        { name: 'Js', icon: 'ri:javascript-fill' },
        { name: 'Tailwind', icon: 'teenyicons:tailwind-solid' },
        { name: 'Vue js', icon: 'mdi:vuejs' },
        { name: 'React js', icon: 'teenyicons:react-solid' },
        { name: 'Zustand', icon: 'eos-icons:compare-states' },
        { name: 'Apolo GraphQl', icon: 'grommet-icons:graph-ql' },
        { name: 'Redux', icon: 'simple-icons:redux' },
        { name: 'Ant Design', icon: 'simple-icons:antdesign' },
    ],
    'Back End': [
        { name: 'Php', icon: 'simple-icons:php' },
        { name: 'Laravel', icon: 'simple-icons:laravel' },
        { name: 'Node Js', icon: 'mdi:nodejs' },
        { name: 'Express Js', icon: 'simple-icons:express' },
        { name: 'TS', icon: 'fluent:code-ts-rectangle-16-filled' },
        { name: 'Inertia', icon: 'devicon-plain:inertiajs-wordmark' },  
        { name: 'Next Js', icon: 'file-icons:nextjs' },
        { name: 'Web Socket', icon: 'simple-icons:socketdotio' },
        { name: 'Hono Js', icon: 'simple-icons:hono' },  
    ],
    'Database System': [
        { name: 'MySql', icon: 'simple-icons:mysql' },
        { name: 'MongoDb', icon: 'devicon-plain:mongodb' },
        { name: 'Prisma', icon: 'simple-icons:prisma' },
        { name: 'PgSql', icon: 'cib:postgresql' },
        { name: 'Drizzle', icon: 'lineicons:drizzle' },
        { name: 'Sqlite', icon: 'file-icons:sqlite' },
        { name: 'Redis', icon: 'devicon-plain:redis-wordmark' },
    ],
    'Mobile Apps': [
        { name: 'React Native', icon: 'teenyicons:react-solid' },
    ],
    'Desktop Apps': [
        { name: 'Electron Js', icon: 'file-icons:electron' },
    ],
    'Devops': [
        { name: 'Git', icon: 'teenyicons:git-solid' },
        { name: 'Github', icon: 'mdi:github' },
        { name: 'Docker', icon: 'mdi:docker' },
        { name: 'Turborepo', icon: 'simple-icons:turborepo' },
    ],
    'Other': [
        { name: 'C', icon: 'bxl:c-plus-plus' },
        { name: 'C++', icon: 'hugeicons:c-programming' },
        { name: 'Java', icon: 'devicon-plain:java' },
        { name: 'Python', icon: 'akar-icons:python-fill' },
    ],
    'Tools': [
        { name: 'Figma', icon: 'solar:figma-bold' },
        { name: 'Notion', icon: 'devicon:notion'},
        { name: 'Trello', icon: 'mdi:trello'}
    ],
};

export const softSkills: SoftSkills[] = [
    { name: 'Project Manager', level: "60"},
    { name: 'Problem Solving', level: "55"},
    { name: 'Team Work', level: "75"},
    { name: 'Time Management', level: "80"},
    { name: 'Adaptability', level: "70"},
    { name: 'Organization', level: "80"},
]

export const languages: SoftSkills[] = [
    { name: 'Arabic', level: "Native or bilingual proficiency"},
    { name: 'English', level: "Professional working proficiency"},
    { name: 'French', level: "Limited working proficiency"}
]

export const projects: Projects[] = [
    {
        id: 1,
        title:'Coding Challenges & Hiring Platform',
        description: '     A Coding Challenges & Hiring Platform connects developers and companies through skill-based challenges, facilitating efficient hiring and learning.',
        frameworks: [ 'Layered Architecture','React Js', 'Type Script', 'Tailwind Css', 'Express Js', 'My sql', 'Docker'],
        deployments: 'https://code-craft-front.vercel.app/',
        code_source: 'https://github.com/code-craft-project',
        image:'01.png' 
    },
    {
        id: 2,
        title:'Novalance',
        description: 'A Novalance is an online platform that connects freelancers with clients who need their services. These websites provide a space where freelancers can showcase their skills, and clients can post projects or tasks that they need help with.',
        frameworks: [ 'Hexagonal Architecture','Vue Js', 'Laravel', 'Tailwind Css', 'Node Js', 'Web Socket','Docker'],
        deployments: 'https://novalance-frontend.vercel.app/',
        code_source: 'https://github.com/kadik23/Novalance?tab=readme-ov-file',
        image:'02.png' 
    },
    {
        id: 3,
        title:'Stanissk Store',
        description: 'Stanissk Store is eCommerce web app, online platform that allows users to browse, search, and purchase products or services over the internet with online payment feature.',
        frameworks: [ 'Hexagonal & MVC Architecture','Laravel','Vue Js','Type Script','Blade', 'Tailwind Css', 'My Sql','Docker','Pusher'],
        deployments: 'https://ecommerce-app-chi-eight.vercel.app/',
        code_source: 'https://github.com/kadik23/ecommerce-app',
        image:'03.png' 
    },
    {
        id: 4,
        title:'Zenstay',
        description: '  Zenstay is an online platform that allows users to reserve rooms for various purposes with online payment methods.',
        frameworks: [ 'MVC Architecture','Mern Stack','Bootstrap','Zustand'],
        deployments: 'https://zenstay-two.vercel.app/',
        code_source: 'https://github.com/kadik23/Zenstay',
        image:'04.png' 
    },
    {
        id: 5,
        title:'Doctor Appointment',
        description: 'A Web Application to make an appointment with Doctors easily. ',
        frameworks: [ 'Modular Monolith Architecture','Mern Stack','Tailwind Css', 'Type Script', 'Prisma',],
        deployments: "https://doctor-appointment-5-btf0.onrender.com/home",
        code_source: 'https://github.com/kadik23/doctor-appointment',
        image:'05.png' 
    },
    {
        id: 6,
        title:'Cs Department Management',
        description: 'Web application to manage the computer science department like Adminstraters, Teachers and Students',
        frameworks: [ 'MVC','Laravel','React Js','Inertia','My Sql', 'Pg Sql', 'Redux', 'TailwindCss'],
        deployments: 'https://cs-department-management.onrender.com/',
        code_source: 'https://github.com/kadik23/cs-department-management',
        image:'07.png' 
    },
    {
        id: 7,
        title:'Law Firm',
        description: 'Web application to share files between lawyers and clients and blog and services feature with online payments',
        frameworks: [ 'MVC Architecture','Next JS','Express Js', 'React-Hook-Form','Tailwind','MySql', 'Docker',],
        deployments: 'https://law-site-beryl.vercel.app/',
        code_source: 'https://github.com/kadik23/law-firm-web-app',
        image:'09.png' 
    },
    {
        id: 8,
        title:'Banquet Hall Management',
        description: 'Desktop application to manage the Banquet Hall like Clients, Reservations, Paiments and Receipts',
        frameworks: [ 'MVC Architecture', 'Electron JS','React JS','Css','Sqlite',],
        deployments: null,
        code_source: 'https://github.com/kadik23/banquet-hall-management',
        image:'08.png' 
    },
    {
        id: 9,
        title:'Techverse',
        description: 'Website for club Which represents all the activities and members of the club',
        frameworks: [ 'React','Shadcn','Tailwind','Typescript',],
        deployments: 'https://techverse-club-two.vercel.app/',
        code_source: 'https://github.com/saidseghirakram/techverse_club',
        image:'06.png' 
    },
]

export const myProjects: Projects[] = projects;

export const contributions: Contribution[] = [
    {
        id: 1,
        name: 'Athar',
        link: 'https://github.com/athar-hackathon/hackathon-backend',
        description: 'Tourists are allowed to volunteer in activities within Algeria, such as cleaning campaigns, tree planting, or group travel.',
        languages: ['Express Js', 'TypeScript', 'PgSql', 'Onion Architecture', 'JWT']
    },
    {
        id: 2,
        name: 'Nextri Projects',
        link: 'https://github.com/example/ecommerce-api',
        description: 'Empowering Developers through Real-World Experience.',
        languages: ['Hono Js', 'PgSql', 'Drizzle', 'JWT', 'Monorepo', 'Commitlint', 'lint-staged', 'Husky', 'Biome Js']
    },
    {
        id: 3,
        name: 'FitVibe',
        link: 'https://github.com/FitVibe/FiteVibe-Backend',
        description: 'Developed Rich exercise database & instructions: 500+ exercises are categorized by muscle groups, equipment or keywords for you.',
        languages: ['MongoDb', 'Express Js', 'TypeScript', 'Layered Architecture', 'JWT', 'OOP']
    },
];

export const experiecntData = [
    {
        duration: '2024 - 2025',
        title:'TechVerse Club',
        content: 'IT Team Leader, Mentoring & Developing and Designing web apps'
    },
    {
        duration: '2024 - Present',
        title:'Freelance · Software Developer',
        content: 'Implementing projects with medium complexity.'
    },
    {
        duration: '2024 - 2025',
        title:'Thynk Tech Dz · Internship',
        content: 'IT Project Manager, Developing front end of web apps'
    },
    {
        duration: '2025 - Present',
        title:'Mustaeidun · Contract',
        content: 'Implementing ui ux for mobile app + web app and design social media posts.'
    },
]

export const educationData = [
    {
        duration: '2022 - 2024',
        title:'University of yahia fares',
        content: 'Graduated Bachelor\'s degree'
    },
    {
        duration: 'Autumn 2022',
        title:'Front End Development ',
        content: 'Online Bootcamp Platform'
    },
    {
        duration: '2025 - Present',
        title:'University of yahia fares',
        content: 'Systems engineering and web technology'
    },
]
