import express from "express"
import subCategoryController from "../controllers/subCategoryController"

const subCategoryRouter = express.Router()

subCategoryRouter.route("/").post(subCategoryController.createOneSubcategory)
subCategoryRouter.route("/:id").post(subCategoryController.updateOneSubcategory)
subCategoryRouter.route("/:id").get(subCategoryController.getOneSubcategory)
subCategoryRouter.route('/:id').delete(subCategoryController.deleteOneSubcategory)
subCategoryRouter.route("/").get(subCategoryController.getAllSubcategories)


export default subCategoryRouter