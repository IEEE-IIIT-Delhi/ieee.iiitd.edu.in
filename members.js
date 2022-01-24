const data = {
    rep : {
        0 : {
            name: "Liam",
            pos: "CEO",
            img: "https://via.placeholder.com/100x100"
        },
        1 : {
            name: "Beck",
            pos: "COO",
            img: "https://via.placeholder.com/100x100"
        }
    },
    core: {
        0 : {
            name: "Max",
            pos: "CMO",
            img: "https://via.placeholder.com/100x100"
        },
        1 : {
            name: "Jack",
            pos: "CO",
            img: "https://via.placeholder.com/100x100"
        }
    },
    wie: {
        0 : {
            name: "Max",
            pos: "CMO",
            img: "https://via.placeholder.com/100x100"
        },
        1 : {
            name: "Jack",
            pos: "CO",
            img: "https://via.placeholder.com/100x100"
        }
    },
    compsoc: {
        0 : {
            name: "Max",
            pos: "CMO",
            img: "https://via.placeholder.com/100x100"
        },
        1 : {
            name: "Jack",
            pos: "CO",
            img: "https://via.placeholder.com/100x100"
        }
    },
    exec: {
        0 : {
            name: "Max",
            pos: "CMO",
            img: "https://via.placeholder.com/100x100"
        },
        1 : {
            name: "Jack",
            pos: "CO",
            img: "https://via.placeholder.com/100x100"
        }
    },
    alum: {
        0 : {
            name: "Max",
            pos: "CMO",
            img: "https://via.placeholder.com/100x100"
        },
        1 : {
            name: "Jack",
            pos: "CO",
            img: "https://via.placeholder.com/100x100"
        }
    }
}

// console.log(data);
// console.log(Object.keys(data.rep).length);
const members = document.getElementById("members");
const Rep = document.getElementById("rep");
const Core = document.getElementById("core");
const Wie = document.getElementById("wie");
const Compsoc = document.getElementById("compsoc");
const Exec = document.getElementById("exec");
const Alum = document.getElementById("alum");

let i;
for (i = 0; i < Object.keys(data.rep).length; i++) {
    Rep.innerHTML += `
    <div class="flex flex-col items-center justify-center space-y-4">
        <img src="${data.rep[i].img}" alt="${data.rep[i].name}" class="pic">
        <h1 class="name">${data.rep[i].name}</h1>
        <h2 class="pos">${data.rep[i].pos}</h2>
    </div>
    `
}

for (i = 0; i < Object.keys(data.core).length; i++) {
    Core.innerHTML += `
    <div class="flex flex-col items-center justify-center space-y-4">
        <img src="${data.core[i].img}" alt="${data.core[i].name}" class="pic">
        <h1 class="name">${data.core[i].name}</h1>
        <h2 class="pos">${data.core[i].pos}</h2>
    </div>
    `
}

for (i = 0; i < Object.keys(data.wie).length; i++) {
    Wie.innerHTML += `
    <div class="flex flex-col items-center justify-center space-y-4">
        <img src="${data.wie[i].img}" alt="${data.wie[i].name}" class="pic">
        <h1 class="name">${data.wie[i].name}</h1>
        <h2 class="pos">${data.wie[i].pos}</h2>
    </div>
    `
}

for (i = 0; i < Object.keys(data.compsoc).length; i++) {
    Compsoc.innerHTML += `
    <div class="flex flex-col items-center justify-center space-y-4">
        <img src="${data.compsoc[i].img}" alt="${data.compsoc[i].name}" class="pic">
        <h1 class="name">${data.compsoc[i].name}</h1>
        <h2 class="pos">${data.compsoc[i].pos}</h2>
    </div>
    `
}

for (i = 0; i < Object.keys(data.exec).length; i++) {
    Exec.innerHTML += `
    <div class="flex flex-col items-center justify-center space-y-4">
        <img src="${data.exec[i].img}" alt="${data.exec[i].name}" class="pic">
        <h1 class="name">${data.exec[i].name}</h1>
        <h2 class="pos">${data.exec[i].pos}</h2>
    </div>
    `
}

for (i = 0; i < Object.keys(data.alum).length; i++) {
    Alum.innerHTML += `
    <div class="flex flex-col items-center justify-center space-y-4">
        <img src="${data.alum[i].img}" alt="${data.alum[i].name}" class="pic">
        <h1 class="name">${data.alum[i].name}</h1>
        <h2 class="pos">${data.alum[i].pos}</h2>
    </div>
    `
}