import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:10420/api";
readonly PhotoUrl = "http://localhost:10420/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  // getEmpList():Observable<any[]>{
  //   // return this.http.get<any>(this.APIUrl+'/Employee/GetMongo');
  //   const params = new HttpParams()
  //   .set('title', 'ali')
  //   .set('status', 'est');
  
  //     // return this.http.get<any>(this.APIUrl+'/Employee/GetMongo');
  //     return this.http.get<any>(this.APIUrl+'/Employee/GetBookMongo',{params})
  
  // }
  getbookList(title: string,status: string):Observable<any[]>{
    const params = new HttpParams()
  .set('title', title)
  .set('status', status);

    // return this.http.get<any>(this.APIUrl+'/Employee/GetMongo');
    return this.http.get<any>(this.APIUrl+'/Employee/GetBookMongo',{params});

  }


  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}
