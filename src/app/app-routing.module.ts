import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { ParticipantComponent } from './participant/participant.component';
import { ExpenseComponent } from './expense/expense.component';
import { SettlementComponent } from './settlement/settlement.component';

const routes: Routes = [
  { path: '', component: GroupComponent },
  { path: 'groups', component: GroupComponent },
  { path: 'participants', component: ParticipantComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'settlements', component: SettlementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
