import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RoleSearchComponent } from './role-search/role-search.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { GroupSearchComponent } from './group-search/group-search.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { ResourceSearchComponent } from './resource-search/resource-search.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ConfigSearchComponent } from './config-search/config-search.component';
import { ConfigDetailComponent } from './config-detail/config-detail.component';
import { AuditSearchComponent } from './audit-search/audit-search.component';
import { ProcessLogComponent } from './process-log/process-log.component';
import { EmailTrackingComponent } from './email-tracking/email-tracking.component';
import { ViewComponent } from '../view.component';
import { RegionComponent } from './region/region.component';
import { LocationComponent } from './location/location.component';
import { BranchComponent } from './branch/branch.component';
import { DepartmentComponent } from './department/department.component';
import { TeamComponent } from './team/team.component';
import { GradePricingComponent } from './grade-pricing/grade-pricing.component';

const routes: Routes = [

      { path: '', component: AdminMenuComponent },
      { path: 'user', component: UserSearchComponent },
      { path: 'userDetail', component: UserDetailComponent },
      { path: 'RoleSearch', component: RoleSearchComponent },
      { path: 'RoleDetail', component: RoleDetailComponent },
      { path: 'GroupSearch', component: GroupSearchComponent },
      { path: 'GroupDetail', component: GroupDetailComponent },
      { path: 'Resource', component: ResourceSearchComponent },
      { path: 'ResourceDetail', component: ResourceDetailComponent },
      { path: 'ConfigSearch', component: ConfigSearchComponent },
      { path: 'ConfigDetail', component: ConfigDetailComponent },
      { path: 'ConfigDetail', component: ConfigDetailComponent },
      { path: 'AuditSearch', component: AuditSearchComponent },
      { path: 'ProcessLog', component: ProcessLogComponent },
      { path: 'EmailTracking', component: EmailTrackingComponent },
      { path: 'Region', component: RegionComponent },
      { path: 'Location', component: LocationComponent },
      { path: 'Branch', component: BranchComponent },
      { path: 'Department', component: DepartmentComponent },
      { path: 'Team', component: TeamComponent },
      { path: 'GradePricing', component: GradePricingComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
