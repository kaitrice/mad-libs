const sessionTheme = sessionStorage.getItem("theme");
const sessionStory = JSON.parse(sessionStorage.getItem("story"));
const sessionWords = JSON.parse(sessionStorage.getItem("words"));

const error = document.getElementById('story-error');
const form = document.getElementsByTagName('form');
const themeHeader = document.getElementById('theme');
const storyContainer = document.getElementById('story');
const wordList = document.getElementById('word-list');

function populateElements() {
    let theme, story, words;

    if (!sessionTheme || !sessionStory || !sessionWords) error.textContent = `
Sorry, we seem to be experiencing high traffic at the moment. 
Please try again later.
`;

    if (sessionTheme) theme = sessionTheme;
    else theme = "Error getting theme.";

    if (sessionStory) story = sessionStory;
    else story = ["Error generating story."];

    if (sessionWords) words = sessionWords;
    else words = ["Error generating word list."];

    let storyHTML, wordsHTML;

    story.forEach(paragraph => {
        storyHTML += `<p>${paragraph}</p>`;
    });

    sessionWords.forEach(word => {
        wordsHTML += `<li>${word}</li>`;
    });

    themeHeader.textContent = theme;
    storyContainer.innerHTML = storyHTML;
    wordList.innerHTML = wordsHTML;
}

populateElements();