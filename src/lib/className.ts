import classNames from "classnames";

type PropsWithClass = {
    className?: string;
};
/**
 * Helps create components that need to combine default classNames with classNames coming from props
 * @param className default className
 * @param props props that might contain classNames to be included
 * @returns props with merged className
 */

export function propsWithClass(props: PropsWithClass, ...defaultClass: Parameters<typeof classNames>) {
    const className = classNames(defaultClass, props.className);
    return {
        ...props,
        className,
    };
}
