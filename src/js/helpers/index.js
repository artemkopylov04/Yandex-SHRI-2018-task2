function updateDeviceArrows(devices, arrowPrev, arrowNext) {

        arrowPrev.classList.add("disabled");
        if (devices.length - document.querySelectorAll(".hidden").length < 6) {
            arrowPrev.classList.add("disabled");
            arrowNext.classList.add("disabled");
        } else{
            arrowNext.classList.remove("disabled");
        }
}

export default updateDeviceArrows