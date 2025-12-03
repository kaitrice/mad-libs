const endpointContainer = document.getElementById('endpoints');

const endpoints = [
    {
        name: "Generate Themes",
        url: "/api/generate/theme"
    },
    {
        name: "Generate Story",
        url: "/api/generate/story"
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