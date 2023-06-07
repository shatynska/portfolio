export default function Cell({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex w-screen min-w-full max-w-112 flex-col justify-center border-primary-200 px-10 md:w-96 md:min-w-0 ${className}`}
    >
      {children}
    </div>
  );
}
