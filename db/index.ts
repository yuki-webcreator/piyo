import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as authSchema from './schemas/auth';

// .env ファイルを読み込む
config({ path: '.env' });

// Postgres クライアントを作成
const client = postgres(process.env.DATABASE_URL!);

// drizzle に接続クライアントを渡して DB インスタンス生成
export const db = drizzle({client, schema: { ...authSchema}});