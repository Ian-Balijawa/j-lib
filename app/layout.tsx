import "@/css/globals.css";

export const metadata = {
  title: "JSearch | Joblib",
  description: "Search for jobs nearby",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="main_container">{children}</main>
      </body>
    </html>
  );
}
