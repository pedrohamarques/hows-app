import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { useAuthContext } from "./auth-context";

type SocketContextProps = {
  socket: Socket | null;
};

const SocketContext = createContext<SocketContextProps | null>(null);

export function SocketProvider({ children }: PropsWithChildren) {
  const [socket, setSocket] = useState<Socket | null>(null);

  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      const socket = io("http://192.168.0.11:3000", {
        transports: ["websocket"],
      });

      socket.on("connected", () => {
        console.log("Socket Connected");
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });

      setSocket(socket);
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user]);

  const value = {
    socket,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}

export function useSocketContext() {
  const value = useContext(SocketContext);

  if (!value) {
    throw new Error("useSocketContext must be wrapped in a <SocketProvider />");
  }
}
