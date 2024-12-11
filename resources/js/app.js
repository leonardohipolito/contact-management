import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.magic('deleteModal', () => (route,redirectUrl) => {
        confirm('Confirm exclusion?') && axios.delete(route).then(() => redirectUrl?window.location=redirectUrl:window.location.reload());
    })
})


Alpine.start();
