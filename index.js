function convertText()
{
    const input = document.getElementById("textInput");
    const button = document.getElementById("convertBtn");

    if (input.value === "")
    {
        alert("Input mo muna yung transcript be");
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
        console.log("Ayan na copy na, paste mo na lang sa ano mo. oo");
        input.value = "";
        input.readOnly = false;
        button.disabled = false;
      })
      .catch((error) => {
        console.error("Naku ayaw mag copyyy, try mo na lang ulitt. Ito yung error =>", error);
      });
}

let count = 0;
const btn = document.getElementById("redirectButton");

btn.addEventListener("click", function() {
  if (count == 0) {
    alert("hiya aq, next time na pala")
    count++;
    btn.innerHTML = "Charot, gew pindot";
    this.classList.remove("btn-success");
    this.classList.add("btn-danger");
  }
  else {
    window.location.href = "https://sanasyt1403.github.io/kalandian/"; 
  }
});