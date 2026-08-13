export interface CardItem {
    title: string,
    description: string,
    category: string,
    date: string,
    skills?: string[],
    highlighted?: boolean,
    relevant?: boolean,
    // Overrides the default `item-images/thumbs/<title>.webp` lookup, for
    // projects standing in on a placeholder until real artwork exists.
    thumb?: string,
    // Intrinsic size of the card thumbnail. Optional, but supplying it lets the
    // browser reserve the right box before the image arrives instead of reflowing.
    thumbWidth?: number,
    thumbHeight?: number
}

export const Projects: CardItem[] = [
    {
        title: "Aviat'r Drone",
        description: "I'm researching, designing, and manufacturing a custom autonomous UAV for the 2027 SUAS competition, covering the 3D printed chassis, flight controller and onboard computer integration, and the propulsion and power systems.",
        category: "UAV",
        date: "4/12/2025",
        skills: ["SolidWorks", "Static Simulation", "Topology Optimization", "3D Printing", "PX4 / Pixhawk", "Propulsion & Power Sizing"],
        thumbWidth: 400,
        thumbHeight: 181
    },
    {
        title: "UAV Payload Mechanism",
        description: "Designed and built a hoist mechanism for targeted payload delivery in a UAV competition, featuring a custom gearbox, spring-applied brake, and clutch system for precise and reliable autonomous operation.",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["SolidWorks", "Gearbox Design", "Mechanism Design", "Arduino", "Motor Control", "3D Printing"],
        thumbWidth: 400,
        thumbHeight: 285
    },
    {
        title: "FSAE Stands",
        description: "Designed and built a set of adjustable steel stands that lift our Formula SAE car for accumulator installs, sized around a hand-calculated tipping analysis and validated in SolidWorks for about $110 a set.",
        category: "Mechanical Design",
        date: "8/13/2026",
        skills: ["SolidWorks", "Statics / FBD Analysis", "Static Simulation", "Welding", "Steel Tube Fabrication", "Design for Cost"],
        thumbWidth: 400,
        thumbHeight: 367
    },
    {
        title: "UAV Gimbal Mechanism",
        description: "I reverse engineered a UAV gimbal that will be used in the 2027 SUAS competition.",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["SolidWorks", "Reverse Engineering", "Gimbal Stabilization", "System Integration"],
        thumbWidth: 366,
        thumbHeight: 413
    },
    {
        title: "CNC Tube Notcher",
        description: "I reverse engineered a CNC tube notcher with the added bonus of it being much more compact than commercially availible ones.",
        category: "Mechatronics",
        date: "4/12/2025",
        skills: ["SolidWorks", "Reverse Engineering", "CNC / G-code", "Motion Control", "Plasma Cutting"],
        thumbWidth: 400,
        thumbHeight: 309
    },
    {
        title: "BeCu Heat-Treat Distortion Control",
        description: "In progress...",
        category: "Materials",
        date: "8/11/2026",
        thumb: "assets/timeline-images/sorenson.jpg",
        thumbWidth: 200,
        thumbHeight: 200
    }
]