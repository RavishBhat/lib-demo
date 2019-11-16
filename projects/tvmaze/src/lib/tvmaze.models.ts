export interface TvObject {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: any;
    rating: any;
    weight: number;
    network: any;
    webChannel?: any;
    externals: any;
    image: any;
    summary: string;
    updated: number;
    _links: any;
  }