import fs from "fs";

export const deleteFile = async (filename: string) => {
    try {
        const test = await fs.promises.stat(filename);
        console.log(test);
    } catch {
        return;
    }
    await fs.promises.unlink(filename);
};
