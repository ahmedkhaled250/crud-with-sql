import { Router } from "express";
import { notFound } from "./controller/notFound.js";
const notFoundRouter = Router()
notFoundRouter.get('*', notFound)
export default notFoundRouter