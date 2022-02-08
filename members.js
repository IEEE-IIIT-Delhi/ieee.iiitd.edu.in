const members = document.getElementById("members");
const Rep = document.getElementById("rep");
const Core = document.getElementById("core");
const Wie = document.getElementById("wie");
const Compsoc = document.getElementById("compsoc");
const Exec = document.getElementById("exec");
const Alum = document.getElementById("alum");

let i = 0;
fetch('members.json')
    .then(results => results.json())
    .then(data => {
        for (i = 0; i < 3; i++) {
            Rep.innerHTML += `<a href="${data[i].a}">
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </div></a>
            `
        }
        
        for (i = 3; i < 12; i++) {
            Core.innerHTML += `<a href="$[i].a}">
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </div>
            `
        }
        
        for (i = 12; i < 15; i++) {
            Wie.innerHTML += `<a href="${data[i].a}">
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </
            `
        }
        
        for (i = 15; i < 17; i++) {
            Compsoc.innerHTML += `<a href="${data[i].a}">
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </div
            `
        }
        
        for (i = 17; i < 25; i++) {
            Exec.innerHTML += `<a href="${data[i].a}">
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
            </div></a>
            `
        }
        
        for (i = 25; i < 27; i++) {
            Alum.innerHTML += `<a href="${data[i].a}">
            <div class="memCard flex flex-col items-center justify-center space-y-4">
                <img src="${data[i].img}" alt="${data[i].name}" class="pic">
                <h1 class="name">${data[i].name}</h1>
                <h2 class="pos">${data[i].pos}</h2>
            </div></a>
            `
        }
    });
