const verifications = {

    verifyData : (req, res, next) => {
        const payload = req.body;

        if (!payload.name) {
            return res.status(400).json({
                message: "Nombre es un campo obligatorio",
            });
        }

        if (!payload.date) {
            return res.status(400).json({
                message: "Fecha es un campo obligatorio",
            });
        }

        if (!payload.category) {
            return res.status(400).json({
                message: "Categoría es un campo obligatorio",
            });
        }

        if (!payload.place) {
            return res.status(400).json({
                message: "Lugar es un campo obligatorio",
            });
        }

        if (!payload.price) {
            return res.status(400).json({
                message: "Precio es un campo obligatorio",
            });
        }

        if (!payload.estimate) {
            return res.status(400).json({
                message: "Estimación es un campo obligatorio",
            });
        }

        if (!payload.assistance) {
            return res.status(400).json({
                message: "Asistencia es un campo obligatorio",
            });
        }
        next();
    },

    verifyId : (req, res, next) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                message: "Id es obligatorio",
            });
        }

        next();
    },
}
module.exports = verifications;
