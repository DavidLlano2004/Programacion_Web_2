import { Router } from "express"
import { getExampleByQueryParams, getHelloExpress, getName } from "../controllers/example.controller.js"

const router = Router()

router.get('/example', getHelloExpress)
router.get('/example/:name', getName)
router.get('/suma', getExampleByQueryParams)

export default router