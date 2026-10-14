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
            description: "Dragon Soup is a fantasy tavern management game developed as a long-term university team project. The player manages a tavern while searching for a cure to a mysterious disease, sending adventurers on quests, collecting ingredients and cooking recipes.",
            contribution: [
                "Built interaction, inventory, recipe, UI, save/load, progression, cutscene, and settings systems in Unity.",
                "Worked with another Unity developer to integrate gameplay features and resolve system conflicts.",
                "Tested new builds, reproduced bugs, and fixed issues across interconnected systems.",
                "Helped prepare stable builds for user playtesting and evaluation."
            ],
            tags: ["Unity", "C#", "Game Development"],
            github: "https://github.com/DLuckYD/dragon-soup-game",
            youtube: "https://www.youtube.com/watch?v=Md8u-3zo31Y"
        },
        {
            id: 2,
            image: fishyGameCover,
            title: "Fishy Game",
            type: "University Team Project",
            description: "Fishy Game is a horde survival game where the player explores different ocean depths, fights increasingly dangerous enemies and develops their character through passive progression and upgrades. The game is controlled using a custom-built hardware controller with buttons, sliders, screen and LEDs.",
            contribution: [
                "Developed enemy spawning, horde behaviour, navigation, and progression systems.",
                "Implemented gameplay logic for a custom physical controller.",
                "Tested controller input/output behaviour, including slider values and LED feedback, to verify correct communication with the game."
            ],
            tags: ["Unity", "C#", "Arduino"],
            github: "https://github.com/DLuckYD/Fishy-Game",
            youtube: "https://youtu.be/YpTqSrJ9CFw"
        },
        {
            id: 3,
            image: lastTryCover,
            title: "Last Try",
            type: "University Team Project",
            description: "Last Try is an experimental strategy game built around eye tracking as the primary input method. The player must quickly observe and memorize available soldiers, assemble an army and make decisions under time pressure using their gaze to interact with the game.",
            contribution: [
                "Integrated Tobii Eye Tracker as the primary input method.",
                "Implemented gaze-based gameplay interactions.",
                "Tested gaze input to improve stability and responsiveness."
            ],
            tags: ["Unity", "C#", "Eye Tracking"],
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