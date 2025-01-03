import FooterApp from "../components/footer";

export default function App() {
  return (
    <div>
      <div className="about-main">
        <div className="hero-section w-full p-10">
          <div className="box border-b border-b-black pb-10">
            <h2 className="text-5xl font-bold text-center mb-10">About Us</h2>
            <p className="text-center">
              Welcome to Okay your goto platform for any topic/niche, e.g.,
              technology insights, creative inspiration, travel tales, etc. Our
              mission is to state the purpose or goal of your blog, e.g.,
              &quot;empower readers with insightful stories and practical knowledge,&quot;
              &quot;share the beauty of diverse cultures through travel stories,&quot;
              etc. Whether you&apos;re here to learn, explore, or simply enjoy a good
              read, we got something special for you.
            </p>
          </div>
        </div>
        <div className="offers py-5 px-10">
          <div className="box  pb-10">
            <h2 className="text-5xl font-bold text-center mb-10">
              Join the Conversation
            </h2>
            <div className="">
              <div className="flex justify-center items-start gap-5 text-center mb-10">
                We love hearing from our readers! Feel free to comment on
                posts, share your ideas, or reach out through our contact
                pages. Thank you for being part of our journey.
                Together, let’s make learning, storytelling,
                or discovery more meaningful.
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterApp></FooterApp>
    </div>
  );
}
