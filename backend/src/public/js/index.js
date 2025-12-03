const endpointContainer = document.getElementById('endpoints');

const endpoints = [
    {
        name: "Generate Themes",
        url: "/api/themeGeneration"
    },
    {
        name: "Generate Story",
        url: "/api/storyGeneration"
    },
]

let containerHTML = "";

endpoints.forEach(element => {
    let htmlContent = `<li>
    <a href="${element.url}">${element.name}</a>
</li>`;
    containerHTML += htmlContent;
})

endpointContainer.innerHTML = containerHTML;