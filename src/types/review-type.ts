import { UserType } from './user-type';

export type Review = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}
