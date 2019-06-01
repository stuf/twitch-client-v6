import { AxiosInstance } from 'axios';
import { Property } from 'kefir';

export function mkClient(clientId: string): AxiosInstance;

export default mkClient;

//

export type DateTime = string;

export type Visibility = 'public' | 'private';

export type AllOrT<T> = 'all' | T;

export type VideoType = 'upload' | 'archive' | 'highlight';

export type Period = 'day' | 'week' | 'month';

export interface RestResponse<T> {
  data: T;
  pagination: {
    cursor: string;
  };
}

//

export interface VideoRequestParams {
  after: string;
  before: string;
  first: string;
  language: string;
  period: AllOrT<Period>;
  sort: 'time' | 'trending' | 'views';
  type: AllOrT<VideoType>;
}

//

export interface VideoResponse extends RestResponse<Array<Video>> {}

//

export interface Video {
  id: string;
  user_id: string;
  user_name: string;
  title: string;
  description: string;
  created_at: DateTime;
  published_at: DateTime;
  url: string;
  thumbnail_url: string;
  viewable: Visibility;
  view_count: number;
  language: string;
  type: VideoType;
  duration: string;
}

//

export function videos(id: string, client: AxiosInstance): Property<VideoResponse, never>;
