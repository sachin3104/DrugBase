import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useSession } from "next-auth/react";
import { getUserByEmail } from "@/lib/actions/user.action";

const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState({
    firstName: "Rishav Dev",
    lastName: "Mishra",
    photo: "/images/user/user-01.png",
    jobTitle: "Drug Researcher",
    userBio: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (session?.user?.email) {
        const fetchedUser = await getUserByEmail(session.user.email);
        setUser({
          firstName: fetchedUser?.firstName || "Rishav Dev",
          lastName: fetchedUser?.lastName || "Mishra",
          photo: fetchedUser?.photo || "/images/user/user-01.png",
          jobTitle: fetchedUser?.jobTitle || "Researcher",
          userBio: fetchedUser?.userBio || "",
        });
      }
    };
    fetchUser();
  }, [session?.user?.email]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
