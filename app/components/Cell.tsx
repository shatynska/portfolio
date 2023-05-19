import { ReactNode } from "react";

export default function Cell({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={`flex flex-col relative justify-center p-10 border-primary-200  ${className}`}
    >
      {children}
    </div>
  );
}
