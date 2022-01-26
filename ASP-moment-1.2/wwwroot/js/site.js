// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Get the button and container to be able to make it fullscreen
let containerEl = document.getElementsByClassName("mainContent")[0]

let fullscreenBtn = document.getElementsByClassName("fullscreenBtn")[0]

function fullscreen(El) {


    if (containerEl.requestFullscreen) {
        containerEl.requestFullscreen();
        

    }

   
}


