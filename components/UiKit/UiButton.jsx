import clsx from "clsx";

export function UiButton({ children, className, size, variant }) {

    const buttonClassName = clsx(
        "transition-colors",
        className,
        {
            md: "rounded px-6 py-2 text-sm leading-tigth",
            lg: "rounded-lg px-5 py-2 text-2xl leading-tigth",
        }[size],
        {
            primary: "bg-teal-600 hover:bg-teal-500 text-white",
            outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
        }[variant]
    );

    return (
        <button className={buttonClassName}>
            {children}
        </button>
    );
}