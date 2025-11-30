const endpointContainer = document.getElementById('endpoints');

const endpoints = [
    {
        method: "get",
        endpoint: "api/themes",
        description: "Retrieve a list of 6 AI generate short story themes.",
        queryParameters: [
            {
                name: "age",
                type: "integer",
                default: "0",
                description: "User's age to determine safety settings of AI.",
            }
        ],
        response: `[
    "Theme 1",
    "Theme 2",
    "Theme 3",
    "Theme 4",
    "Theme 5",
    "Theme 6",
]`
    },
    {
        method: "get",
        endpoint: "api/story",
        description: "Retrieve an AI generated Mad Libs short story based on a provided theme along with a list of key words that were removed.",
        queryParameters: [
            {
                name: "age",
                type: "integer",
                default: "0",
                description: "User's age to determine safety settings of AI.",
            },
            {
                name: "theme",
                type: "string",
                default: "First day of work.",
                description: "Theme for short story.",
            }
        ],
        response: `{
    "story": [
        "Paragraph 1",
        "Paragraph 2",
        "Paragraph 3",
        ...
    ],
    "words": [
        "Part of speech",
        "Part of speech",
        "Part of speech",
        "Part of speech",
        "Part of speech",
        "Part of speech",
        ...
    ]
}`
    }
]

let containerHTML = "";

endpoints.forEach(element => {
    let parameters = "";
    element.queryParameters.forEach(query => {
        parameters += `<tr>
                    <td>${query.name}</td>
                    <td>${query.type}</td>
                    <td>${query.default}</td>
                    <td>${query.description}</td>
                </tr>`;
    })

    const htmlContent = `<div class="endpoint">
        <div class="details">
            <div class="header">
                <h2><span class="method GET">${element.method}</span> ${element.endpoint}</h2>
                <p>${element.description}</p>
            </div>
            <div class="section-title">Optional Query Parameters</div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
                ${parameters}
            </table>
        </div>
        <div class="response">
            <div class="section-title">Request Response Structure</div>
            <pre><code>${element.response}</code></pre>
        </div>
    </div>
    `;

    containerHTML += htmlContent;
});

endpointContainer.innerHTML = containerHTML;