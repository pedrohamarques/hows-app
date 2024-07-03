import { AuthProvider } from "@contexts/auth-context";
import { SocketProvider } from "@contexts/socket-context";

import Routes from "@routes/navigation";

export default function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <Routes />
      </SocketProvider>
    </AuthProvider>
  );
}
