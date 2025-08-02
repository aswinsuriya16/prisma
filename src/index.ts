import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

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

async function main() {
    const createUser = await client.user.create({
        data : {
            username : "aditya",
            password : "erode",
            City : "Erode"
        }
    })
    console.log(createUser);

    const addTodo = await client.todo.create({
        data : {
            title : "shot",
            done : true,
            userId : createUser.id
        }
    })

    const id1 = await client.user.findFirst({
        where : {
            id : 1
        },
        include : {
            todos : true
        }
    })
    console.log(id1);
    console.log(addTodo);
}

main();
