const API_URL = "https://rhymes-ai-backend.onrender.com/generate";

async function generateRhyme() {
    const prompt = document.getElementById("promptInput").value;
    const output = document.getElementById("output");

    output.innerText = "Generating... Please wait...";

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    output.innerText = data.rhyme || "Error generating rhyme!";
}
