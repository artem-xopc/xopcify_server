import { ObjectId } from 'mongoose';

export class CreateCommentDto {
  readonly username: string;
  readonly trackId: ObjectId;
  readonly text: string;
}
