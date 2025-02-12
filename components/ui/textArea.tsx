import { cn } from "@/lib/utils";
import React from "react";

const textArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl",
        "border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary",
        props.className
      )}
    />
  );
};

export default textArea;
