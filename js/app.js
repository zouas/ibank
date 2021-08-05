'use strict';
const API_URL = 'http://localhost:9999/api';
/*
const request = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = (evt) => resolve(evt);
        xhr.onerror = (evt) => reject(evt);
        xhr.send();
    })
};
*/

const showLoader = (parentEl) => {
    parentEl.innerHTML = `
<div class="loading-indicator"></div>
`;
};

const loadAccount = (parentEl, data, err) => {
    if (err) {
        parentEl.innerHTML = `
        <div>Произошла ошибка.</div>
        `;
        return;
    }
    console.log(data);
    parentEl.innerHTML = `
    <div class = "name">${data.account.name}</div>
    <div class = "number">${data.account.number}</div>
    <!--<div class="balance"><span class="amount">${data.account.amount}</span> ₽</div>-->
    <div class="balance"><span class="amount">${(data.account.amount).toString().replace('.', ',')}</span> ₽</div>
    
    `;
};


const accountsEl = document.getElementById('accounts-and-cards');
showLoader(accountsEl);


fetch(`${API_URL}/hw15`)

    .then((response) => {
        if (!response.ok) {
            throw new Error('err.server');
        }
        return response.json();
        //const data = JSON.parse(evt.target.responseText);
        //loadAccount(accountsEl, data);
    })
    .then((data) => {
            loadAccount(accountsEl, data);
        }
    )
    .catch((error) => {
        loadAccount(accountsEl, null, 'err.common');
    });


/*

request('GET', `${API_URL}/hw15`)

    .then((evt) => {
        if (evt.target.status !== 200) {
            throw new Error('err.server');
            //loadAccount(accountsEl, null, 'err.server');
            //return;
        }
        const data = JSON.parse(evt.target.responseText);
        loadAccount(accountsEl, data);
    })
    .catch(() => {
        loadAccount(accountsEl, null, 'err.common');
    }); */


/*



'use strict';
const API_URL = 'http://localhost:9999/api';

const request = (method, url, onload, onerror) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = onload;
    xhr.onerror = onerror;
    xhr.send();
}


const showLoader = (parentEl) => {
    parentEl.innerHTML = `
<div class="loading-indicator"></div>
`;
}

const loadAccount = (parentEl, data, err) => {
    if (err) {
        parentEl.innerHTML = `
        <div>Произошла ошибка.</div>
        `;
        return;
    }
    console.log(data);
    parentEl.innerHTML = `
    <div class = "name">${data.account.name}</div>
    <div class = "number">${data.account.number}</div>
    <div class="balance"><span class="amount">${data.account.amount}</span> ₽</div>
    `;
}


const accountsEl = document.getElementById('accounts-and-card');
showLoader(accountsEl);


request('GET', `${API_URL}/hw15`,
    (evt) => {
        if (evt.target.status !== 200) {
            loadAccount(accountsEl, null, 'err.server');
            return;
        }
        const data = JSON.parse(evt.target.responseText);
        loadAccount(accountsEl, data);
    },
    (evt) => {
        loadAccount(accountsEl, null, 'err.network');
    },

);

*/

//xhr.send();
//const response = xhr.responseText;
//console.log(response);

