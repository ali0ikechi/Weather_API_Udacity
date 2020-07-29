const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const projectData = { data: [] };

const app = express();
app.use(bodyParser.urlencoded({ exteneded: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static("public"));
