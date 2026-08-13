import "dotenv/config";
import { PrismaClient } from "../generated/client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const createPrisma = () => {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  });
  return new PrismaClient({ adapter });
};

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = createPrisma();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = createPrisma();
  }
  prisma = globalThis.prisma;
}

export default prisma;