import { join } from "path";
import fs from "fs";

export const loadFile = async () => {
    const filePath = join(
        process.cwd(),
        "public/markdowns/yoga",
        "01-yoga-in-manof.md"
    );

    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
};
