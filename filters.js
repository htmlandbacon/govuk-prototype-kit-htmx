const { views } = require('govuk-prototype-kit');


function formatAttributes(attributes) {
    let attribute = ""
    if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
        attribute += `${key}="${value}" `;
        }
    }
    return attribute;
}

function onload (url, attributes = undefined) {
    return `
       <div hx-get="${url}"
            hx-trigger="load"
            ${formatAttributes(attributes)}
               >
                   <p class="govuk-body">Loading....</p>
       </div>`
   }

function get (url, attributes = undefined) {
    return `
       <div hx-get="${url}"
            ${formatAttributes(attributes)}
               >
                   <p class="govuk-body">Loading....</p>
       </div>`
   }

module.exports = {
    onload,
    get
}
  

views.addFilter('htmx.onload', onload, { renderAsHtml: true });
views.addFilter('htmx.get', get, { renderAsHtml: true });