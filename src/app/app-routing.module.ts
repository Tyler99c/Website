import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work/work.component';
import { CommunityComponent } from './community/community.component';
import { DesignComponent } from './project/design/design.component';
import { ChatuiComponent } from './project/chatui/chatui.component';
import { DangerdungeonComponent } from './project/dangerdungeon/dangerdungeon.component';
import { DatasorterComponent } from './project/datasorter/datasorter.component';
import { MaintenanceComponent } from './project/maintenance/maintenance.component';
import { NeatComponent } from './project/neat/neat.component';
import { StoragesorterComponent} from './project/storagesorter/storagesorter.component';
import { UnixshellComponent } from './project/unixshell/unixshell.component';
import { BeistleComponent } from './work/beistle/beistle.component';
import { KingkettleComponent } from './work/kingkettle/kingkettle.component';
import { ScoutComponent } from './work/scout/scout.component';


const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'project', component: ProjectComponent },
  { path: 'work', component: WorkComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'project/design', component: DesignComponent },
  { path: 'project/chatui', component: ChatuiComponent },
  { path: 'project/dangerdungeon', component: DangerdungeonComponent },
  { path: 'project/datasorter', component: DatasorterComponent },
  { path: 'project/maintenance', component: MaintenanceComponent },
  { path: 'project/neat', component: NeatComponent },
  { path: 'project/storagesorter', component: StoragesorterComponent },
  { path: 'project/unixshell', component: UnixshellComponent },
  { path: 'work/beistle', component: BeistleComponent },
  { path: 'work/kingkettle', component: KingkettleComponent },
  { path: 'work/scout', component: ScoutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
