import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { Subject } from "./files";

export const extractPathFromHeader = (headers: ReadonlyHeaders): Subject => {
    const pathname = headers.get("x-url") || "/main";

    return pathname.split("/")[1] as Subject;
};
