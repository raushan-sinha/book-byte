import type { IconType } from "react-icons";

export interface NavLinkItem {
    readonly name: string,
    readonly path: string,
    readonly icon: IconType,
}