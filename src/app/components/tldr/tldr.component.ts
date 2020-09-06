import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChunkService } from 'src/app/services/chunk.service';
import { Chunk } from 'src/app/models/chunk';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';


const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('100ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);

@Component({
  selector: 'app-tldr',
  templateUrl: './tldr.component.html',
  styleUrls: ['./tldr.component.scss'],
  animations: [
    listAnimation
  ],
})


export class TLDRComponent implements OnInit, OnChanges {

  constructor(private chunkService: ChunkService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes')
  }
  visibility: Boolean = false;
  chunks: Chunk[] = [];

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
          data['$key'] = item.id;
          this.chunks.push(data as Chunk);
        })
      });
  }
}
