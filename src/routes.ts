import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListTagController } from "./controllers/ListTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { Router } from "express";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

//Controllers
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const listUsersController = new ListUsersController();
const listTagsController = new ListTagController();

//Rotas
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.post("/tags",ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/users",ensureAuthenticated, listUsersController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);

export { router }