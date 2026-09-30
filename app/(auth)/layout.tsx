export default function AuthLayout({ children }: LayoutProps<"/login">) {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      {children}
    </div>
  );
}
