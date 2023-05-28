export default function Cell({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex w-screen max-w-112 flex-col justify-center border-primary-200 px-10 md:w-96 ${className}`}
    >
      {children}
    </div>
  );
}
