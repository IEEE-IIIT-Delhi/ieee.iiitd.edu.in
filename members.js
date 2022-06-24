const members = document.getElementById("members");
const Rep = document.getElementById("rep");
const Core = document.getElementById("core");
const Wie = document.getElementById("wie");
const Compsoc = document.getElementById("compsoc");
const Exec = document.getElementById("exec");
const Alum = document.getElementById("alum");

let i = 0;
fetch("members.json")
    .then((results) => results.json())
    .then((data) => {
        for (i = 0; i < 3; i++) {
            Rep.innerHTML += `
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </div>
            `;
        }

        for (i = 3; i < 13; i++) {
            Core.innerHTML += `
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </div>
            `;
        }

        for (i = 13; i < 16; i++) {
            Compsoc.innerHTML += `
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </div>
            `;
        }

        for (i = 16; i < 19; i++) {
            Wie.innerHTML += `
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </div>
            `;
        }

        for (i = 19; i < 50; i++) {
            Exec.innerHTML += `
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
            </div>
            `;
        }

        for (i = 50; i < 70; i++) {
            Alum.innerHTML += `
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </div>
            `;
        }
    });
