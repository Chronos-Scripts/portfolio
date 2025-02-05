var data = {
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
};
document.addEventListener('DOMContentLoaded', function () {
    var navItemsContainer = document.querySelector('.nav-items');
    var pages = document.querySelectorAll('.section');
    var currentSectionIndex = 0;
    var navItems = navItemsContainer === null || navItemsContainer === void 0 ? void 0 : navItemsContainer.querySelectorAll('li');
    var _loop_1 = function (i) {
        navItems[i].addEventListener('click', function () {
            for (var j = 0; j < navItems.length; j++) {
                var firstChild_1 = navItems[j].firstChild;
                if (firstChild_1.classList.contains('active')) {
                    firstChild_1.style.transition = 'all 0.25s';
                    firstChild_1.style.color = 'rgba(255, 255, 255, 0.788)';
                    firstChild_1.classList.remove('active');
                }
            }
            var firstChild = navItems[i].firstChild;
            firstChild.style.color = '#197dff';
            firstChild.classList.add('active');
        });
    };
    for (var i = 0; i < navItems.length; i++) {
        _loop_1(i);
    }
    function setActiveLink(l) {
        var currentHash = l || '#home';
        for (var i = 0; i < navItems.length; i++) {
            var link = navItems[i].firstChild;
            if (link.getAttribute('href') == currentHash) {
                link.style.color = '#197dff';
                link.classList.add('active');
            }
            else {
                if (link.classList.contains('active')) {
                    link.style.color = 'rgba(255, 255, 255, 0.788)';
                    link.classList.remove('active');
                }
            }
        }
    }
    window.addEventListener('hashchange', function () {
        setActiveLink(this.window.location.hash);
    });
    setActiveLink();
    for (var i = 0; i < pages.length - 1; i++) { /* Divider beteen sections */
        console.log(pages[i]);
        var page = pages[i];
        var divider = document.createElement('p');
        divider.style.width = '120%';
        divider.style.height = '.2rem';
        divider.style.backgroundColor = '#ccc';
        divider.style.left = '50%';
        divider.style.marginTop = '5rem';
        divider.style.transform = 'translateX(-10%)';
        divider.id = "divider-".concat(i);
        page.appendChild(divider);
    }
    window.addEventListener('scroll', function () {
        var currentSection = pages[0];
        var currentSectionTop = currentSection.getBoundingClientRect().top;
        for (var i = 1; i < pages.length; i++) {
            var sectionTop = pages[i].getBoundingClientRect().top;
            if (Math.abs(sectionTop) < Math.abs(currentSectionTop)) {
                currentSection = pages[i];
                currentSectionTop = sectionTop;
            }
        }
        currentSectionIndex = Array.from(pages).indexOf(currentSection);
        setActiveLink("#".concat(currentSection.id));
    });
    /* Project Creator */
    var projectContainer = document.querySelector(".projects");
    data.projects.forEach(function (value) {
        var item = document.createElement("div");
        item.className = "project-item";
        var projecturl = document.createElement("a");
        projecturl.href = value.src;
        var section = document.createElement("section");
        var anotherDiv = document.createElement("div");
        var h3 = document.createElement("h3");
        h3.textContent = value.Name;
        var p = document.createElement('p');
        p.textContent = value.desc;
        var taglist = document.createElement("ul");
        taglist.className = 'tag-list';
        var img = document.createElement('img');
        img.src = value.img;
        img.alt = "Project I worked on";
        value.Tags.forEach(function (value) {
            var tag = document.createElement("li");
            tag.textContent = value.Name;
            tag.className = "tag";
            taglist.appendChild(tag);
        });
        anotherDiv.appendChild(p);
        anotherDiv.appendChild(h3);
        anotherDiv.appendChild(taglist);
        section.appendChild(anotherDiv);
        projecturl.appendChild(section);
        projecturl.appendChild(img);
        item.appendChild(projecturl);
        projectContainer === null || projectContainer === void 0 ? void 0 : projectContainer.appendChild(item);
    });
    /* Skill Creator */
    var skillsContainer = document.querySelector(".skills-list");
    data.skills.forEach((function (value) {
        var skill = document.createElement("div");
        skill.className = "skill-item";
        var url = document.createElement("a");
        url.href = value[1];
        url.target = "__blank";
        url.textContent = value[0];
        skill.appendChild(url);
        skillsContainer === null || skillsContainer === void 0 ? void 0 : skillsContainer.appendChild(skill);
    }));
    /* Footer Creator */
    var footer = document.createElement('footer');
    footer.className = 'footer';
    footer.style.textAlign = 'center';
    footer.style.padding = '.5rem';
    footer.style.color = '#fff';
    var footerText = document.createElement('p');
    footerText.textContent = '© 2025 ccronos. All rights reserved.';
    var footerDetails = document.createElement('p');
    footerDetails.textContent = 'Built with TypeScript, HTML, CSS and lots of ♥ ;)';
    footer.appendChild(footerText);
    footer.appendChild(footerDetails);
    document.body.appendChild(footer);
    /* Contact Creator */
    var contactContainer = document.querySelector(".contact-list");
    data.contact.forEach(function (value) {
        var contactItem = document.createElement("div");
        contactItem.className = "contact-item";
        var anotherDiv = document.createElement("div");
        var contactName = document.createElement("h3");
        contactName.textContent = value[0];
        var contactDetail = document.createElement("p");
        if (value[1].includes("@")) {
            contactDetail.textContent = value[1];
        }
        else {
            contactDetail.textContent = "@".concat(value[1]);
        }
        var contactImg = document.createElement("img");
        contactImg.src = value[2];
        contactImg.alt = "".concat(value[0], " icon");
        contactItem.appendChild(contactImg);
        anotherDiv.appendChild(contactName);
        anotherDiv.appendChild(contactDetail);
        contactItem.appendChild(anotherDiv);
        contactItem.addEventListener('click', function () {
            window.open(value[3], "__blank");
        });
        contactContainer === null || contactContainer === void 0 ? void 0 : contactContainer.appendChild(contactItem);
    });
});
