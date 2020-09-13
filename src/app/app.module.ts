import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work/work.component';
import { CommunityComponent } from './community/community.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './project/design/design.component';
import { NeatComponent } from './project/neat/neat.component';
import { MaintenanceComponent } from './project/maintenance/maintenance.component';
import { StoragesorterComponent } from './project/storagesorter/storagesorter.component';
import { UnixshellComponent } from './project/unixshell/unixshell.component';
import { DatasorterComponent } from './project/datasorter/datasorter.component';
import { ChatuiComponent } from './project/chatui/chatui.component';
import { DangerdungeonComponent } from './project/dangerdungeon/dangerdungeon.component';
import { BeistleComponent } from './work/beistle/beistle.component';
import { ScoutComponent } from './work/scout/scout.component';
import { KingkettleComponent } from './work/kingkettle/kingkettle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    WorkComponent,
    CommunityComponent,
    NavComponent,
    HomeComponent,
    DesignComponent,
    NeatComponent,
    MaintenanceComponent,
    StoragesorterComponent,
    UnixshellComponent,
    DatasorterComponent,
    ChatuiComponent,
    DangerdungeonComponent,
    BeistleComponent,
    ScoutComponent,
    KingkettleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
