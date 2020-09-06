import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChunkService } from 'src/app/services/chunk.service';
import { Chunk } from 'src/app/models/chunk';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';


const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('20ms', animate('600ms ease-out', style({ opacity: 1 })))],
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


export class TLDRComponent implements OnInit {

  constructor(private chunkService: ChunkService) { }
  
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

  shuffle() {
    this.chunks = this.shufflestuff(this.chunks);
  }

  shufflestuff(array) {
    const length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    let index = -1;
    const lastIndex = length - 1;
    const result = this.copyArray(array);
    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    return result;
  }

  copyArray(source, array?: any) {
    let index = -1;
    const length = source.length;

    array || (array = new Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
}
