import { AxiosInstance } from 'axios';
import { Property } from 'kefir';

//

interface Arity1Fn<A, R> {
  (a: A): R;
}

interface Arity2Fn<A, B, R> {
  (a: A, b: B): R;
}

interface CurriedFn2<A, B, R> {
  (a: A): (b: B) => R;
  (a: A, b: B): R;
}

interface CurriedFn3<A, B, C, R> {
  (a: A): (b: B) => CurriedFn2<B, C, R>;
  (a: A, b: B): (c: C) => R;
  (a: A, b: B, c: C): R;
}

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

export function mkClient(clientId: string): AxiosInstance;

export default mkClient;

//

export namespace API {
  export function videos(id: string): (client: AxiosInstance) => Property<VideoResponse, never>;
  export function videos(id: string, client: AxiosInstance): Property<VideoResponse, never>;
}
