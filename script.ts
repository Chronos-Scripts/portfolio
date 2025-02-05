interface Project {
    Name: string;
    Tags: { Name: string }[];
    desc: string;
    src: string;
    img: string;
}

interface Skill {
    [index: number]: string;
}

interface Contact {
    [index:number]: string;
}

interface Data {
    projects: Project[];
    skills: Skill[];
    contact : Contact[];
}

const data: Data = {
    "projects": [
        {
            "Name": "this is it",
            "Tags": [
                { "Name": "Tag1" },
                { "Name": "Tag2" }
            ],
            "desc": "look i made this with no work to show",
            "src": "project-url",
            "img": "./src/wcs.png"
        }
    ],
    "skills": [
        ['Rojo', 'https://rojo.space/'],
        ['Roblox-Ts', 'https://roblox-ts.com/'],
        ['Wally', 'https://wally.run/'],
        ['TypeScript', 'https://www.typescriptlang.org/'],
        ['JavaScript', ""],
        ['React', 'https://react.dev/'],
        ['Reflex', 'https://littensy.github.io/reflex/'],
        ['Fusion', 'https://elttob.uk/Fusion/0.2/'],
        ['Lua', ""],
        ['Luau', 'https://luau-lang.org/'],
        ['Flamework', 'https://flamework.fireboltofdeath.dev/'],
        ['Github', 'https://github.com/'],
        ['Git', 'https://git-scm.com/'],
        ['Promise', 'https://eryn.io/roblox-lua-promise/']
    ],
    "contact": [
        ["Discord", "ccronos", "./src/discord.svg", 'https://discordid.netlify.app/?id=1061987118441836554'],
        ["Developer Forum", "@PhoenixBlade1000", "./src/devforum.svg", 'https://devforum.roblox.com/u/phoenixblade1000']
    ]
}

document.addEventListener('DOMContentLoaded', function() {
    var navItemsContainer = document.querySelector('.nav-items');
    var pages = document.querySelectorAll('.section');
    
    let currentSectionIndex = 0;
    
    var navItems = navItemsContainer?.querySelectorAll('li') as any;

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function() {
            for (let j = 0; j < navItems.length; j++) {
                let firstChild = navItems[j].firstChild as HTMLElement;
                if (firstChild.classList.contains('active')) {
                    firstChild.style.transition = 'all 0.25s';
                    firstChild.style.color = 'rgba(255, 255, 255, 0.788)';
                    firstChild.classList.remove('active');
                }
            }

            let firstChild = navItems[i].firstChild as HTMLElement;
            firstChild.style.color = '#197dff';
            firstChild.classList.add('active');
        });
    }

    function setActiveLink(l? : string) {
        var currentHash = l || '#home';
        
        for (let i = 0; i < navItems.length; i++) {
            let link = navItems[i].firstChild as HTMLElement;
            if (link.getAttribute('href') == currentHash) {
                link.style.color = '#197dff';
                link.classList.add('active');
            } else {
                if (link.classList.contains('active')) {
                    link.style.color = 'rgba(255, 255, 255, 0.788)';
                    link.classList.remove('active');
                }
            }
        }
    }

    window.addEventListener('hashchange', function() {
        setActiveLink(this.window.location.hash);
    });

    setActiveLink();


    for (let i = 0; i < pages.length-1; i++) { /* Divider beteen sections */
        console.log(pages[i]);

        let page = pages[i];
        let divider = document.createElement('p');
        divider.style.width = '120%';
        divider.style.height = '.2rem';
        divider.style.backgroundColor = '#ccc';
        divider.style.left = '50%';
        divider.style.marginTop = '5rem'
        divider.style.transform = 'translateX(-10%)';
        divider.id = `divider-${i}`;

        page.appendChild(divider);
    }

    window.addEventListener('scroll', () => {
        let currentSection = pages[0];
        let currentSectionTop = currentSection.getBoundingClientRect().top;

        for (let i = 1; i < pages.length; i++) {
            let sectionTop = pages[i].getBoundingClientRect().top;
            if (Math.abs(sectionTop) < Math.abs(currentSectionTop)) {
                currentSection = pages[i];
                currentSectionTop = sectionTop;
            }
        }

        currentSectionIndex = Array.from(pages).indexOf(currentSection);
        setActiveLink(`#${currentSection.id}`);
    }); 

    /* Project Creator */
    let projectContainer = document.querySelector(".projects")
    data.projects.forEach((value) => {
        let item = document.createElement("div")
        item.className = "project-item"
        let projecturl = document.createElement("a")
        projecturl.href = value.src
        let section = document.createElement("section")
        let anotherDiv = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.textContent = value.Name

        let p = document.createElement('p')
        p.textContent = value.desc

        let taglist = document.createElement("ul")
        taglist.className = 'tag-list'

        let img = document.createElement('img')
        img.src = value.img
        img.alt = "Project I worked on"

        value.Tags.forEach((value) => {
            let tag = document.createElement("li")
            tag.textContent = value.Name
            tag.className = "tag"

            taglist.appendChild(tag)
        })

        anotherDiv.appendChild(p)
        anotherDiv.appendChild(h3)
        anotherDiv.appendChild(taglist)

        section.appendChild(anotherDiv)

        projecturl.appendChild(section)
        projecturl.appendChild(img)

        item.appendChild(projecturl)
        projectContainer?.appendChild(item)
    })

    /* Skill Creator */

    let skillsContainer = document.querySelector(".skills-list")
    data.skills.forEach((value => {
        const skill = document.createElement("div")
        skill.className = "skill-item"

        const url = document.createElement("a")
        url.href = value[1]
        url.target = "__blank"
        url.textContent = value[0]
        skill.appendChild(url)

        skillsContainer?.appendChild(skill)
    }))

    /* Footer Creator */
    let footer = document.createElement('footer');
    footer.className = 'footer';
    footer.style.textAlign = 'center';
    footer.style.padding = '.5rem';
    footer.style.color = '#fff';

    let footerText = document.createElement('p');
    footerText.textContent = '© 2025 ccronos. All rights reserved.';

    let footerDetails = document.createElement('p');
    footerDetails.textContent = 'Built with TypeScript, HTML, CSS and lots of ♥ ;)';

    footer.appendChild(footerText);
    footer.appendChild(footerDetails);
    document.body.appendChild(footer);

    /* Contact Creator */
    let contactContainer = document.querySelector(".contact-list");
    data.contact.forEach((value) => {
        const contactItem = document.createElement("div");
        contactItem.className = "contact-item";

        const anotherDiv = document.createElement("div")

        const contactName = document.createElement("h3");
        contactName.textContent = value[0];

        const contactDetail = document.createElement("p");
        if (value[1].includes("@")) {
            contactDetail.textContent = value[1]
        } else {
            contactDetail.textContent = `@${value[1]}`;
        }
        const contactImg = document.createElement("img");
        contactImg.src = value[2];
        contactImg.alt = `${value[0]} icon`;

        contactItem.appendChild(contactImg);
        anotherDiv.appendChild(contactName);
        anotherDiv.appendChild(contactDetail);

        contactItem.appendChild(anotherDiv)

        contactItem.addEventListener('click', () => {
            window.open(value[3], "__blank")
        })

        contactContainer?.appendChild(contactItem);
    });
});