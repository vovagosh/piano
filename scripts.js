//Initialize
for (key of keys) {
    let div = document.createElement('div');
    let target = document.getElementById("parent");
    target = key.extra ? target.lastChild : target; // Can I simplify this?
    div.className = !key.extra ? "key1" : "key2";
    div.id = key.id;
    target.appendChild(div);
}
//Click
parent.onclick = function (event) {
    const note = keys.find(key => key.id === event.target.id).note;
    write.innerText = note;
}
//KeyPress
document.addEventListener("keypress", function (event) {
    const note = keys.find(key => key.button === event.key).note;
    write.innerText = note;
});


