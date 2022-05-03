const express = require('express');
const route = require('./routes/routes');

const app = express();

require('./models/index');

app.use(express.json());

app.use(route);

app.listen(3000, () => console.log('ouvindo a porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
