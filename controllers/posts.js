const express = require('express');
const fs = require("fs");
const path = require("path");

// routes definition
/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
function index(req, res)
{
	// read data from json file
	const posts = JSON.parse(fs.readFileSync(path.join(__dirname, "../db", "./posts.json"), "utf-8"));

	// generate HTML
	const postsHTML = `
	<ul>
		${posts.map(post => `
                <li>
                    <h2>${post.titolo}</h2>
                    <img style="width: 250px;" src="img/${post.immagine}" alt="${post.titolo}">
                    <p>${post.contenuto}</p>
                    <p>Tags: ${post.tags.join(", ")}</p>
                </li>
            `).join('')}
	</ul>
    `;

	res.format({
		html: () =>
		{
			res.type("html").send(postsHTML);
		},
		json: () =>
		{
			res.json(posts);
		},
		default: () =>
		{
			res.status(406).send("Not Acceptable");
		},
	});
}

module.exports = {
	index,
};
