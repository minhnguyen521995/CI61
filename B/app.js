
async function getData(input) {
    let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
    let data = await res.json();

    document.querySelector('small').innerHTML = 'Link generated!'
    let result = document.querySelector('a');
    if (document.getElementById("domain1").checked) {
        result.href = data.result.full_short_link;
        result.innerHTML = data.result.short_link;
    } else if (document.getElementById("domain2").checked) {
        result.href = data.result.full_short_link2;
        result.innerHTML = data.result.short_link2;
    } else if (document.getElementById("domain3").checked) {
        result.href = data.result.full_short_link3;
        result.innerHTML = data.result.short_link3;
    }
}

let submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let link = document.getElementById('input').value;
    getData(link);
});

