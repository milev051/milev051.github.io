collection = {
    name: String,
    thumbnailImage: String,
    images: String[100],
    username: String,
    collectionLink: String,
}

collections = [
    {
        name: "marijana stojanovic",
        username: '',
        thumbnailImage: "20200816_175024 edit.jpg",
        images: [
            "20200816_171726 edit.jpg",
            "20200816_175024 edit.jpg",
        ],
    },

    {
        name: "aleksandra stojanovic",
        username: '',
        thumbnailImage: "MLV_0118.jpg",
        images: [
            "20200820_152908 edit_2.jpg",
            "MLV_0118.jpg",
            "MLV_0177_edit03.jpg",
            "MLV_0185_edit01.jpg",
        ],
    },

    {
        name: "emilija nikolic",
        username: '',
        thumbnailImage: "MLV_0174 edit_2.jpg",
        images: [
            "MLV_0174 edit_2.jpg",
            "MLV_0191 edit_1.jpg",
        ],
    },

    kristina_ristic = {
        name: "kristina ristic",
        username: '',
        thumbnailImage: "MLV_0046_1.jpg",
        images: [
            "MLV_0046_1.jpg",
            "MLV_0062_1.jpg",
            "MLV_0154_1.jpg",
            "MLV_0159_1.jpg",
        ],
    },

    {
        name: "ivan dodov",
        username: '',
        thumbnailImage: "20200812_181734 edit.jpg",
        images: [
            "20200812_181734 edit.jpg",
        ],
    },

    {
        name: "andjela mladenovic",
        username: '',
        thumbnailImage: "173 edit_1.jpg",
        images: [
            "28 edit.jpg",
            "146 edit.jpg",
            "171 edit.jpg",
            "173 edit_1.jpg",
        ],
    },

    {
        name: "petar petricevic",
        username: '',
        thumbnailImage: "MLV_0010 edit.jpg",
        images: [
            "MLV_0010 edit.jpg",
        ],
    },

    natasa_djordjevic = {
        name: "natasa djordjevic",
        username: '',
        thumbnailImage: "20200908_174653 edit.jpg   'style='object-position: 35%;",
        images: [
            "20200908_171747 edit_1.jpg 'style='object-position: 60%;",
            "20200908_174653 edit.jpg  'style='object-position: 35%;",
        ],
    },

    {
        name: "sanja milev",
        username: '',
        thumbnailImage: "20200805_171742 edit.jpg",
        images: [
            "20200805_171742 edit.jpg",
        ],
    },

    {
        name: "vlada stojanovic",
        username: '',
        thumbnailImage: "20200528_133842 edit.jpg  'style='object-position: 65%;",
        images: [
            "20200528_133842 edit.jpg  'style='object-position: 65%;",
            "20200528_142959 edit.jpg 'style='object-position: 85%;",
        ],
    },
]

// ON START
showCollectionsThumbnails()

function showCollectionsThumbnails() {
    for (i = 0; i < collections.length; i++) {
        collection = collections[i]
        document.getElementById("gallery").insertAdjacentHTML(
            "beforeend",
            "\
            <div class='galleryElement'>\
                <a href='javascript:showCollectionImages(" + i + ");'>\
                    <img class='galleryImg' src=' img/collections/" + collection.name + "/compressed/" + collection.thumbnailImage + " '>\
                </a>\
                <a href='https://www.instagram.com/"+ collection.username + "/'>\
                    <p class='collectionUsername'>"+ returnAtSymbolFor(collection.username) + collection.username + "</p>\
                </a>\
            </div>\
            "
        )
    }
}

function showCollectionImages(collectionId) {
    clear()
    scrollToTop()

    collection = collections[collectionId]

    if (collection.username.length > 0)
        // ADD TITLE
        document.getElementById("container").insertAdjacentHTML(
            "afterbegin",
            "\
        <a href='https://www.instagram.com/"+ collection.username + "/'>\
            <p class='galleryTitle'>"+ returnAtSymbolFor(collection.username) + collection.username + "</p>\
        </a>\
        "
        )

    for (i = 0; i < 100; i++) {
        if (collection.images[i] == null)
            break

        if (collection.username.length > 0)
            atSymbol = '@'
        else
            atSymbol = ''

        document.getElementById("gallery").insertAdjacentHTML(
            "beforeend",
            "\
            <div class='galleryElement'>\
                <a href='javascript:openFullScreen(" + collectionId + "," + i + ")'>\
                    <img class='galleryImg' src='img/collections/" + collection.name + "/compressed/" + collection.images[i] + "'>\
                </a>\
            </div>\
            "
        )
    }
}

function openFullScreen(collectionId, imageId) {
    disableScroll()
    closeFullScreen()
    diffuse()

    collection = collections[collectionId]
    collectionImage = collection.images[imageId]

    if (collectionImage.includes("style"))
        collectionImage = collectionImage.split("style")[0]

    document.body.insertAdjacentHTML(
        "afterbegin",
        "\
        <div id='preview'>\
            <img id='imagePreview' onclick='javascript:closeFullScreen()' src='img/collections/" + collection.name + "/original/" + collectionImage + "'>\
        </div>\
        "
    )
    document.getElementById('preview').style.animation = 'fadeIn 0.2s'
}

function closeFullScreen() {
    enableScroll()
    undiffuse()

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
    document.getElementById("gallery").innerHTML = ""
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function enableScroll() {
    document.getElementById("html").style.overflow = "visible"
}

function disableScroll() {
    document.getElementById("html").style.overflow = "hidden"
}

function returnAtSymbolFor(collectionUsername) {
    if (collectionUsername.length > 0)
        return '@'
    else
        return ''
}