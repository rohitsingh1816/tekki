const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
let menus = [];
app.post('/addMenu', (req, res) => {
  const { name, parent } = req.body;
  const newMenu = { name, parent };
  menus.push(newMenu);
  res.json({ success: true, menus });
});
app.get('/getMenus', (req, res) => {
  res.json(menus);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});