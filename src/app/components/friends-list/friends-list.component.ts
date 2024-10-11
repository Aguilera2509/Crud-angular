import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../../apidata.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.css'
})
export class FriendsListComponent implements OnInit {
  list:any[] = [];

  constructor( private dataApi: ApidataService ){}

  ngOnInit(): void {
    this.loadUserList();
  };

  loadUserList(){
    this.dataApi.getPosts().subscribe(data => this.list = data);
  };

  delUserPost(id:string){
    this.dataApi.deletePost(id).subscribe(() => {
      this.list = this.list.filter(data => data.id !== id);
    });
  };

}
