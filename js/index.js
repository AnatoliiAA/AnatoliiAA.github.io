let closestEdge = function (distLeft, distTop, w, h) {
    let distBottom = (h - distTop);
    let distRight = (w - distLeft);
    let min = Math.min(distTop, distBottom, distLeft, distRight);
    switch (min) {
        case distLeft:
            return "left";
        case distRight:
            return "right";
        case distTop:
            return "top";
        case distBottom:
            return "bottom";
    }
}

let showTooltipOnEnter = function (e) {
    e.stopPropagation();
    let hoverItem = e.target.querySelector('.portfolio__inside');
    let crossedEdge = closestEdge(e.offsetX, e.offsetY, e.target.clientWidth, e.target.clientHeight);
    switch (crossedEdge) {
        case "left":
            hoverItem.style.cssText = "transition: transform 0s; transform: translateX(-100%) translateY(0%) translateZ(0px)";
            setTimeout(function () {
                hoverItem.style.cssText = "transition: transform 0.3s ease; transform: translateX(0%) translateY(0%) translateZ(0px)";
            }, 50);
            break;
        case "right":
            hoverItem.style.cssText = "transition: transform 0s; transform: translateX(100%) translateY(0%) translateZ(0px)";
            setTimeout(function () {
                hoverItem.style.cssText = "transition: transform 0.3s ease; transform: translateX(0%) translateY(0%) translateZ(0px)";
            }, 50);
            break;
        case "top":
            hoverItem.style.cssText = "transition: transform 0s; transform: translateY(-100%) translateX(0%) translateZ(0px)";
            setTimeout(function () {
                hoverItem.style.cssText = "transition: transform 0.3s ease; transform: translateY(0%) translateX(0%) translateZ(0px)";
            }, 50);
            break;
        case "bottom":
            hoverItem.style.cssText = "transition: transform 0s; transform: translateY(100%) translateX(0%) translateZ(0px)";
            setTimeout(function () {
                hoverItem.style.cssText = "transition: transform 0.3s ease; transform: translateY(0) translateX(0%) translateZ(0px)";
            }, 50);
            break;
    }
}

let hideTooltipOnLeave = function (e) {
    e.stopPropagation();
    let hoverItem = e.target.querySelector('.portfolio__inside');
    let crossedEdge = closestEdge(e.offsetX, e.offsetY, e.target.clientWidth, e.target.clientHeight);
    switch (crossedEdge) {
        case "left":
            setTimeout(function () {
                hoverItem.style.cssText = "transition: transform 0.3s ease; transform: translateX(-100%) translateY(0%) translateZ(0px)";
            }, 50);
            break;
        case "right":
            setTimeout(function () {
                hoverItem.style.cssText = "transition: transform 0.3s ease; transform: translateX(100%) translateY(0%) translateZ(0px)";
            }, 50);
            
            break;
        case "top":
            setTimeout(function () {
                hoverItem.style.cssText = "transition: transform 0.3s ease; transform: translateY(-100%) translateX(0%) translateZ(0px)";
            }, 50);
            
            break;
        case "bottom":
            setTimeout(function () {
                hoverItem.style.cssText = "transition: transform 0.3s ease; transform: translateY(100%) translateX(0%) translateZ(0px)";
            }, 50);
          
            break;
    }
}

for (let i = 1; i < 7; i++) {
    let item = document.getElementById(`item${i}`);
    item.onmouseenter = showTooltipOnEnter;
    item.onmouseleave = hideTooltipOnLeave;
}
