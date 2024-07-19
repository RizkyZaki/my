import { BackgroundGradientAnimation } from "@/components/aceternity/BgGradient";
import { LinkPreview } from "@/components/aceternity/LinkPreview";
import Divider from "@/components/shared/Divider";
import { getAllBlogsMetadata } from "@/lib/actions/blog.action";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Zach",
  description:
    "Read the blogs that are written by me. Interweaved with informations and my practical knowledge, these blogs will definitely speak something new to you.",
  openGraph: {
    title: "Blogs | Zach",
    description:
      "Read the blogs that are written by me. Interweaved with informations and my practical knowledge, these blogs will definitely speak something new to you.",
    images: [
      {
        url: "https://raw.githubusercontent.com/RizkyZaki/my/main/app/opengraph-image.png",
      },
    ],
  },
};

const Blogs = async () => {
  const AllBlogs = await getAllBlogsMetadata();

  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-3 pt-28 scroll-pt-24">
        <BackgroundGradientAnimation
          containerClassName="h-28 sm:h-40 rounded-xl"
          size="24px"
        >
          <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-5xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Blogs
            </p>
          </div>
        </BackgroundGradientAnimation>

        <div className="mt-10 pb-10">
          {AllBlogs.map((blog: any, i: number) => (
            <div key={i}>
              <div className="flex items-center justify-between">
                <p className="text-7xl mx-5 text-[#646345] dark:text-[#d3d2c5] max-lg:hidden">
                  {i + 1}
                </p>
                <div className="text-xl md:text-3xl max-w-4xl mx-auto my-10">
                  <LinkPreview
                    url={`/blogs/${blog.slug}`}
                    imageSrc={blog.img}
                    isStatic
                    className="text-[#868562] dark:text-[#BBBAA6]"
                  >
                    {blog.title}
                    <div className="flex items-center justify-between mt-4">
                      <div className="font-medium text-lg ml-2 text-[#14af40] dark:text-[#0ae448]">
                        {blog.date}
                      </div>
                      <p className="font-normal text-base mr-5 text-[#14af40] dark:text-[#0ae448] xl:hidden flex items-center justify-center cursor-pointer">
                        Read More <ExternalLink className="ml-2" size={14} />
                      </p>
                    </div>
                  </LinkPreview>
                </div>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mr-5 text-[#14af40] dark:text-[#0ae448] max-xl:hidden flex items-center justify-center cursor-pointer"
                >
                  Read More <ExternalLink className="ml-2" size={14} />
                </Link>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <Divider />
      </div>
    </div>
  );
};

export default Blogs;
