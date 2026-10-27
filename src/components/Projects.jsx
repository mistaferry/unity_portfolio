import ProjectCard from "./ProjectCard";
import dragonSoupCover from "../assets/dragon_soup_cover.png";
import fishyGameCover from "../assets/fishy_game_cover.jpg";
import lastTryCover from "../assets/last_try_cover.png";

function Projects(){
    const projects = [
        {
            id: 1,
            image: dragonSoupCover,
            title: "Dragon Soup",
            type: "University Team Project",
            period: "10/2025 – Present",
            teamSize: "6 team members",
            role: "Unity Developer",
            description: "Dragon Soup is a fantasy tavern management game where players run a tavern, send adventurers on quests, collect ingredients, and cook recipes while searching for a cure to a mysterious disease.",
            contribution: [
                "Developed gameplay systems including item interactions, inventory with a 9-slot hotbar and stacking, a cooking minigame, and recipe progression.",
                "Implemented supporting systems such as save/load with autosave and manual save slots, UI, audio/video settings, input rebinding, and video cutscene integration.",
                "Collaborated with another Unity developer to integrate gameplay features and resolve issues between interconnected systems.",
                "Tested gameplay features, reproduced bugs, and fixed issues during development."
            ],
            tags: ["Unity", "C#", "Git"],
            github: "https://github.com/DLuckYD/dragon-soup-game",
            youtube: "https://www.youtube.com/watch?v=Md8u-3zo31Y"
        },
        {
            id: 2,
            image: fishyGameCover,
            title: "Fishy Game",
            type: "University Team Project",
            period: "03/2026 – 06/2026",
            teamSize: "5 team members",
            role: "Unity Developer",
            description: "Fishy Game is a 2D underwater horde survival game where players explore different ocean depths, fight increasingly dangerous enemies, and improve their character through upgrades. The game uses a custom-built Arduino controller with buttons, sliders, a display, and LEDs.",
            contribution: [
                "Developed enemy spawning and horde behaviour systems, including depth-based difficulty, spawn budgets, and off-screen enemy spawning.",
                "Implemented enemy navigation using Unity NavMesh and developed player progression systems.",
                "Developed gameplay logic to control hardware feedback, including LED behaviour based on in-game events.",
                "Tested controller inputs and outputs, including slider values and LED feedback, to verify correct behaviour in the game."
            ],
            tags: ["Unity", "C#", "Arduino", "Git"],
            github: "https://github.com/DLuckYD/Fishy-Game",
            youtube: "https://youtu.be/YpTqSrJ9CFw"
        },
        {
            id: 3,
            image: lastTryCover,
            title: "Last Try",
            type: "University Team Project",
            period: "10/2025 – 01/2026",
            teamSize: "3 team members",
            role: "Unity Developer",
            description: "Last Try is an experimental strategy game built around eye tracking as the primary input method. The player must quickly observe and memorize available soldiers, assemble an army and make decisions under time pressure using their gaze to interact with the game.",
            contribution: [
                "Integrated the Tobii Eye Tracker 5 into Unity as the game's primary input method.",
                "Developed gaze-based soldier selection, allowing players to target units with their eyes and confirm recruitment using a key press.",
                "Tested gaze-based interactions to check input stability and responsiveness."
            ],
            tags: ["Unity", "C#", "Tobii Eye Tracker 5", "Unity Version Control"],
            github: "https://github.com/DLuckYD/last-try-game",
            youtube: "https://www.youtube.com/watch?v=XY3OSFbURMw"
        }
    ];

    return (
        <section className="projects-section">
            <div className="section-header">
                <h2>Projects </h2>
                <h4>A selection of games and interactive projects I've worked on</h4>
            </div>

            <div className="projects">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        type={project.type}
                        period={project.period}
                        teamSize={project.teamSize}
                        role={project.role}
                        description={project.description}
                        contribution={project.contribution}
                        tags={project.tags}
                        github={project.github}
                        youtube={project.youtube}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;