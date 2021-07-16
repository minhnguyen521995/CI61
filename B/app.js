
async function getData(input) {
    let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
    let data = JSON.parse(res);
}

function shortenLink(e) {
    e.preventDefault();
    let url = document.forms["myForm"]["fname"].value;
    console.log(url)

}