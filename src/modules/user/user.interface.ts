// sId,name,email,phone,password,role
export interface IUser {
  sId: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: "Admin" | "Customer";
}
