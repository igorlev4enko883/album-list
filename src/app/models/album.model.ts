import { Track } from './track.model';

export class Album {
  id: string;
  label: string;
  release_date: number;
  author: string;
  cover: string;
  num_tracks: number;
  tracks: Track[];
  total_duration: string;
  description: string;
}
