import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const InputMessage = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, ...props }, ref) => {
    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      event.target.style.height = "auto"; // Reset height to auto first
      event.target.style.height = `${event.target.scrollHeight}px`; // Set new height based on content
    };

    return (
      <textarea
        className={cn(
          "w-full rounded-md border border-input bg-background px-3 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        ref={ref}
        rows={1} // Start with one line
        onInput={handleInput}
        style={{ overflow: "hidden" }}
        {...props}
      />
    );
  }
);
InputMessage.displayName = "InputMessage";

export { InputMessage };
