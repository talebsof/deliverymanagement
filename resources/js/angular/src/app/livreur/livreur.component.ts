
import { Component, OnInit } from '@angular/core';
import { LivreurService } from './livreur.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html'
})
export class LivreurComponent implements OnInit {
  livreurs: any[] = [];

  constructor(private livreurService: LivreurService) { }

  ngOnInit() {
    this.livreurService.getLivreurs().subscribe((response: any) => {
      this.livreurs = response.data;
    }, error => {
      console.error('Error fetching livreurs:', error);
    });
  }
}
