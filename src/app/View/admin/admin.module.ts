import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { RegionComponent } from './region/region.component';
import { LocationComponent } from './location/location.component';
import { BranchComponent } from './branch/branch.component';
import { DepartmentComponent } from './department/department.component';
import { TeamComponent } from './team/team.component';
import { GradePricingComponent } from './grade-pricing/grade-pricing.component';

@NgModule({
  declarations: [AdminMenuComponent, UserSearchComponent, UserDetailComponent, RoleSearchComponent, RoleDetailComponent, GroupSearchComponent, GroupDetailComponent, ResourceSearchComponent, ResourceDetailComponent, ConfigSearchComponent, ConfigDetailComponent, AuditSearchComponent, ProcessLogComponent, EmailTrackingComponent, RegionComponent, LocationComponent, BranchComponent, DepartmentComponent, TeamComponent, GradePricingComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
  ]
})
export class AdminModule { }
