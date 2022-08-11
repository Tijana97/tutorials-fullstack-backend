const testController = (req, res) =>{

    console.log(req.body, req.query, req.params, "Req")

    return res.send({
        response: "well done!"
    })
}
export default {
    testController
}