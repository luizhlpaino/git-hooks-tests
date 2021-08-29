const healthHandler = (req, res) => {
    res.status(200).send({status: "success", message: "It's alive HAHAHA!" });
}

module.exports = [
    {
        path: "/v1/health",
        method: "get",
        handler: healthHandler
    }
]