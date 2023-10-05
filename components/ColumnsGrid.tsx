type ColumnsProp = {
  children: React.ReactNode;
};

export default function ColumnsGrid({ children }: ColumnsProp) {
  return <div className="flex gap-6">{children}</div>;
}
