document.addEventListener("DOMContentLoaded", function () {
    const terminal = document.getElementById("terminal");
    const output = document.getElementById("output");
    let commandHistory = [];
    let historyIndex = 0;

    document.addEventListener("keydown", function (event) {
        let inputField = document.getElementById("input");

        if (event.key === "Enter") {
            let command = inputField.textContent.trim();
            output.innerHTML += `<p>guest@dhiran-gen:~$ ${command}</p>`;
            commandHistory.push(command);
            historyIndex = commandHistory.length;

            executeCommand(command);
            inputField.textContent = "";
        } else if (event.key === "Backspace") {
            inputField.textContent = inputField.textContent.slice(0, -1);
        } else if (event.key.length === 1) {
            inputField.textContent += event.key;
        }
    });

    function executeCommand(command) {
        let response = "";
        switch (command.toLowerCase()) {
            case "help":
                response = `
                <p>Available commands:</p>
                <p>about - About me</p>
                <p>education - My degrees and certifications</p>
                <p>skills - Tech stack & skills</p>
                <p>projects - List of my projects</p>
                <p>experience - Work experience</p>
                <p>achievements - Awards and recognitions</p>
                <p>contact - How to reach me</p>
                <p>resume - Download my resume</p>
                <p>clear - Clear the terminal</p>`;
                break;
            case "about":
                response = "<p>Hi, I'm Dhiran! A passionate backend engineer specializing in Golang, blockchain, and DevOps.</p>";
                break;
            case "education":
                response = "<p>Bachelor's in Computer Science - NIT Agartala</p>";
                break;
            case "skills":
                response = "<p>Golang, Blockchain, Hyperledger Fabric, Docker, Kubernetes, gRPC, Rust, DevOps, DSA</p>";
                break;
            case "projects":
                response = "<p>1. Zapper-like Blockchain Dashboard<br>2. Hyperledger Fabric Integration<br>3. Real-time Crypto Tracker</p>";
                break;
            case "experience":
                response = "<p>Software Engineer @ [Company Name]<br>Backend Developer @ [Previous Company]</p>";
                break;
            case "achievements":
                response = "<p>🏆 Cracked top tech interviews<br>🏆 Built high-performance blockchain applications</p>";
                break;
            case "contact":
                response = "<p>Email: dhiran@example.com<br>GitHub: github.com/dhiran-gen<br>LinkedIn: linkedin.com/in/dhiran-gen</p>";
                break;
            case "resume":
                response = "<p>Downloading resume...</p>";
                window.open("resume.pdf", "_blank");
                break;
            case "clear":
                output.innerHTML = "";
                return;
            default:
                response = `<p>Command not found: ${command}</p>`;
        }
        output.innerHTML += response;
    }
});