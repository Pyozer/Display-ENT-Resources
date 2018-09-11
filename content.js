chrome.runtime.onMessage.addListener(function (request) {
    if (request.action === 'DISPLAY_RESOURCES') {
        var childDivs = document.getElementsByClassName('x-tree3-node');

        for (var i = 0; i < childDivs.length; i++) {
            var childDiv = childDivs[i];
            var id = childDiv.id;
            var resID = id.replace("Direct Planning Tree_", "");
            var spanText = childDiv.getElementsByClassName('x-tree3-node-text')[0];
            spanText.innerHTML = spanText.innerHTML + " / " + resID;
        }
    }
});