const Button = ({
  styles,
  children,
  onClick,
}: {
  styles: string;
  children: React.ReactNode;
  onClick: () => {};
}) => {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
