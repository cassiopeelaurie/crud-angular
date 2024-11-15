import { Component } from '@angular/core';
import { ReadComponent } from '../../components/read/read.component';
import { CreateComponent } from "../../components/create/create.component";
import { UpdateComponent } from "../../components/update/update.component";
import { DeleteComponent } from "../../components/delete/delete.component";


@Component({
  selector: 'app-crud-page',
  standalone: true,
  imports: [ReadComponent, CreateComponent, UpdateComponent, DeleteComponent],
  templateUrl: './crud-page.component.html',
  styleUrl: './crud-page.component.css',
})
export class CrudPageComponent{

}
