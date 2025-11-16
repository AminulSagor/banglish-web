export default function AuthSubHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-normal text-[26px] text-[#7A3FAE] text-center max-w-xl">
      {children}
    </p>
  );
}
