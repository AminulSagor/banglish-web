export default function AuthHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="font-bold text-3xl text-[#7A3FAE] text-center">
      {children}
    </h1>
  );
}
