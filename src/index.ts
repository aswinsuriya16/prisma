import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  const createdUser = await client.user.create({
    data: {
      username: "ashh",
      password: "21312",
      City: "TVL",
    },
  });
  console.log("User created:", createdUser);

  await client.user.delete({
    where: {
      id: createdUser.id,
    },
  });
  console.log("user deleted");

  const recreatedUser = await client.user.create({
    data: {
      username: "aswin-old",
      password: "12345",
      City: "TVL",
    },
  });

  const updatedUser = await client.user.update({
    where: {
      id: recreatedUser.id,
    },
    data: {
      username: "aswin",
    },
  });
  console.log("user updated:", updatedUser);

  const user = await client.user.findFirst();
  console.log("First user:", user);
}

main();
