// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript

//TODO

document.write('<table class="table">')
for(let i = 1; i <=12; i++) {
    document.write("<tr>")
    for(let j = 1; j <= 12; j++) {
        document.write(`<td>${i * j}</td>`)
    }
    document.write("</tr>")
}
document.write("</table>")