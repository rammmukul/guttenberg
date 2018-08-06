#!/usr/bin/env node
const fs = require('fs')
const parseRDF = require('./parseRDF')
const rdf = fs.readFileSync(process.argv[2])
const book = parseRDF(rdf)
console.log(JSON.stringify(book, null, 2))
