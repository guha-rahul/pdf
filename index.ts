import { PDFExtract, PDFExtractOptions } from "pdf.js-extract";
const pdfExtract = new PDFExtract();
const options: PDFExtractOptions = { password: "test123" };
pdfExtract
  .extract("p.pdf", options)
  .then((data) => {
    const pdfRaw = data.pages[0].content[0].str;

    console.log(pdfRaw);
  })
  .catch((err) => console.log(err));
