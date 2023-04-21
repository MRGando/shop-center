const express = require("express");
const app = express();
const cat_items = require("./categorized")
const all_items = require("./allItems")
const cors = require("cors");

app.use(cors());

app.get("/Categorized", (req, res) => {
    res.json(cat_items);
})
app.get("/AllItems", (req, res) => {
    res.json(all_items);
})

app.get("/AllItems/:id", (req, res) => {
    const items = all_items;
    const item = items.filter(each => each.id == req.params.id);
    res.json(item);
})

app.listen(5000, () => {
    console.log('server is running ...');
})