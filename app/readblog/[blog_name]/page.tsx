"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import FooterApp from "@/app/components/footer";

export default function BlogReader() {
  const blogName = useParams();
  const [title, setTitle] = useState("");
  const [titleImage, setTitleImage] = useState("");
  const [blogBody, setBlogBody] = useState<any>([]);

  async function getBlog() {
    const blog = await client.fetch(
      `*[slug.current == "${blogName.blog_name}"]`
    );

    console.log(blog[0].body);

    setTitle(blog[0].title);
    setTitleImage(urlFor(blog[0].mainImage).width(400).height(300).url());
    setBlogBody(blog[0].body);
  }

  useEffect(() => {
    getBlog();
  }, []);
  //   useEffect(() => {
  //     console.log(titleImage);
  //   }, [titleImage]);
  return (
    <div className="blog-reader">
      <div className="main px-10 mb-20">
        <div className="blog-content py-10">
          <h1 className="text-4xl font-bold">{title}</h1>
          <div className="flex justify-center my-10">
            <Image
              src={titleImage}
              alt={"img"}
              width={500}
              height={300}
            ></Image>
          </div>

          <div className="blog-body">
            {blogBody &&
              blogBody.map((block: any, index: number) => {
                if (block._type === "block") {
                    return (
                        <div>
                            {block.style == "h3" ? 
                            block.children.map((text: any) => {
                                return (
                                    <h3 className="text-3xl font-bold my-5">{text.text}</h3>
                                )
                            })
                             : block.children.map((text : any) => {
                                return (
                                    <span className={`${text.marks.includes("strong") ? `font-bold` : ``}`}>{text.text}</span>                                    
                                )
                            })
                            }
                        </div>
                    )
                } else if (block._type === "image") {
                  return (
                    <div key={index} className="flex justify-center">
                      <Image
                        src={urlFor(block.markDefs.asset)
                          .width(400)
                          .height(300)
                          .url()}
                        width={400}
                        height={300}
                        alt="img"
                      ></Image>
                    </div>
                  );
                } else {
                  return <div>loading...</div>;
                }
              })}
          </div>
        </div>
      </div>
      <FooterApp></FooterApp>
    </div>
  );
}
