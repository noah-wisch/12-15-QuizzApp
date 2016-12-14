function init() {
    let button = document.querySelector('#find-reader');
    button.addEventListener('click', getNewReader);
}

function getNewReader() {
    // 1. set up an XMLHttpRequest - use for AJAX requests
    let request = new XMLHttpRequest(); // 'new' is a JS keywords
    
    // where do we make the request to?
    request.open('GET', 'https://randomuser.me/api/?results=100');
    // what do we do once the results load?
    request.addEventListener('load', function () {
        console.log('weve got mail')
        // responseText is the place where the response is stored
        // this is our JSON
        // we can convert it into something JS with JSON.parse()
        let response = JSON.parse(request.responseText);// convert from JSON to JS oject

        for (let i = 0; i < response.results.length; i++){
        let user = response.results[i];
        showPerson(user);
        }
    });
    //go go go go go
    request.send();
    console.log('mail sent');
}

 //now that we have this data, let's show it in the DOM
function showPerson(loyalSubject) {
    let name = document.createElement('li');
    name.textContent = loyalSubject.name.first + ' ' + loyalSubject.name.last;

    //add to DOM
    let parent = document.querySelector('#folks');
    parent.appendChild(name);
}

window.addEventListener('load', init);