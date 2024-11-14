# govuk-prototype-kit-htmx
Plugin to use htmx in the govuk prototype toolkit


## Fragments

Using [htmx](https://htmx.org/) we can load in external fragments to our prototype kit.


## Getting started

```
npm i https://github.com/htmlandbacon/govuk-prototype-kit-htmx.git
```

## Example calls

You'll need to include any styles in your prototype from the fragments you are consuming.

Example of a key details call

```
{{ "https://dwp-design-system-dc-efd51ee857dc.herokuapp.com/partials/key-details/1" | htmx.onload }}
```

   