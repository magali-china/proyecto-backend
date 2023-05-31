function productValidator(req, res, next) {
    if (!req.body.name || !req.body.stock || !req.body.price) {
        return res.json(
            {
                status: 400,
                message: "Complete all fields"
            }
        )
    } else {
        next();
    }
}

export default productValidator;