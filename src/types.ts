import { JSX } from "react";

// global utility types

/** If you want a component that has the same props of a <div> you can use PropsOf<'div'> */
export type PropsOf<K extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[K];

export type PropsOfComponent<C extends (props: object) => unknown> = Parameters<C>[0];

export type BootstrapColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
