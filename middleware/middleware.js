
const { ResponseTemplate } = require('../helper/template.helper')
const joi = require('joi')
function PrintSuccess(req, res, next) {

    console.log(` SELALU BERHASIL AKSES`)
    next()
}

function PrintSuccessRoute(req, res, next) {

    console.log(` SELALU BERHASIL AKSES LEWAT ROUTE LEVEL`)
    next()
}

function CheckPostReq(req, res, next) {

    if (req.body.name == undefined || req.body.address == undefined) {
        let respErr = ResponseTemplate(null, 'invalid request',
            new Error('invalid request'), 400)
        res.json(respErr)
    }

    //Data Validation
    const schema = joi.object({
        title: joi.string().min(5).required(),
        body: joi.string().min(50).required(),
    })
    const { error } = schema.validate(req.body)
    if (error) {
        let respErr = ResponseTemplate(null, 'invalid request',
            new Error('invalid request'), 400)
        res.json(respErr)
        return
    }



    next()
}


module.exports = {
    // PrintSuccess,
    // PrintSuccessRoute,
    CheckPostReq
}