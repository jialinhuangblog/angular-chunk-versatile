import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Chunk } from '../models/chunk';

@Injectable({
  providedIn: 'root'
})
export class ChunkService {
  private chunkCollection: AngularFirestoreCollection<any>;
  constructor(private firestore: AngularFirestore) {
    this.chunkCollection = this.firestore.collection('chunks');
  }

  getChunks = () => this.chunkCollection;
  addChunk = (chunk: Chunk) => this.chunkCollection.add(chunk);

  updateChunk(chunk: Chunk) {
    let $key = chunk.$key;
    delete chunk.$key;
    this.chunkCollection.doc($key).update(chunk);
  }

  deleteChunk = ($key: string) => {
    this.chunkCollection.doc($key).delete();
  }
}
