import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApidataService } from '../../apidata.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-friends-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './friends-form.component.html',
  styleUrl: './friends-form.component.css'
})
export class FriendsFormComponent implements OnInit{
  user:any = {
    first_name: "",
    last_name: ""
  }

  id:string = "";

  constructor( 
    private dataApi:ApidataService, 
    private router:Router,
    private route:ActivatedRoute 
  ){};

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")!;
    
    if(this.id){
      this.dataApi.getUniquePost(this.id).subscribe((data) => {
        this.user = data; 
      });
    };
  };

  onSubmit(){
    if(this.id){
      this.dataApi.updatePost(this.user, this.id).subscribe(() => {
       this.router.navigate(["/"]);
      });
    }else{
      this.dataApi.createPost(this.user).subscribe(() => {
        this.router.navigate(["/"]);
      });
    };

  };
}
