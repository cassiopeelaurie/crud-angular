import { Component, OnInit } from '@angular/core';
import { ReadComponent } from '../../components/read/read.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-crud-page',
  standalone: true,
  imports: [ReadComponent, PanelMenuModule],
  templateUrl: './crud-page.component.html',
  styleUrl: './crud-page.component.css',
})
export class CrudPageComponent implements OnInit {
  items: MenuItem[]= [];

  ngOnInit() {
    this.items = [
      {
        label: 'CRUD',
        icon: 'pi pi-file',
        items: [
          {
            label: 'POST',
            icon: 'pi pi-file',
          },
          {
            label: 'PUT',
            icon: 'pi pi-users',
          },
          {
            label: 'DELETE',
            icon: 'pi pi-users',
          },
        ],
      },
    ];
  }
}
