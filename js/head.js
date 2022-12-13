document.head.insertAdjacentHTML(
    "afterbegin",
    `
    <meta charset='utf-8'>
    <meta name='viewport' content='width-device-width, initial-scale=1.0'>
    <meta name='author' content='milev'></meta>
    <link rel='shortcut icon' type='image/x-icon' href='img/logo/logo white.png' />
    <title>`+ window.location.pathname.split("/").pop().charAt(0).toUpperCase() + window.location.pathname.split("/").pop().slice(1) + `</title>
    
    <link rel='stylesheet' href='css/@animations.css'></link>
    <link rel='stylesheet' href='css/@general.css'>
    <link rel='stylesheet' href='css/@header.css'>
    <link rel='stylesheet' href='css/@text.css'>
    <link rel='stylesheet' href='css/`+ window.location.pathname.split("/").pop() + `.css'>
    
    <link rel='preconnect' href='https://fonts.googleapis.com'>
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
    <link href='https://fonts.googleapis.com/css2?family=Hubballi&display=swap' rel='stylesheet'></link>
    `
)