import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
    await client.user.create({
        data : {
            username : "admin",
            password : "admin123",
            City : "covai",
            todos : {
                create : {
                    title : "admincheck",
                    done : false
                }
            }
        }
    })
    console.log("Seeding complete");
}

main();