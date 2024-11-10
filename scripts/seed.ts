import "dotenv/config";

import {drizzle} from 'drizzle-orm/neon-http'

import {neon} from '@neondatabase/serverless'

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main=async()=>{
    try {
        console.log("Seeding database");

        await Promise.all([
            db.delete(schema.userProgress),
            db.delete(schema.courses),
            
          ]);

              // Insert courses
    const courses = await db
    .insert(schema.courses)
    .values([{ title: "Spanish", imageSrc: "/es.svg" },{ title: "Italian", imageSrc: "/it.svg" },{ title: "French", imageSrc: "/fr.svg" },{ title: "Croatian", imageSrc: "/hr.svg" },])
    .returning();

          console.log("Database seeded");
      
        
    } catch (error) {
        console.error(error);
    throw new Error("Failed to seed database");
        
    }
}

main();