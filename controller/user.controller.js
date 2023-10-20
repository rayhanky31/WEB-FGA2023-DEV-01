function TestUser(req, res) {
    res.json({
        "data": null,
        "message": "Berhasil Di Masuk User",
        "status": 200
    })
}

module.exports = {
    TestUser,
}