const { MulterError } = require('multer');
const multer = require('multer');
const { resolve, extname } = require('path');

const extensionsEnabled = ['.xml'];

module.exports = {
    dest: resolve(__dirname, '..', '..', 'uploads'),
    fileFilter: function (req, file, cb) {
        const extension = extname(file.originalname);
        if (!extensionsEnabled.find((ext) => ext === extension)) {
            return cb(
                new MulterError(
                    400,
                    'Não pode enviar arquivo com essa extensão'
                )
            );
        }

        return cb(null, true);
    },
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, resolve(__dirname, '..', '..', "..", 'frontend', 'xml'));
        },
        filename: function (req, file, cb) {
            const extension = extname(file.originalname);
            cb(null, `${file.originalname}`);
        },
    }),
};
