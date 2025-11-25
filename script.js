const backendURL = "https://rhymes-ai-backend-1.onrender.com";

async function generateRhyme() {
    const text = document.getElementById("inputText").value;
    const outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "⏳ Generating rhyme... Please wait...";

    try {
        const response = await fetch(`${backendURL}/generate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: text })
        });

        const data = await response.json();

        outputDiv.innerHTML = data.rhyme || "⚠ Error: No response from backend.";
    } 
    catch (error) {
        outputDiv.innerHTML = "❌ Backend error! Please check console.";
        console.error(error);
    }
}
