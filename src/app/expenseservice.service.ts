import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseserviceService {

  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080/api';

  fetchGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/group`);
  }

  addGroup(groupName: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/group`, { name: groupName });
  }

  getGroupById(groupId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/group/${groupId}`);
  }

  fetchParticipants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/participants`);
  }

  addParticipant(participant: any) {
    return this.http.post<any>(`${this.baseUrl}/participants/add`, participant);
  }

  addExpense(expense:any){
    return this.http.post(`${this.baseUrl}/expenses/add`,expense);
  }

  getAllExpenses(){
    return this.http.get(`${this.baseUrl}/expenses`);
  }

  getAllGroups(){
    return this.http.get(`${this.baseUrl}/group`);
  }

  getSettlementForGroup(selectedGroupName:any){
    return this.http.get(`${this.baseUrl}/group/${selectedGroupName}/settlement`)
  }
}
