"use client"
import FooterApp from "../components/footer";

export default function FeedbackPage() {
  return (
    <div className="feedback">
      <div className="main">
        <div>
          <h2 className="font-bold text-5xl text-center m-10">Feedback</h2>
        </div>
        <div className="max-w-[400px] mx-auto mb-10 px-3">
          <label htmlFor="email" className="text-xl">Email</label>
          <input className="w-full p-2 rounded-md border mt-3 border-black focus:border
           focus:border-blue-500 outline-none" type="email" />
        </div>
        <div className="max-w-[400px] mx-auto px-3">
          <label htmlFor="email" className="text-xl">Feedback</label>
          <textarea className="w-full p-2 rounded-md border mt-3 border-black focus:border
           focus:border-blue-500 outline-none resize-none" rows={6} />
        </div>

      <div className="footer text-end w-[400px] mx-auto">
        <button className="bg-gray-800 text-white p-3 text-lg rounded-md mt-5">Submit</button>
        </div>

      </div>

        <div className="mt-5">
        <FooterApp></FooterApp>
        </div>
    </div>
  );
}