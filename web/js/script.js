function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeToYeti () {
    document.getElementById("content").innerHTML = "";
    $( "#content" ).load( "yeti.html" );
}

function changeToBigfoot () {
    document.getElementById("content").innerHTML = "";
    $( "#content" ).load( "bigfoot.html" );
}

function changeToLochness () {
    document.getElementById("content").innerHTML = "";
    $( "#content" ).load( "lochness.html" );
}

function changeToChupacabra () {
    document.getElementById("content").innerHTML = "";
    $( "#content" ).load( "chupacabra.html" );
}

function changeToHome () {
    document.getElementById("content").innerHTML = "";
    $( "#content" ).load( "index.html" );
}

async function animateYeti () {
    let yeti_sprite = document.querySelector("#animatedYeti");
    yeti_sprite.style.width = "1176px";
    yeti_sprite.style.height = "1168px";
    yeti_sprite.style.transform = "scale(0.10,0.10)";
    yeti_sprite.style.borderRadius = "300px";
    let images = ["url('../images/yeti_sprite_1.jpg')", "url('../images/yeti_sprite_2.jpg')",
                  "url('../images/yeti_sprite_3.jpg')", "url('../images/yeti_sprite_4.jpg')",
                  "url('../images/yeti_sprite_5.jpg')", "url('../images/yeti_sprite_6.jpg')",
                  "url('../images/yeti_sprite_7.jpg')"];

    for (let i = 0; i < 280; i++) {
        yeti_sprite.style.backgroundImage = images[i%7];
        await sleep(50);
    }

}