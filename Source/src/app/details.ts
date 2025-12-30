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
        description: "I'm research, designing, and manufacturing a custom drone body that will compete in the SUAS 2026 drone competition.",
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
        description: "",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["Python", "SLAM"]
    },
    {
        title: "CNC Tube Notcher",
        description: "",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["Python", "SLAM"]
    }
]