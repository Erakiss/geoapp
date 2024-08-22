import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Post, Category } from '../entities';
import { PostService } from '../post.service'; 


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.initMap();
    this.loadExistingPosts();
  }

  private initMap(): void {
    this.map = L.map('map').setView([45.188529, 5.724524], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      this.createPost(e.latlng.lat, e.latlng.lng);
    });
  }

  private createPost(latitude: number, longitude: number): void {
    const message = prompt("Entrez le contenu du post :");
    if (message) {
      const newPost: Post = {
        latitude,
        longitude,
        message,
        postedAt: new Date(),
        author: "John Doe",  // ou récupéré dynamiquement
        category: { id: 1, label: "Divers" } // par exemple, une catégorie par défaut
      };

      this.postService.createPost(newPost).subscribe(() => {
        this.addMarker(newPost);
      });
    }
  }

  private addMarker(post: Post): void {
    L.marker([post.latitude, post.longitude]).addTo(this.map)
      .bindPopup(`<b>${post.author}</b><br>${post.message}<br>${post.category?.label}`)
      .openPopup();
  }

  private loadExistingPosts(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      posts.forEach(post => this.addMarker(post));
    });
  }
}
  
