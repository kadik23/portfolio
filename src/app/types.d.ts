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