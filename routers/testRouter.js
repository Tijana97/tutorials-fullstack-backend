import express from "express"
import contr from "../controllers/testController"

const testRouter = express.Router()

testRouter.route("/example").get(contr.testController)

export default testRouter