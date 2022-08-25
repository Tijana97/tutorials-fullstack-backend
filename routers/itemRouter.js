import express from "express"
import itemController from "../controllers/itemController"

const itemRouter = express.Router()

itemRouter.route("/").post(itemController.createOneItem)
itemRouter.route("/:id").post(itemController.updateOneItem)
itemRouter.route("/:id").get(itemController.getOneItem)
itemRouter.route('/:id').delete(itemController.deleteOneItem)
itemRouter.route("/").get(itemController.getAllItems)


export default itemRouter