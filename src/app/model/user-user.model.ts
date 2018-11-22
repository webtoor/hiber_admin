/* export interface UserUser {
   name: string;
   email: string;
   phone: string;
   company: {
       name: string;
   }
} */

export interface UserUser {
  
   user: {
      id : number;
      username: string;
      firstname : string;
      lastname: string;
      email: string;
      phonenumber:string;
   }
}