function convertText()
{
    const input = document.getElementById("textInput");
    const button = document.getElementById("convertBtn");

    if (input.value === "")
    {
        alert("Input your transcript first.");
    }
    else
    {
        const lines = input.value.split("\n");
        const length = lines.length;
    
        let finalText = " ";
    
        for (let i = 4; i < length - 1; i++)
            finalText += lines[i].substring(13) + " ";
    
        // Assign converted text to the textarea
        input.value = finalText;
        // Make textarea readonly and disable button
        input.readOnly = true;
        button.disabled = true;
    }
}

function copyText() {
    const input = document.getElementById("textInput");
    const button = document.getElementById("convertBtn");
  
    navigator.clipboard.writeText(input.value)
      .then(() => {
        console.log("Text copied to clipboard");
        input.value = "";
        button.disabled = false;
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  }