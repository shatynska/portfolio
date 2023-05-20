export default function Cell({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex w-96 flex-col justify-center border-primary-200 p-10 ${className}`}
    >
      {children}
    </div>
  );
}
