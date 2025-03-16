import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title className='dark:text-black'>About Us - Danny's Footie World</title>
        <meta name="description" content="Discover the story behind Danny's Footie World - your premier destination for football enthusiasts. Learn about our mission, team, and passion for the beautiful game." />
        <meta property="og:title" content="About Danny's Footie World" />
        <meta property="og:description" content="Learn about our football passion and commitment to quality." />
      </Head>

      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-gray-800">About Danny's Footie World</h1>
          <p className="text-xl md:text-2xl max-w-3xl dark:text-gray-800">
            Your trusted partner in all kinds of footwear since 2010
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 py-12 md:py-16">
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/about-stadium.jpg"
                alt="Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Story</h2>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                Founded in 2010 by Danny Thompson, Danny's Footie World
                started as a small local shop passionate about providing quality footwears to
                enthusiasts. Today, we've grown into a premier destination for footwears lovers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We source only the best materials and partner with top brands to ensure unmatched quality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Community Driven</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Supporting fashionistas, footwear lovers and youth through our community initiatives.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously evolving to bring you the latest footwears and fashion.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Danny Thompson - Founder', 'Sarah Johnson - Head of Operations', 'Michael Chen - Product Curator'].map((member) => (
              <div key={member} className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`/images/team/${member.split(' ')[0].toLowerCase()}.jpg`}
                    alt={member}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.split(' - ')[0]}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.split(' - ')[1]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <div className="bg-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 dark:text-gray-800">Our Core Values</h2>
            <ul className="space-y-4 text-lg dark:text-gray-800">
              <li>✅ Passion for the beautiful looks</li>
              <li>✅ Integrity in all our dealings</li>
              <li>✅ Commitment to customer satisfaction</li>
              <li>✅ Quality over mediocrity</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}