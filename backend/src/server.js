const express = require('express');
const { MulterError } = require('multer');
const cors = require('cors');
const path = require('path');

const routes = require('./routers');

const app = express();

//set config and static folder
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(cors());

//set routes
app.use('/api', routes);
app.use((error, req, res, next) => {
    if (error instanceof MulterError) {
        return res.status(400).json({
            status: 'error',
            message: error.field,
        });
    }

    return res.status(500).json({
        status: 'success',
        message: 'Ocorreu um problema no servidor',
    });
});

app.listen(3000, console.log(`Server running in: http://localhost:3000`));
