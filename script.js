document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const command = input.value.trim();
            input.value = "";
            processCommand(command);
        }
    });

    function processCommand(command) {
        if (!command) return;

        const prompt = `<p><span class="prompt">guest@DHIRAN:~$</span> ${command}</p>`;
        output.innerHTML += prompt;

        let response = executeCommand(command.toLowerCase());
        output.innerHTML += `<p>${response}</p>`;

        output.scrollTop = output.scrollHeight;
    }

    function executeCommand(cmd) {
        const commands = {
            "help": `
Available commands:
- about       : About me
- skills      : My tech stack
- projects    : List of my projects
- resume      : Download my resume
- github      : Open my GitHub
- linkedin    : Open my LinkedIn
- clear       : Clear the terminal
- print dhiran: Print "DHIRAN" in uppercase in the terminal
            `,
            "about": "Software Engineer | Golang | Blockchain | Hyperledger Fabric.",
            "skills": "Golang, Rust, TypeScript, Hyperledger, Kafka, Docker, Kubernetes, GCP, AWS, etc.",
            "projects": "Check my GitHub for projects: <a href='https://github.com/dhiran-gen' target='_blank'>GitHub</a>",
            "resume": "<a href='resume.pdf' download>Download Resume</a>",
            "github": "<a href='https://github.com/dhiran-gen' target='_blank'>GitHub</a>",
            "linkedin": "<a href='https://www.linkedin.com/in/dhiranyadav/' target='_blank'>LinkedIn</a>",
            "clear": function () {
                output.innerHTML = "";
                return "";
            },
            "print dhiran": function () {
                return "<strong>DHIRAN</strong>";
            }
        };

        if (commands[cmd]) {
            return typeof commands[cmd] === "function" ? commands[cmd]() : commands[cmd];
        } else {
            return `Command not found: ${cmd}<br>Type 'help' to see available commands.`;
        }
    }
});