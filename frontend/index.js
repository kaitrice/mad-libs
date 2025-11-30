const error = document.getElementById('theme-error');
const form = document.getElementById('theme');
const theme1 = document.getElementsByClassName('theme1');
const theme2 = document.getElementsByClassName('theme2');
const theme3 = document.getElementsByClassName('theme3');
const theme4 = document.getElementsByClassName('theme4');
const theme5 = document.getElementsByClassName('theme5');
const theme6 = document.getElementsByClassName('theme6');

let baseUrl = "http://localhost:7071/api/";

async function fetchData(endpoint) {
    const URL = baseUrl + endpoint;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            console.error('Server responded with an error status:', response.status, response.statusText);
            throw new Error('Failed to fetch data: ' + response.status);
        }
        const text = await response.text();
        const data = JSON.parse(text);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

function errorThemes() {
    const VALUE = "no-theme";
    const LABEL = "Error generating theme.";

    error.textContent = error.textContent = `
Sorry, we seem to be experiencing high traffic at the moment. 
Please try again later.
`;

    theme1[0].value = VALUE;
    theme1[1].textContent = LABEL;

    theme2[0].value = VALUE;
    theme2[1].textContent = LABEL;

    theme3[0].value = VALUE;
    theme3[1].textContent = LABEL;

    theme4[0].value = VALUE;
    theme4[1].textContent = LABEL;

    theme5[0].value = VALUE;
    theme5[1].textContent = LABEL;

    theme6[0].value = VALUE;
    theme6[1].textContent = LABEL;
}

async function setOptions() {
    const themes = await fetchData(`themes`);
    if (!themes) errorThemes();

    theme1[0].value = themes[0];
    theme1[1].textContent = themes[0];

    theme2[0].value = themes[1];
    theme2[1].textContent = themes[1];

    theme3[0].value = themes[2];
    theme3[1].textContent = themes[2];

    theme4[0].value = themes[3];
    theme4[1].textContent = themes[3];

    theme5[0].value = themes[4];
    theme5[1].textContent = themes[4];

    theme6[0].value = themes[5];
    theme6[1].textContent = themes[5];
}

window.addEventListener("load", () => {
    setOptions();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const theme = document.querySelector('input[name="theme"]:checked').value;
    try {
        const output = await fetchData(`story?theme=${encodeURIComponent(theme)}`);
        
        sessionStorage.setItem("theme", theme);
        sessionStorage.setItem("story", JSON.stringify(output.story));
        sessionStorage.setItem("words", JSON.stringify(output.words));
    
        window.location.href = "story.html";
    } catch (error) {
        console.error("Story error:", error);
    }
});