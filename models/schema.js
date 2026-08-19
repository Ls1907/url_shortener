import {uuid,pgTable,varchar,text,timestamp} from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users',{
    id: uuid().primaryKey().defaultRandom(),
    
})

export default usersTable;