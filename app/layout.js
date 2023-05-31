import Topbar from "@/components/topbar/Topbar";
import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "dashboard for skinning round.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
