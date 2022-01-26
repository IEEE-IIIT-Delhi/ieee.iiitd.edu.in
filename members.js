const data = {
    rep : {
        0 : {
            name: "Prof. S. S. Jamuar",
            pos: "Faculty Coordinator",
            img: "https://via.placeholder.com/100x100",
            a: "./members/1.html"
        },
        1 : {
            name: "Dr. Shobha Sundar Ram",
            pos: "Head of Department, ECE",
            img: "https://via.placeholder.com/100x100",
            a: "./members/2.html"
        },
        2 : {
            name: "Dr. Rajiv Ratn Shah",
            pos: "CompSoc Faculty Coordinator",
            img: "https://via.placeholder.com/100x100",
            a: "./members/3.html"
        }
    },
    core: {
        3 : {
            name: "Prakhar Prasad",
            pos: "Chairperson",
            img: "https://via.placeholder.com/100x100",
            a: "./members/4.html"
        },
        4 : {
            name: "Ansh Arora",
            pos: "Vice Chairperson",
            img: "https://via.placeholder.com/100x100",
            a: "./members/5.html"
        },
        5 : {
            name: "Gursimran Kaur",
            pos: "Secretary / Coordinator",
            img: "https://via.placeholder.com/100x100",
            a: "./members/6.html"
        },
        6 : {
            name: "Garmit Pant",
            pos: "Treasurer / Coordinator",
            img: "https://via.placeholder.com/100x100",
            a: "./members/7.html"
        },
        7 : {
            name: "Mihir Chaturvedi",
            pos: "WebMaster",
            img: "https://via.placeholder.com/100x100",
            a: "./members/8.html"
        },
        8 : {
            name: "Daksh T",
            pos: "Industrial Outreach",
            img: "https://via.placeholder.com/100x100",
            a: "./members/9.html"
        },
        9 : {
            name: "Sachleen Kaur",
            pos: "Design Head",
            img: "https://via.placeholder.com/100x100",
            a: "./members/10.html"
        },
        10 : {
            name: "Shragvi Sidarth Jha",
            pos: "Operations Head",
            img: "https://via.placeholder.com/100x100",
            a: "./members/11.html"
        },
        11 : {
            name: "Niranjan Sundarajan",
            pos: "Events Head",
            img: "https://via.placeholder.com/100x100",
            a: "./members/12.html"
        }
    },
    wie: {
        12 : {
            name: "Meetakshi Setiya",
            pos: "WiE Chairperson / Coordinator",
            img: "https://via.placeholder.com/100x100",
            a: "./members/13.html"
        },
        13 : {
            name: "Amolika Bansal",
            pos: "Vice Chairperson",
            img: "https://via.placeholder.com/100x100",
            a: "./members/14.html"
        },
        14 : {
            name: "Sunishka Sharma",
            pos: "Secretary",
            img: "https://via.placeholder.com/100x100",
            a: "./members/15.html"
        }
    },
    compsoc: {
        15 : {
            name: "Rohan Dhar",
            pos: "CompSoc Chairperson",
            img: "https://via.placeholder.com/100x100",
            a: "./members/16.html"
        },
        16 : {
            name: "Abhik S Basu",
            pos: "Vice Chairperson",
            img: "https://via.placeholder.com/100x100",
            a: "./members/17.html"
        }
    },
    exec: {
        17 : {
            name: "Raghav Sahni",
            img: "https://via.placeholder.com/100x100",
            a: "./members/18.html"
        },
        18 : {
            name: "Tejdeep Ch",
            img: "https://via.placeholder.com/100x100",
            a: "./members/19.html"
        },
        19 : {
            name: "Anusha Tiwari",
            img: "https://via.placeholder.com/100x100",
            a: "./members/20.html"
        },
        20 : {
            name: "Ritwick Pal",
            img: "https://via.placeholder.com/100x100",
            a: "./members/21.html"
        },
        21 : {
            name: "Jogith S Chandran",
            img: "https://via.placeholder.com/100x100",
            a: "./members/22.html"
        },
        22 : {
            name: "Samyak Jain",
            img: "https://via.placeholder.com/100x100",
            a: "./members/23.html"
        },
        23 : {
            name: "Mohit Jain",
            img: "https://via.placeholder.com/100x100",
            a: "./members/24.html"
        },
        24 : {
            name: "Aayush Kapoor",
            img: "https://via.placeholder.com/100x100",
            a: "./members/25.html"
        }
    },
    alum: {
        25 : {
            name: "Max",
            img: "https://via.placeholder.com/100x100",
            a: "./members/26.html"
        },
        26 : {
            name: "Jack",
            img: "https://via.placeholder.com/100x100",
            a: "./members/27.html"
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
for (i = 0; i < 3; i++) {
    Rep.innerHTML += `<a href="${data.rep[i].a}">
    <div class="memCard flex flex-col items-center justify-center space-y-4">
        <img src="${data.rep[i].img}" alt="${data.rep[i].name}" class="pic">
        <h1 class="name">${data.rep[i].name}</h1>
        <h2 class="pos">${data.rep[i].pos}</h2>
    </div></a>
    `
}

for (i = 3; i < 12; i++) {
    Core.innerHTML += `<a href="${data.core[i].a}">
    <div class="memCard flex flex-col items-center justify-center space-y-4">
        <img src="${data.core[i].img}" alt="${data.core[i].name}" class="pic">
        <h1 class="name">${data.core[i].name}</h1>
        <h2 class="pos">${data.core[i].pos}</h2>
    </div></a>
    `
}

for (i = 12; i < 15; i++) {
    Wie.innerHTML += `<a href="${data.wie[i].a}">
    <div class="memCard flex flex-col items-center justify-center space-y-4">
        <img src="${data.wie[i].img}" alt="${data.wie[i].name}" class="pic">
        <h1 class="name">${data.wie[i].name}</h1>
        <h2 class="pos">${data.wie[i].pos}</h2>
    </div></a>
    `
}

for (i = 15; i < 17; i++) {
    Compsoc.innerHTML += `<a href="${data.compsoc[i].a}">
    <div class="memCard flex flex-col items-center justify-center space-y-4">
        <img src="${data.compsoc[i].img}" alt="${data.compsoc[i].name}" class="pic">
        <h1 class="name">${data.compsoc[i].name}</h1>
        <h2 class="pos">${data.compsoc[i].pos}</h2>
    </div></a>
    `
}

for (i = 17; i < 25; i++) {
    Exec.innerHTML += `<a href="${data.exec[i].a}">
    <div class="memCard flex flex-col items-center justify-center space-y-4">
        <img src="${data.exec[i].img}" alt="${data.exec[i].name}" class="pic">
        <h1 class="name">${data.exec[i].name}</h1>
    </div></a>
    `
}

for (i = 25; i < 27; i++) {
    Alum.innerHTML += `<a href="${data.alum[i].a}">
    <div class="memCard flex flex-col items-center justify-center space-y-4">
        <img src="${data.alum[i].img}" alt="${data.alum[i].name}" class="pic">
        <h1 class="name">${data.alum[i].name}</h1>
        <h2 class="pos">${data.alum[i].pos}</h2>
    </div></a>
    `
}