const API_URL = "https://rhymes-ai-backend-1.onrender.com/generate";

document.getElementById("generateBtn").addEventListener("click", async () => {
    const prompt = document.getElementById("promptInput").value;
    if (!prompt) {
        alert("Please enter a prompt!");
        return;
    }

    document.getElementById("result").innerHTML = "⏳ Generating... Please wait...";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        console.log(data);

        if (data.text) {
            document.getElementById("result").innerHTML = data.text;
        } else {
            document.getElementById("result").innerHTML = "❌ Error: No response from AI model.";
        }

    } catch (err) {
        document.getElementById("result").innerHTML = "⚠️ Failed to connect to backend.";
        console.error(err);
    }
});
