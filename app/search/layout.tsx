import "@/css/globals.css";

export const metadata = {
  title: "JSearch | Joblib",
  description: "Search for jobs nearby",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
