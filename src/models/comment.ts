import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IComment extends Document {
  commenter: mongoose.Types.ObjectId;
  text: string;
  createdAt: Date;
}

const CommentSchema: Schema<IComment> = new Schema({
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Comment: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;