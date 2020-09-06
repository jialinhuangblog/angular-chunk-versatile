import { Component, OnInit, Input } from '@angular/core';
import { ChunkService } from 'src/app/services/chunk.service';
import { Chunk } from 'src/app/models/chunk';

@Component({
  selector: 'app-tldr',
  templateUrl: './tldr.component.html',
  styleUrls: ['./tldr.component.scss']
})
export class TLDRComponent implements OnInit {
  chunks: Chunk[] = [];
  constructor(private chunkService: ChunkService) { }

  ngOnInit(): void {
    this.getChunks();
  }

  getChunks() {
    this.chunks.length = 0;
    this.chunkService.getChunks()
      .snapshotChanges()
      .forEach(actions => {
        this.chunks = []
        actions.forEach(action => {
          let item = action.payload.doc;
          
          var data = item.data();
          console.log(data)
          data['$key'] = item.id;
          this.chunks.push(data as Chunk);
        })
      });
  }
}
