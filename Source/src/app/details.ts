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
        description: "I'm working on utilizing the new VGGT model to implement a new Visual SLAM algorithm that relies solely on visual data. Not even IMU data is used.",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["Python", "SLAM"]
    },
    {
        title: "UAV Gimbal Mechanism",
        description: "I'm working on utilizing the new VGGT model to implement a new Visual SLAM algorithm that relies solely on visual data. Not even IMU data is used.",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["Python", "SLAM"]
    },
    {
        title: "CNC Tube Notcher",
        description: "I'm working on utilizing the new VGGT model to implement a new Visual SLAM algorithm that relies solely on visual data. Not even IMU data is used.",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["Python", "SLAM"]
    }
]