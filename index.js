"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pdf_js_extract_1 = require("pdf.js-extract");
var pdfExtract = new pdf_js_extract_1.PDFExtract();
var options = { password: "test123" };
pdfExtract
    .extract("p.pdf", options)
    .then(function (data) {
    var pdfRaw = data;
    console.log(pdfRaw);
})
    .catch(function (err) { return console.log(err); });
