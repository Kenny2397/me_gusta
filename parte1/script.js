function likes() {
    let h4 = document.querySelector("#likes");
    let text = h4.innerText;
    // let h4 = document.querySelector("#likes");
    // console.log(number[0]);
    let l = parseInt(text);
    l += 1;
    // console.log( `${l} likes`);
    var cadena = `${l} likes`;
    h4.innerText = cadena;
}