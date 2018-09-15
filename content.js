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

/*
DONT WORK BECAUSE SCROLL VIEW EDIT HTML ON SCROLL
WHAT I NEED: DONT REMOVE ROWS ON SCROLL TO HAVE ALL ROWS

class Tree {
    constructor(children = []) {
        this.children = children;
    }
}

Tree.prototype.toString = function treeToString() {
    var elemsStr = '';
    this.children.forEach(function (elem) {
        elemsStr += elem.toString();
    });
    return "{" + elemsStr + "}";
}

class Node {
    constructor(label, resID, children = []) {
        this.label = label;
        this.resID = resID;
        this.children = children;
    }
}

Node.prototype.toString = function nodeToString() {
    if (this.children.length < 1)
        return "\"" + this.label + "\": " + this.resID + ",";
    else {
        var elemsStr = '';
        this.children.forEach(function (elem) {
            elemsStr += elem.toString();
        });
        return "\"" + this.label + "\": {" + elemsStr + "},";
    }
}

chrome.runtime.onMessage.addListener(function (request) {
    if (request.action === 'DISPLAY_RESOURCES') {

        var rows = document.getElementsByClassName('x-grid3-row');

        var element = new Tree();

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];

            var level = row.attributes.getNamedItem('aria-level').value;

            var resDivs = row.getElementsByClassName('x-tree3-node');
            var resDiv = null;
            if (resDivs.length > 0)
                resDiv = resDivs[0];

            var resID = -1;
            var spanText = "null";

            if (resDiv != null) {
                resID = resDiv.id.replace("Direct Planning Tree_", "");
                spanText = resDiv.getElementsByClassName('x-tree3-node-text')[0].innerHTML;
            }
            pushToLevel(element, new Node(spanText, resID), 1, level);
        }

        function pushToLevel(element, valueToPush, actualLevel, levelTarget) {
            if (element.children == null) {
                element.children = [];
            }
            let level = element.children.length - 1;
            if (actualLevel == levelTarget)
                element.children.push(valueToPush);
            else {
                pushToLevel(element.children[level < 0 ? 0 : level], valueToPush, actualLevel + 1, levelTarget);
            }
        }

        console.log(element.toString().replace(/,\}/g, '}').replace(/\}\}/g, '}}'));
    }
});
*/