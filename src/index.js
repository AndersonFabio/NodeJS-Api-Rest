const express = require('express');
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());
const TaskRoutes = require('./routes/TaskRoutes');
const AtividadeRoutes = require('./routes/AtividadeRoutes');
const UploadRoutes = require('./routes/UploadRoutes');
const InformacoesRoutes = require('./routes/InformacoesRoutes');
const NovidadesRoutes = require('./routes/NovidadesRoutes');

server.use('/task', TaskRoutes);
server.use('/atividade', AtividadeRoutes);
server.use('/upload', UploadRoutes);
server.use('/informacoes', InformacoesRoutes);
server.use('/novidades', NovidadesRoutes);


server.listen(21137, () => {
    console.log('API ONLINE');
});

