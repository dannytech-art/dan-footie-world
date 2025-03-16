import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function getSortedPostsData() {
  const fileNames = await fs.readdir(postsDirectory);
  
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as BlogPost;
    })
  );

  return allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostData(slug: string) {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      contentHtml,
      ...data,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  readingTime: string;
  contentHtml: string;
}

// To add your new post about redirects:
// 1. Create a file named 'mastering-nextjs-redirects.md' in content/posts/
// 2. Use this frontmatter:
/*
---
title: "Mastering Next.js Redirects"
date: "2024-03-20"
excerpt: "Complete guide to implementing redirects in Next.js"
readingTime: "5 min"
---
*/

// The rest of your markdown content will be automatically processed