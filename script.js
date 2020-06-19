const topLeft = document.getElementsByName('top-left');
const topRight = document.getElementsByName('top-right');
const bottomLeft = document.getElementsByName('bottom-left');
const bottomRight = document.getElementsByName('bottom-right');
const cssCustom = document.getElementById('txtCss');

updateCss();

topLeft[0].onkeyup = () => {
    document.querySelector('#box-example').style.borderTopLeftRadius = topLeft[0].value + 'px';
    updateCss();
};
topRight[0].onkeyup = () => {
    document.querySelector('#box-example').style.borderTopRightRadius = topRight[0].value + 'px';
    updateCss();
};
bottomLeft[0].onkeyup = () => {
    document.querySelector('#box-example').style.borderBottomLeftRadius = bottomLeft[0].value + 'px'
    updateCss();
};
bottomRight[0].onkeyup = () => {
    document.querySelector('#box-example').style.borderBottomRightRadius = bottomRight[0].value + 'px'
    updateCss();
};

function updateCss() {
    let css = `border-top-left-radius: ${topLeft[0].value}px;\nborder-top-right-radius: ${topRight[0].value}px;\nborder-bottom-left-radius: ${bottomLeft[0].value}px;\nborder-bottom-right-radius: ${bottomRight[0].value}px;`;
    cssCustom.value = css;
}

function checkEmptyField(element) {
    if (element.value == "") {
        element.value = 0;
        updateCss();
    }
}

function copyCss() {
    cssCustom.select();
    document.execCommand('copy');

    alert("CSS Copiado para área de transferência!");
}