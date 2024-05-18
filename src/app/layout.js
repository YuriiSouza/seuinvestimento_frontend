import "./globals.css";

export const metadata = {
  title: "SeuInvestimento",
  description: "Um app para te fazer ganhar mais dinheiro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
