import { Stack } from "@mui/material"
import Header from "@/app/components/header/header";
import MenuComponent from "@/app/components/menu/menu";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
      <Header />
      <Stack
        direction='row'
        >
        <MenuComponent />

        {children}
        
          </Stack>
      </body>
    </html>
  );
}

