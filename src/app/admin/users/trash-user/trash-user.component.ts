import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-trash-user',
  templateUrl: './trash-user.component.html',
  styleUrls: ['./trash-user.component.css']
})
export class TrashUserComponent {
  listTrashUser:any;
  constructor(private cs : UsersService) {}
  getListTrash() {
    this.cs.getTrash().subscribe(res => {
      this.listTrashUser = res;
      setTimeout(()=>{   
        $('#datatableexample').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 10,
          processing: true,
          lengthMenu : [10, 15, 20],
      } );
      }, 1);
    })
  }
  ngOnInit(): void {
    this.getListTrash();
    setTimeout(()=>{  
      $('#datatableexample_wrapper').css('width', '100%');
    }, 1000);
    
  }
}
