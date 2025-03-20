import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Blogs</h1>
      <div className="prose max-w-none text-center">
        <p className="text-lg mb-4">
          Our blog provides insightful information about unlisted shares, offering a deeper understanding of how these assets work, their potential benefits, and the
          risks involved. Whether you are new to unlisted shares or looking to expand your knowledge, we cover topics such as investment strategies, valuation
          methods, market trends, and regulatory aspects. Stay updated with expert tips and guides to navigate the unlisted share market effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Blog Post 1 */}
        <div className="rounded-xl shadow-lg overflow-hidden">
          {/* <Image
            src="/blog-1.png" // Replace with the actual path to your image
            alt="10 Tips to Evaluate Unlisted Share Price Before Investing"
            width={500}  // Adjust as needed
            height={300} // Adjust as needed
            className="object-cover w-full h-48"
          /> */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">10 Tips to Evaluate Unlisted Share Price Before Investing <span className="float-right text-gray-600"> →</span></h2>
            <p className="text-gray-700">Investing in unlisted shares can be challenging, as these shares are not traded on stock exchanges and require careful evaluation....</p>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="rounded-xl shadow-lg overflow-hidden">
          {/* <Image
            src="/blog-2.png" // Replace with the actual path to your image
            alt="A Beginner's Guide to Buying Unlisted Shares in India"
            width={500}  // Adjust as needed
            height={300} // Adjust as needed
            className="object-cover w-full h-48"
          /> */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">A Beginners Guide to Buying Unlisted Shares in India <span className="float-right text-gray-600"> →</span></h2>
            <p className="text-gray-700">Investing in unlisted shares is gaining traction among investors in India. These shares belong to private companies that are not listed on prominent stock exchanges like the NSE...</p>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="rounded-xl shadow-lg overflow-hidden">
          {/* <Image
            src="/blog-3.png" // Replace with the actual path to your image
            alt="Top Factors That Influence Unlisted Share Price in 2025"
            width={500}  // Adjust as needed
            height={300} // Adjust as needed
            className="object-cover w-full h-48"
          /> */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Top Factors That Influence Unlisted Share Price in 2025 <span className="float-right text-gray-600">→</span></h2>
            <p className="text-gray-700">Unlisted shares are becoming more common investment option in Indian markets. Unlisted shares, which are bought and sold on the secondary exchange, unlisted shares donot have an easily accessible price.</p>
          </div>
        </div>
      </div>
    </div>
  );
}