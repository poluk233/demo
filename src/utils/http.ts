
import { User } from "@/types/usertype";
export const http = <T>(path: string, mode: "post" | "get",data:T):Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "poluk",
        userid: "1234567",
        token: "asdadsadgjtrtetc",
      });
      console.log(path, mode,data);
    }, 200);
  });
};

