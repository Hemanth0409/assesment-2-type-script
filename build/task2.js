"use strict";
function getApi() {
    return fetch('/api.json')
        .then(res => res.json())
        .then(json => { return json; });
}
getApi()
    .then(Apis => {
    console.log(Apis.map(u => "id:" + u.id + '/n' + "pname:" + u.pname + '/n' + "pdescription:" + u.pdescription + '/n' + "price:" + u.price));
});
getApi();
