export default function AuthSubHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-semibold text-lg text-[#7A3FAE] text-center max-w-xl">
      {children}
    </p>
  );
}
