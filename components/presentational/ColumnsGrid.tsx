type ColumnsProp = {
  children: React.ReactNode;
};

export default function Columns({ children }: ColumnsProp) {
  return <div className="flex gap-6">{children}</div>;
}
