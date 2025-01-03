"use client";

import Image from "next/image";
import FooterApp from "../components/footer";
import { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import { useRouter } from "next/navigation";

export default function Blogs() {
  const [blogsarr, setBlogsArr] = useState<any>([]);

  const router = useRouter();

  async function getBlog() {
    const arr: any = [];
    const blog = await client.fetch(`*[_type == "post"]`);

    console.log(blog);

    blog.map(async (item: any) => {
      await arr.push({
        title: item.title,
        des: item.body[0].children[0].text,
        image: urlFor(item.mainImage).width(400).height(300).url(),
        date: new Date(item._createdAt).toDateString(),
        slug: item.slug.current
      });
    });
    setBlogsArr(arr);
  }

  useEffect(() => {
    getBlog();
  }, []);

  useEffect(() => {
    console.log(blogsarr);
  }, [blogsarr]);
  return (
    <div className="blogs">
      <h1 className="text-5xl text-center m-10 font-bold">Blogs</h1>
      <div className="">
        <div className="blogs mb-20 mt-10 flex flex-col-reverse md:flex-row gap-10 justify-center relative px-5">
          <div className="post md:w-[80%] flex flex-col items-center gap-10">

            {
              blogsarr && blogsarr.map((v : any, i : number) => 
                <div key={i} onClick={() => router.push(`/readblog/${v.slug}`)} className="card max-w-[800px] rounded-lg shadow-lg p-5">
              <div className="flex justify-between items-center flex-col-reverse min-[600px]:flex-row border-b border-b-black pb-5">
                <div>
                  <h3 className="title text-2xl font-bold mb-3">
                    {v.title}
                  </h3>
                  <p className="description pe-5">
                    {v.des}
                  </p>
                </div>
                <Image
                  className="min-[600px]:max-w-[180px] w-full rounded-lg mb-5"
                  width={180}
                  height={180}
                  src={v.image}
                  alt="post-image"
                ></Image>
              </div>
              <div className="sub-section text-sm flex justify-between mt-3 gap-5 flex-wrap">
                <div className="gap-5 inline-flex">
                  <div>Author : khubaib shahid</div>
                  <div>Date : {v.date}</div>
                </div>
              </div>
            </div>
              )

            }
            
          </div>

          <div className="categories md:w-[30%] pt-0 right-0 md:top-10 md:sticky text-center md:text-start md:h-svh">
            <h2 className="text-xl mb-5 font-bold">Categories</h2>
            <div className="flex md:flex-col justify-center md:justify-start gap-5 text-gray-600">
              <div>Driving</div>
              <div>Computer Science</div>
              <div>Knowladge</div>
              <div>Facts</div>
            </div>
          </div>
        </div>
      </div>

      <FooterApp></FooterApp>
    </div>
  );
}
