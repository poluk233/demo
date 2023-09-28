let keyRegObj = {
  Trn20: /^t/i,
  ERC20: /^0x/i,
  OMNI: /^1/i,
  KDOU: /^ec/i,
  "988": /^u/i,
};
interface IaddVirtualBank<T> {
  mobile: string;
  smsCode: string;
  usdtAddress: string;
  usdtName: string;
  usdtProtocol: T;
  digiccy: string;
  [name: string]: any;
}

let obj: IaddVirtualBank<keyof typeof keyRegObj | ""> = {
  mobile: "",
  smsCode: "",
  usdtAddress: "",
  usdtName: "",
  usdtProtocol: "KDOU",
  digiccy: "",
};
type UnPromisify<T> = T extends Promise<infer U> ? U : never;
const getUserInfo = () =>
  new Promise<{ name: string; age: number }>((resolve) => {
    setTimeout(() => resolve({ name: "大白", age: 21 }), 200);
  });
type UserInfo = UnPromisify<ReturnType<typeof getUserInfo>>;

const usdtList = [
  {
    name: "TRC20",
    key: "TRC20",
  },
  {
    name: "ERC20",
    key: "ERC20",
  },
  {
    name: "OMNI",
    key: "OMNI",
  },
];
const newList = [
  {
    name: "K豆",
    key: "KDOU",
  },
  {
    name: "988",
    key: "988",
  },
];
let arr = ["1","2"]
// type Obj1 = {
//     smsCode:string,
//     usdtName:string
// }

// type Obj2 = {
//     password:string,
//     avtar:string
// }
// const a:Obj1 | Obj2 = {
//     smsCode:"111",
//     usdtName:"111",
//     password:"111",
//     avtar:"111",
// }
// type Obj3 = typeof a
