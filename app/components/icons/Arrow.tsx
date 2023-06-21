export default function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`cursor-pointer hover:opacity-80 ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      {props.left && (
        <path d="M14 28L2 16L14 4" stroke="white" stroke-width="3" />
      )}
      {!props.left && (
        <path d="M18 28L30 16L18 4" stroke="white" stroke-width="3" />
      )}
    </svg>
  );
}
