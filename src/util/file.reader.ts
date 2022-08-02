import fs from 'fs/promises';

export default async function readFile(path: string): Promise<string> {
  return await fs.readFile(path, 'utf-8');
}