import express from "express"
import categoryController from "../controllers/categoryController"

const categoryRouter = express.Router()

categoryRouter.route("/").post(categoryController.createOneCategory)
categoryRouter.route("/:id").post(categoryController.updateOneCategory)
categoryRouter.route("/:id").get(categoryController.getOneCategory)
categoryRouter.route('/:id').delete(categoryController.deleteOneCategory)
categoryRouter.route("/").get(categoryController.getAllCategories)


export default categoryRouter