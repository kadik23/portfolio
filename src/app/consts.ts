export const links: { name: string, path: string }[] = [{ name: 'home', path: '' }, { name: 'services', path: 'services' }, { name: 'resume', path: 'resume/experience' }, { name: 'projects', path: 'projects' }, { name: 'contact', path: 'contact' }]

export const hardSkills: HardSkills = {
    'Front End': [
        { name: 'Html', icon: 'flowbite:html-solid' },
        { name: 'Css', icon: 'flowbite:css-solid' },
        { name: 'Js', icon: 'ri:javascript-fill' },
        { name: 'Tailwind', icon: 'teenyicons:tailwind-solid' },
        { name: 'Vue js', icon: 'mdi:vuejs' },
        { name: 'React js', icon: 'teenyicons:react-solid' },
        { name: 'TS', icon: 'fluent:code-ts-rectangle-16-filled' },
    ],
    'Back End': [
        { name: 'Php', icon: 'simple-icons:php' },
        { name: 'Laravel', icon: 'simple-icons:laravel' },
        { name: 'Node Js', icon: 'mdi:nodejs' },
        { name: 'Express Js', icon: 'simple-icons:express' },
        { name: 'Next Js', icon: 'file-icons:nextjs' },
    ],
    'Database System': [
        { name: 'MySql', icon: 'simple-icons:mysql' },
        { name: 'MongoDb', icon: 'devicon-plain:mongodb' },
        { name: 'Prisma', icon: 'simple-icons:prisma' },
    ],
    'Apps Mobile': [
        { name: 'Java', icon: 'devicon-plain:java' },
        { name: 'React Native', icon: 'teenyicons:react-solid' },
    ],
    'Version Control': [
        { name: 'Git', icon: 'teenyicons:git-solid' },
        { name: 'Github', icon: 'mdi:github' },
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

