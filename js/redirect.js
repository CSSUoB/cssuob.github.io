---
---

const redirects = {
    {% for redirect in site.data.redirects %}
    "{{ redirect.source }}": "{{ redirect.destination }}",
    {% endfor %}
};

let lookup = redirects[window.location.pathname];
if (lookup) {
    window.location = lookup;
} else {
    document.addEventListener('DOMContentLoaded', () => {
        let error = document.getElementById('error-message');
        error.innerHTML = "404 - page not found";
    })
}
