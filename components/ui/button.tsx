import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default:
					"bg-purple-400/20 text-purple-400 font-medium border border-purple-400 shadow-xs hover:bg-purple-400/30 hover:border-purple-400/50",
				destructive:
					"bg-destructive/20 text-destructive font-medium border border-destructive shadow-xs hover:bg-destructive/30 hover:border-destructive/50",
				outline:
					"bg-background/50 text-foreground font-medium border shadow-xs hover:bg-background/70 hover:border-foreground/50",
				secondary:
					"bg-blue-400/20 text-blue-400 font-medium border border-blue-400 shadow-xs hover:bg-blue-400/30 hover:border-blue-400/50",
				ghost:
					"text-foreground/60 hover:text-foreground hover:bg-foreground/10",
				link: "text-purple-400 underline-offset-4 hover:text-purple-400/80 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
