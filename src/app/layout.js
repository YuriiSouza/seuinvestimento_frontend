import "./globals.css";
import { Montserrat } from 'next/font/google' 

export const metadata = {
  title: "SeuInvestimento",
  description: "Um app para te fazer ganhar mais dinheiro",
};

const defaultFont = Montserrat({
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
