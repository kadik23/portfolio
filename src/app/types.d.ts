type Skill = {
    name: string;
    icon: string;
};

type HardSkills = {
    'Front End': Skill[];
    'Back End': Skill[];
    'Database System': Skill[];
    'Apps Mobile': Skill[];
    'Version Control': Skill[];
    'Tools': Skill[];
};

type SoftSkills = { name: string, percentage: number }

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

interface Contact {
    Firstname: string;
    Lastname: string;
    Email: string;
    'Phone number': string;
    Service: string;
    Message: string;
}