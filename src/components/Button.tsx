interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
