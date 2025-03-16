---
title: "Mastering Next.js Redirects"
date: "2024-03-20"
excerpt: "Complete guide to implementing redirects in Next.js"
readingTime: "5 min"
---

## Client-Side Redirects

Use Next.js router for client-side redirects:

```jsx
import { useRouter } from 'next/router';

function RedirectButton() {
  const router = useRouter();
  
  return (
    <button onClick={() => router.push('/new-location')}>
      Redirect Me
    </button>
  );
}