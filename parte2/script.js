
function like(i) {
    let span = document.querySelector("#post-"+i);
    let text = span.innerText;
    // let h4 = document.querySelector("#likes");
    // console.log(number[0]);
    let l = parseInt(text);
    l += 1;
    // console.log( `${l} likes`);
    var cadena = `${l} likes`;
    span.innerText = cadena;
}