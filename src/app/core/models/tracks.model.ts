import { ArtisModel } from "./artist.model";

export interface TrackModel{
    name: string;
    album: string;
    url: string;
    cover: string;
    _id:string | number;
    artist?:ArtisModel;
}