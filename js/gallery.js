collection = {
    name: String,
    thumbnailImage: String,
    images: String[100],
}

collections = [
    marijana_stojanovic = {
        name: "@marijana_stojanovic",
        thumbnailImage: "20200816_175024 edit.jpg",
        images: [
            "20200816_171726 edit.jpg",
            "20200816_175024 edit.jpg",
        ]
    },

    aleksandra_stojanovic = {
        name: "@aleksandra_stojanovic",
        thumbnailImage: "MLV_0118.jpg",
        images: [
            "20200820_152908 edit_2.jpg",
            "MLV_0118.jpg",
            "MLV_0177_edit03.jpg",
            "MLV_0185_edit01.jpg",
        ],
    },

    emilija_nikolic = {
        name: "@emilija_nikolic",
        thumbnailImage: "MLV_0174 edit_2.jpg",
        images: [
            "MLV_0174 edit_2.jpg",
            "MLV_0191 edit_1.jpg",
        ],
    },

    kristina_ristic = {
        name: "@kristina_ristic",
        thumbnailImage: "MLV_0046_1.jpg",
        images: [
            "MLV_0046_1.jpg",
            "MLV_0062_1.jpg",
            "MLV_0154_1.jpg",
            "MLV_0159_1.jpg",
        ]
    },

    ivan_dodov = {
        name: "@ivan_dodov",
        thumbnailImage: "20200812_181734 edit.jpg",
        images: [
            "20200812_181734 edit.jpg",
        ],
    },

    andjela_mladenovic = {
        name: "@andjela_mladenovic",
        thumbnailImage: "173 edit_1.jpg",
        images: [
            "28 edit.jpg",
            "146 edit.jpg",
            "171 edit.jpg",
            "173 edit_1.jpg",
        ],
    },

    petar_petricevic = {
        name: "@petar_petricevic",
        thumbnailImage: "MLV_0010 edit.jpg",
        images: [
            "MLV_0010 edit.jpg",
        ]
    },

    natasa_djordjevic = {
        name: "@natasa_djordjevic",
        thumbnailImage: "20200908_174653 edit.jpg   'style='object-position: 35%;",
        images: [
            "20200908_171747 edit_1.jpg 'style='object-position: 60%;",
            "20200908_174653 edit.jpg  'style='object-position: 35%;",
        ],
    },

    sanja_milev = {
        name: "@sanja_milev",
        thumbnailImage: "20200805_171742 edit.jpg",
        images: [
            "20200805_171742 edit.jpg",
        ],
    },

    vlada_stojanovic = {
        name: "@vlada_stojanovic",
        thumbnailImage: "20200528_133842 edit.jpg  'style='object-position: 65%;",
        images: [
            "20200528_133842 edit.jpg  'style='object-position: 65%;",
            "20200528_142959 edit.jpg 'style='object-position: 85%;",
        ],
    },
]

showCollectionsThumbnail()

function showCollectionsThumbnail() {
    for (i = 0; i < collections.length; i++) {
        collection = collections[i]
        document.getElementById("container").insertAdjacentHTML(
            "beforeend",
            "\
            <section class='pack'>\
                <a href='javascript:showCollectionImages(" + i + ");'>\
                    <img class='img' src=' img/" + collection.name + "/compressed/" + collection.thumbnailImage + " '>\
                </a>\
            </section>\
            "
        )
    }
}

function showCollectionImages(collectionId) {
    clear()
    scrollToTop()
    collection = collections[collectionId]

    for (i = 0; i < 100; i++) {
        if (collection.images[i] == null)
            break

        document.getElementById("container").insertAdjacentHTML(
            "beforeend",
            "\
            <section class='pack'>\
                <a href='javascript:openFullScreen(" + collectionId + "," + i + ")'>\
                    <img class='img' src='img/" + collection.name + "/compressed/" + collection.images[i] + "'>\
                </a>\
            </section>\
            "
        )
    }
}

function openFullScreen(collectionId, imageId) {
    closeFullScreen()
    hideScroll()
    diffuse()
    collection = collections[collectionId]
    collectionImage = collection.images[imageId]

    if (collectionImage.includes("style"))
        collectionImage = collectionImage.split("style")[0]

    document.getElementById("container").insertAdjacentHTML(
        "afterbegin",
        "\
        <div id='preview'>\
            <img id='imagePreview' onclick='javascript:closeFullScreen()' src='img/" + collection.name + "/original/" + collectionImage + "'>\
        </div>\
        "
    )
    document.getElementById('preview').style.animation = 'fadeIn 0.2s'
}

function closeFullScreen() {
    undiffuse()
    showScroll()
    if (document.getElementById('preview') == null)
        return
    document.getElementById('preview').style.animation = 'fadeOut 0.2s'
    setTimeout(() => {
        document.getElementById("preview").remove()
    }, 150)
}

function diffuse() {
    document.body.insertAdjacentHTML("afterbegin", "<div id='diffuse'></div>")
    document.getElementById("diffuse").style.animation = 'fadeIn 0.2s'
}

function undiffuse() {
    if (document.getElementById("diffuse") == null)
        return
    document.getElementById("diffuse").style.animation = 'fadeOut 0.2s'
    setTimeout(document.getElementById("diffuse").remove(), 190)
}

function clear() {
    document.getElementById("container").innerHTML = ""
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function showScroll() {
    document.getElementsByTagName("html")[0].style.overflow = "overlay"
}

function hideScroll() {
    document.getElementsByTagName("html")[0].style.overflow = "hidden"
}