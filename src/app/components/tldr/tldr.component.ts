import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChunkService } from 'src/app/services/chunk.service';
import { Chunk } from 'src/app/models/chunk';
import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('20ms', animate('600ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

interface Skill {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tldr',
  templateUrl: './tldr.component.html',
  styleUrls: ['./tldr.component.scss'],
  animations: [listAnimation],
})
export class TLDRComponent implements OnInit {
  constructor(private chunkService: ChunkService) {}

  visibility: Boolean = false;
  chunks: Chunk[] = [];

  categories: Skill[] = [
    // { value: '', viewValue: 'All' },
    { value: 'F', viewValue: 'Frontend' },
    { value: 'B', viewValue: 'Backend' },
    { value: 'Dev', viewValue: 'DevOps' },
  ];

  set selectedCategory(value) {
    this.getChunks(value);
  }

  ngOnInit(): void {
    this.getChunks();
  }

  getChunks(key = '') {
    this.chunks.length = 0;
    this.chunkService
      .getChunks()
      .snapshotChanges()
      .forEach((actions) => {
        var tempChunks = [];
        actions.forEach((action) => {
          let item = action.payload.doc;
          var data = item.data();
          data['$key'] = item.id;
          data['selected'] = `${!!data.point}`;
          tempChunks.push(data as Chunk);
        });

        this.chunks = tempChunks.filter((c) => (key ? c.type === key : true));
      });
  }


  reorder() {
    this.chunks = this.chunks.sort((a, b) => {
      var big = a.point - b.point < 0;
      return big ? 1 : 0;
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
