import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Next.js API Function Behavior</h1>
        
        <p className="mb-4">
          This is a proof of concept comparing function behavior across different environments:
        </p>

        <table className="w-full border-collapse mb-8">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border p-2 text-left">Function Type</th>
              <th className="border p-2 text-left">next dev</th>
              <th className="border p-2 text-left">vercel dev</th>
              <th className="border p-2 text-left">vercel deployed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  api/time.js
                </code>
                <div className="text-sm text-gray-600 dark:text-gray-400">Root level Node.js function</div>
              </td>
              <td className="border p-2">404 (expected)</td>
              <td className="border p-2">200</td>
              <td className="border p-2">200</td>
            </tr>
            <tr>
              <td className="border p-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  app/api/random/route.ts
                </code>
                <div className="text-sm text-gray-600 dark:text-gray-400">App route</div>
              </td>
              <td className="border p-2">200</td>
              <td className="border p-2">404</td>
              <td className="border p-2">200</td>
            </tr>
            <tr>
              <td className="border p-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  app/api/hello/[slug]/route.ts
                </code>
                <div className="text-sm text-gray-600 dark:text-gray-400">Dynamic app route</div>
              </td>
              <td className="border p-2">200</td>
              <td className="border p-2">404</td>
              <td className="border p-2">200 if the slug is '[slug]', or 405</td>
            </tr>
          </tbody>
        </table>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>Test the endpoints:</p>
          <ul className="list-disc pl-5 mt-2">
            <li><a href="/api/time"><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/api/time</code></a></li>
            <li><a href="/api/random"><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/api/random</code></a></li>
            <li><a href="/api/hello/test"><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/api/hello/test</code></a></li>
            <li><a href="/api/hello/[slug]"><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/api/hello/[slug]</code></a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
