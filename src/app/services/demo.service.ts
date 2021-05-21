import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(public Myclient:HttpClient) { }
BaseUrl="http://localhost:3000/users";

getAllUser(){
  return this.Myclient.get(this.BaseUrl,{observe:'body'});
}
getUser(id:number){
  return this.Myclient.get(this.BaseUrl+"/"+id);
}
UpdateUser(id:string, user:{name:string,age:string, email:string}){
  return this.Myclient.put(this.BaseUrl+"/"+id,user);
}

addUser(user:{name:string,age:string, email:string}){
  return this.Myclient.post(this.BaseUrl,user);
}

deleteUser(id:number){
  return this.Myclient.delete(this.BaseUrl+"/"+id);
}
}
