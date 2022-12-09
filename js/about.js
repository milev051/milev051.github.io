sections = [

    {
        name: "Environments And Operating Systems",
        programs: [
            {
                name: "Windows.jpg",
                level: 4,
                link: "https://www.microsoft.com/en-us/windows/windows-11",
            },

            {
                name: "Ubuntu.svg",
                level: 3,
                link: "https://ubuntu.com/",
            },

            {
                name: "macOS.png",
                level: 2,
                link: "https://www.apple.com/macos/monterey/",
            },

            {
                name: "Eclipse.png",
                level: 3,
                link: "https://www.eclipse.org/downloads/",
            },

            {
                name: "Android Studio.png",
                level: 3,
                link: "https://developer.android.com/studio",
            },

            {
                name: "Visual Studio.png",
                level: 4,
                link: "https://visualstudio.microsoft.com/",
            },

            {
                name: "Visual Studio Code.png",
                level: 4,
                link: "https://code.visualstudio.com/",
            },

            {
                name: "Vim.png",
                level: 1,
                link: "https://www.vim.org/",
            },
        ]
    },

    {
        name: "Editing",
        programs: [
            {
                name: "Adobe Photoshop.png",
                level: 4,
                link: "https://www.adobe.com/products/photoshop.html",
            },

            {
                name: "Adobe Lightroom.png",
                level: 3,
                link: "https://www.adobe.com/products/photoshop-lightroom.html",
            },

            {
                name: "Adobe Illustrator.png",
                level: 4,
                link: "https://www.adobe.com/products/illustrator.html",
            },

            {
                name: "Adobe Premiere Pro.png",
                level: 3,
                link: "https://www.adobe.com/products/premiere.html"
            },

            {
                name: "Adobe After Effects.png",
                level: 2,
                link: "https://www.adobe.com/products/aftereffects.html",
            },

            {
                name: "Affinity Photo.png",
                level: 4,
                link: "https://affinity.serif.com/en-gb/photo/",
            },

            {
                name: "Affinity Designer.png",
                level: 4,
                link: "https://affinity.serif.com/en-gb/designer/",
            },

            {
                name: "Affinity Publisher.png",
                level: 3,
                link: "https://affinity.serif.com/en-gb/publisher/",
            },

            {
                name: "DaVinchi Resolve.jpg",
                level: 4,
                link: "https://www.blackmagicdesign.com/products/davinciresolve",
            },

            {
                name: "Camtasia Studio.png",
                level: 4,
                link: "https://www.techsmith.com/store/camtasia",
            },
        ]
    },

    {
        name: "Programming Languages",
        programs: [
            {
                name: "C.png",
                level: 3,
                link: "https://en.wikipedia.org/wiki/C_(programming_language)",
            },

            {
                name: "C++.png",
                level: 2,
                link: "https://en.wikipedia.org/wiki/C%2B%2B",
            },

            {
                name: 'C Sharp.png',
                level: 3,
                link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
            },

            {
                name: "Java.jpg",
                level: 3,
                link: "https://www.java.com/en/",
            },

            {
                name: "HTML.png",
                level: 4,
                link: "https://en.wikipedia.org/wiki/HTML#:~:text=The%20HyperText%20Markup%20Language%20or,(HyperText%20Markup%20Language)",
            },

            {
                name: "CSS.png",
                level: 4,
                link: "https://en.wikipedia.org/wiki/CSS",
            },

            {
                name: "Javascript.png",
                level: 3,
                link: "https://en.wikipedia.org/wiki/JavaScript",
            },

            {
                name: "Pascal.png",
                level: 3,
                link: "https://www.freepascal.org/",
            },

            {
                name: "AHK.jfif",
                level: 4,
                link: "https://www.autohotkey.com/",
            },
        ]
    },

    {
        name: "Office",
        programs: [
            {
                name: "Microsoft Word.png",
                level: 5,
                link: "https://www.microsoft.com/en-us/microsoft-365/word",
            },

            {
                name: "Microsoft Powerpoint.png",
                level: 5,
                link: "https://www.microsoft.com/en-us/microsoft-365/powerpoint",
            },

            {
                name: "Microsoft Excel.png",
                level: 4,
                link: "https://www.microsoft.com/en-us/microsoft-365/excel",
            },

            {
                name: "WPS Writer.svg",
                level: 5,
                link: "https://www.wps.com/",
            },

            {
                name: "WPS Presentation.svg",
                level: 5,
                link: "https://www.wps.com/",
            },

            {
                name: "WPS Spreadsheet.svg",
                level: 4,
                link: "https://www.wps.com/",
            },
        ]
    },

    {
        name: "Other Programs",
        programs: [
            {
                name: "OBS.jfif",
                level: 4,
                link: "https://obsproject.com/",
            },

            {
                name: "Blender.png",
                level: 4,
                link: "https://www.blender.org/",
            },

            {
                name: "Unity.jpg",
                level: 4,
                link: "https://unity.com/",
            },

            {
                name: "Unreal Engine.jpg",
                level: 3,
                link: "https://www.unrealengine.com/en-US",
            },

            {
                name: "FL Studio.png",
                level: 4,
                link: "https://www.image-line.com/",
            },

            {
                name: "Abelton.png",
                level: 2,
                link: "https://www.image-line.com/",
            },
        ]
    },

]

// FOR EACH SECTION
sections.forEach(section => {

    // CREATE SECTION
    document.getElementById("container").insertAdjacentHTML(
        "beforeend",
        "\
        <section class='titleAndText'>\
        \
            <p class='verticalSectionTitle'>"+ section.name + "</p>\
            \
            <horizontalSection class='fitContent border padding' id='section'>\
            " + returnAllProgramsFrom(section) + "\
            </horizontalSection>\
            \
        </section>\
        "
    )

});

function returnAllProgramsFrom(section) {

    programsToString = ''

    // FOR EACH PROGRAM
    section.programs.forEach(program => {

        // CREATE STRING THAT CONTAINS ALL PROGRAMS FROM SECTION
        programsToString = programsToString +
            "\
            <section id='program'>\
            \
                <section id='stars'>\
                    " + returnStarsToStringFrom(program.level) + "\
                </section >\
                \
                <a href='"+ program.link + "'><img class='programImg' src='img/programs icons/" + program.name + "'></a>\
                \
                <p class='programTitle'>"+ program.name.split(".")[0] + "</p>\
            \
            </section >\
            "
    });

    return programsToString
}

function returnStarsToStringFrom(level) {

    stars = ''

    for (i = 0; i < level; i++) {
        stars = stars + "<img class='starImg' src='img/other/star.png'>";
    }

    return stars
}