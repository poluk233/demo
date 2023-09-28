import { defineStore } from "pinia";
import { User,Userinfo } from "@/types/usertype";

export const useUser = defineStore("user", {
  state: (): Userinfo => ({
    userinfo: {
      username: "",
      userid: "",
      token: "",
    },
  }),
  getters: {
    getuserid: (state) => {
      return state.userinfo.userid;
    },
  },
  actions: {
     setuser(user: User) {
      this.userinfo = user;
    },
  },
});
