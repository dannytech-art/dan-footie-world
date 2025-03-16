import Link from 'next/link';

export default function DocumentationPage() {
  return (
    <div className="container mx-auto p-4 py-12">
      <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Redirects Configuration</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Client-Side Redirects</h3>
            <p className="mb-4">Use Next.js Link component for internal navigation:</p>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              {`import Link from 'next/link';

<Link href="/new-path" replace>
  Redirect Immediately
</Link>`}
            </pre>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Server-Side Redirects</h3>
            <p className="mb-4">Configure in next.config.js:</p>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              {`// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
};`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Use 301 (permanent) redirects for SEO-preserving moves</li>
          <li>Use 302 (temporary) redirects for A/B testing</li>
          <li>Always test redirects in staging environment</li>
          <li>Monitor redirect chains</li>
        </ul>
      </section>
    </div>
  );
}