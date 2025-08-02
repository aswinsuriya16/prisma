"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
// async function main() {
//   const createdUser = await client.user.create({
//     data: {
//       username: "ashh",
//       password: "21312",
//       City: "TVL",
//     },
//   });
//   console.log("User created:", createdUser);
//   await client.user.delete({
//     where: {
//       id: createdUser.id,
//     },
//   });
//   console.log("user deleted");
//   const recreatedUser = await client.user.create({
//     data: {
//       username: "aswin-old",
//       password: "12345",
//       City: "TVL",
//     },
//   });
//   const updatedUser = await client.user.update({
//     where: {
//       id: recreatedUser.id,
//     },
//     data: {
//       username: "aswin",
//     },
//   });
//   console.log("user updated:", updatedUser);
//   const user = await client.user.findFirst();
//   console.log("First user:", user);
// }
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const createUser = yield client.user.create({
            data: {
                username: "aditya",
                password: "erode",
                City: "Erode"
            }
        });
        console.log(createUser);
        const addTodo = yield client.todo.create({
            data: {
                title: "shot",
                done: true,
                userId: createUser.id
            }
        });
        const id1 = yield client.user.findFirst({
            where: {
                id: 1
            },
            include: {
                todos: true
            }
        });
        console.log(id1);
        console.log(addTodo);
    });
}
main();
