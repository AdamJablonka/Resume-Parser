import express from 'express';
const app = express();
const PORT = 8000

import { PdfData, VerbosityLevel } from 'pdfdataextract';
import { readFileSync } from 'fs';
const file_data = readFileSync('./pdfs/Adam_Jablonka_Resume_Nov.pdf');
let pdfData = null;

PdfData.extract(file_data, {
	pages: 1, // how many pages should be read at most
	sort: true, // sort the text by text coordinates
	verbosity: VerbosityLevel.ERRORS, // set the verbosity level for parsing
	get: { // enable or disable data extraction (all are optional and enabled by default)
		pages: true, // get number of pages
		text: true, // get text of each page
		fingerprint: true, // get fingerprint
		outline: true, // get outline
		metadata: true, // get metadata
		info: true, // get info
		permissions: true, // get permissions
	},
}).then((data) => {
	data.text; // an array of text pages
	console.log(`This is the text in the PDF: ${data.text}`);
	pdfData = data.text;
});

app.get("/api", (req, res) => {
    res.json({pdfData});
})

app.listen(8000, () => {
    console.log(`Server started on port ${PORT}`);
})