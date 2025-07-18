type Skill = {
    name: string;
    icon: string;
};

type HardSkills = {
    'Front End': Skill[];
    'Back End': Skill[];
    'Database System': Skill[];
    'Mobile Apps': Skill[];
    'Desktop Apps': Skill[];
    'Devops': Skill[];
    'Tools': Skill[];
    'Other': Skill[];
};

type SoftSkills = { name: string, level: string }

type Links = { name: string, path: string }

interface Projects  {
    id: number;
    title: string;
    description: string;
    frameworks: string[];
    deployments: string | null;
    code_source: string;
    image: string;
}

interface Contribution {
    id: number;
    name: string;
    link: string;
    description: string;
    languages: string[];
}

interface Contact {
    Firstname: string;
    Lastname: string;
    Email: string;
    'Phone number': string;
    Service: string;
    Message: string;
}