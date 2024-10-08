export interface SeasonType {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  discount: number;
}

export interface SeasonMediaType {
  id: number;
  seasonId: string;
  mediaURL: string;
  imageName: string;
  mediaType: string;
}
