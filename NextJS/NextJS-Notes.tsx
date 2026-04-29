/*
========================================================================================================================================================================
                                                                    NEXT.JS COMPLETE NOTES - APP ROUTER, SSR, AND OPTIMIZATION
========================================================================================================================================================================

/*
Next.js is a React framework that gives you building blocks to create fast web applications.
It handles tooling and configuration and provides additional features like Routing, Data Fetching, and Rendering.

Key Concepts:
- App Router: New file-system based router in the `app` directory.
- Server Components: Components that render on the server (default in App Router).
- Client Components: Components that render on the client (require 'use client' directive).
- Data Fetching: SSR (Server-Side Rendering), SSG (Static Site Generation), and ISR (Incremental Static Regeneration).
*/

// --------------------SERVER VS CLIENT COMPONENTS-----------------------
/*
Server Components (Default):
- Fetch data on the server.
- Keep sensitive info (API keys) on server.
- Reduce client-side bundle size.

Client Components:
- Use Hooks (useState, useEffect).
- Use Browser APIs (window, localStorage).
- Handle interactivity (onClick).
*/

'use client'; // Required for Client Components

import { useState } from 'react';

export default function ClientCounter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// --------------------FILE-BASED ROUTING-----------------------
/*
app/page.tsx       -> /
app/about/page.tsx  -> /about
app/blog/[id]/page.tsx -> /blog/123 (Dynamic Route)
app/layout.tsx     -> Shared UI for all pages
*/

// --------------------DATA FETCHING (SERVER SIDE)-----------------------
/*
Next.js extends the native fetch API to allow per-request caching and revalidation.
*/
async function getData() {
    const res = await fetch('https://api.example.com/data', {
        next: { revalidate: 3600 } // ISR: Revalidate every hour
    });
    return res.json();
}

export async function Page() {
    const data = await getData();
    return <main>{/* Render data */}</main>;
}

// --------------------IMAGE OPTIMIZATION-----------------------
import Image from 'next/image';

const MyImage = () => (
    <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Profile"
        placeholder="blur" // Optimization
    />
);

// --------------------API ROUTES (ROUTE HANDLERS)-----------------------
/*
Created in app/api/route.ts
*/
export async function GET(request: Request) {
    return new Response(JSON.stringify({ message: "Hello from API" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

// --------------------NEXT.JS SUMMARY TABLE-----------------------
/*
| Feature          | Description                                      |
| ---------------- | ------------------------------------------------ |
| App Router       | File-system based routing with layouts/loading   |
| SSR              | Server-Side Rendering for dynamic data           |
| SSG              | Static Site Generation for speed                 |
| ISR              | Incremental Static Regeneration                  |
| Server Comp      | Components that render on server by default      |
| Client Comp      | Components that use interactivity ('use client') |
| next/image       | Automatic Image optimization                     |
---------------------------------------------------------------------- */
