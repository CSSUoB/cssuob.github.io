---
---

const redirects = {
    {% for redirect in site.data.redirects %}
    "{{ redirect.source }}": "{{ redirect.destination }}",
    {% endfor %}
};

let pathname = window.location.pathname;

let lookup = redirects[pathname];
if (lookup) {
    // direct match found
    window.location = lookup;
} else {
    // ensure slash at end of pathname
    if (!pathname.endsWith('/')) {
        pathname += '/';
    }

    // build up a link directory of possibilities
    let listing = [];
    for (let redirect of Object.keys(redirects)) {
        if (redirect.startsWith(pathname)) {
            listing.push(redirect);
        }
    }

    if (listing.length == 0) {
        // could not find any matches
        document.addEventListener('DOMContentLoaded', () => {
            return renderError("404 - page not found");
        });
    } else {
        // show link directory
        document.addEventListener('DOMContentLoaded', () => {
            return renderError(pathname);
        });
        document.addEventListener('DOMContentLoaded', () => {
            renderLinkList(listing)
        });
    }
}

function renderError(message) {
    let error = document.getElementById('error-message');
    error.innerText = message;
}

function renderLinkList(links) {
    let linkList = document.getElementById('link-list');
    for (let link of links) {
        let linkElement = document.createElement('a');
        linkElement.innerText = link.substring(pathname.length);
        linkElement.setAttribute('href', redirects[name]);

        let listElement = document.createElement('li');
        listElement.appendChild(linkElement);
        linkList.appendChild(listElement);
    }
}
