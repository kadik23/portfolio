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
    ],
    'Back End': [
        { name: 'Php', icon: 'simple-icons:php' },
        { name: 'Laravel', icon: 'simple-icons:laravel' },
        { name: 'Node Js', icon: 'mdi:nodejs' },
        { name: 'Express Js', icon: 'simple-icons:express' },
        { name: 'TS', icon: 'fluent:code-ts-rectangle-16-filled' },
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
    ],
};

export const softSkills: SoftSkills[] = [
    { name: 'Project Manager', percentage: 60},
    { name: 'Problem Solving', percentage: 55},
    { name: 'Team Work', percentage: 75},
    { name: 'Time Management', percentage: 80},
    { name: 'Adaptability', percentage: 70},
    { name: 'Organization', percentage: 75},
]

export const languages: SoftSkills[] = [
    { name: 'Arabic', percentage:100},
    { name: 'English', percentage:60},
    { name: 'French', percentage:40}
]

export const projects: Projects[] = [
    {
        id: 1,
        title:'Coding Challenges  & Hiring Platform',
        description: '     A Coding Challenges & Hiring Platform connects developers and companies through skill-based challenges, facilitating efficient hiring and learning.',
        frameworks: [ 'React Js', 'Type Script', 'Tailwind Css', 'Express Js', 'My sql', 'Docker'],
        deployments: 'https://code-craft-front.vercel.app/',
        code_source: 'https://github.com/code-craft-project',
        image:'01.png' 
    },
    {
        id: 2,
        title:'Novalance',
        description: 'A Novalance is an online platform that connects freelancers with clients who need their services. These websites provide a space where freelancers can showcase their skills, and clients can post projects or tasks that they need help with.',
        frameworks: [ 'Vue Js', 'Laravel', 'Tailwind Css', 'Node Js', 'Web Socket','Docker'],
        deployments: 'https://novalance-frontend.vercel.app/',
        code_source: 'https://github.com/kadik23/Novalance?tab=readme-ov-file',
        image:'02.png' 
    },
    {
        id: 3,
        title:'Stanissk Store',
        description: 'Stanissk Store is eCommerce web app, online platform that allows users to browse, search, and purchase products or services over the internet with online payment feature.',
        frameworks: [ 'Laravel','Vue Js','Type Script','Blade', 'Tailwind Css', 'My Sql','Docker','Pusher'],
        deployments: 'https://ecommerce-app-chi-eight.vercel.app/',
        code_source: 'https://github.com/kadik23/ecommerce-app',
        image:'03.png' 
    },
    {
        id: 4,
        title:'Zenstay',
        description: '  Zenstay is an online platform that allows users to reserve rooms for various purposes with online payment methods.',
        frameworks: [ 'Mern Stack','Bootstrap','Zustand'],
        deployments: 'https://zenstay-two.vercel.app/',
        code_source: 'https://github.com/kadik23/Zenstay',
        image:'04.png' 
    },
    {
        id: 5,
        title:'Doctor Appointment',
        description: 'A Web Application to make an appointment with Doctors easily. ',
        frameworks: [ 'Mern Stack','Tailwind Css', 'Type Script', 'Prisma',],
        deployments: "https://doctor-appointment-5-btf0.onrender.com/home",
        code_source: 'https://github.com/kadik23/doctor-appointment',
        image:'05.png' 
    },
    {
        id: 6,
        title:'Techverse',
        description: 'Website for club Which represents all the activities and members of the club',
        frameworks: [ 'React','Shadcn','Tailwind','Typescript',],
        deployments: 'https://techverse-club-two.vercel.app/',
        code_source: 'https://github.com/saidseghirakram/techverse_club',
        image:'06.png' 
    },
    {
        id: 7,
        title:'Cs Department Management',
        description: 'Web application to manage the computer science department like Adminstraters, Teachers and Students',
        frameworks: [ 'Php','Html','Css','My Sql',],
        deployments: null,
        code_source: 'https://github.com/kadik23/cs-department-management',
        image:'07.png' 
    },
    {
        id: 8,
        title:'Banquet Hall Management',
        description: 'Desktop application to manage the Banquet Hall like Clients, Reservations, Paiments and Receipts',
        frameworks: [ 'Electron JS','React JS','Css','Sqlite',],
        deployments: null,
        code_source: 'https://github.com/kadik23/banquet-hall-management',
        image:'08.png' 
    },
]