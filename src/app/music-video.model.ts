export interface MusicVideo {
  resultCount: number;
  results: {
    artistId: number;
    artistName: string;
    artistViewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionCensoredName: string;
    collectionExplicitness: string;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    collectionViewUrl: string;
    country: string;
    currency: string;
    discCount: number;
    discNumber: number;
    kind: string;
    previewUrl: string;
    primaryGenreName: string;
    releaseDate: string;
    trackCensoredName: string;
    trackCount: number;
    trackExplicitness: string;
    trackId: number;
    trackName: string;
    trackNumber: number;
    trackPrice: number;
    trackTimeMillis: number;
    trackViewUrl: string;
    wrapperType: string;
  }[];
}
