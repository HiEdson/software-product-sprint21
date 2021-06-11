async function quote() {
    const getServerSms = await fetch("/quoteSms");
    const textOnly = await getServerSms.text();

    const domElement = document.getElementById("fetch");
    domElement.innerHTML = textOnly;
}