async function quote() {
    const getServerSms = await fetch('/hello');
    const allThoughs = await getServerSms.json();
    //const myObj = await JSON.parse(allThoughs);

    const domElement = document.getElementById("fetch");
    var t =Math.floor((Math.random() * 3));
    domElement.innerHTML = allThoughs[Object.keys(allThoughs)[t]];

    console.log(allThoughs[Object.keys(allThoughs)[t]]);
    //console.log(myObj.though1); allThoughs.though1;
}