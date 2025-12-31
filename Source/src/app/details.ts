export interface CardItem {
    title: string,
    description: string,
    category: string,
    date: string,
    skills?: string[],
    highlighted?: boolean,
    relevant?: boolean
}

export const Projects: CardItem[] = [
    {
        title: "UAV Body",
        description: "I'm researching, designing, and manufacturing a custom drone body that will compete in the SUAS 2026 drone competition.",
        category: "UAV",
        date: "4/12/2025",
        skills: ["Static Simulation", "SolidWorks", "3D Printing", "Prototyping"]
    },
    {
        title: "UAV Payload Mechanism",
        description: "Designed and built a hoist mechanism for targeted payload delivery in a UAV competition, featuring a custom gearbox, spring-applied brake, and clutch system for precise and reliable autonomous operation.",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["Python", "SLAM"]
    },
    {
        title: "UAV Gimbal Mechanism",
        description: "I reverse engineered a UAV gimbal that will be used in the 2026 SUAS competition.",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["Python", "SLAM"]
    },
    {
        title: "CNC Tube Notcher",
        description: "I reverse engineered a CNC tube notcher with the added bonus of it being much more compact than commercially availible ones.",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["Python", "SLAM"]
    }
]