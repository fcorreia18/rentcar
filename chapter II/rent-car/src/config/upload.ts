import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", folder),
                filename: (req, file, cb) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = file.filename;
                    return cb(null, `${fileHash}-${fileName}`);
                },
            }),
        };
    },
};
