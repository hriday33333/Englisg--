const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then(json => displayLesson(json.data));
};
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/5${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

const displayLesson = (lessons) => {
    // 1.get the containar & empty
    const lavalContainer = document.getElementById("laval-container")
    lavalContainer.innerHTML = "";
    // 2.get into every lesson
    for (let lesson of lessons) {
        //      3.creat Element
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML=`<button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson- ${lesson.level_no} </button>
        `
    //      4.append into containar
    lavalContainer.append(btnDiv)
    }
    
};
loadLesson();