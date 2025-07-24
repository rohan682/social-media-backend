import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import post from '@/models/post';
import user from '@/models/user';

export async function GET(req: NextRequest) {
  console.log('GET /api/posts called');
  try {
    await connectDB();
    const posts = await post.find().populate('author', 'username avatarUrl').sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('GET /api/posts error:', error);
    return NextResponse.json({ message: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
    console.log('JWT_SECRET:', process.env.JWT_SECRET);

  try {
    await connectDB();

    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = (decoded as any).userId;

    const body = await req.json();
    const { content, imageUrl } = body;

    if (!content) {
      return NextResponse.json({ message: 'Content is required' }, { status: 400 });
    }

    const newPost = new post({
      content,
      imageUrl,
      author: userId,
    });

    await newPost.save();
    return NextResponse.json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('POST /api/posts error:', error);  // <--- Add this line
    return NextResponse.json({ message: 'Failed to create post' }, { status: 500 });
  }
}