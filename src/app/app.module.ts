import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { TreeViewModule  } from '@syncfusion/ej2-angular-navigations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot(),
    ListViewModule,
    CheckBoxModule,
    TreeViewModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
