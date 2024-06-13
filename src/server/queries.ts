import "server-only";
import { db } from "./db";

export async function getPosts() {
  return await db.query.posts.findMany();
}

