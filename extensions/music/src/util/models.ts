export enum PlayerState {
  PLAYING = "playing",
  PAUSED = "paused",
  STOPPED = "stopped",
}

export interface Track {
  id?: string;
  name: string;
  artist: string;
  album: string;
  duration: string;
  state?: PlayerState;
}

export interface Playlist {
  id: string;
  name: string;
  duration: string;
  count: string;
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  count?: string;
}
