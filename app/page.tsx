import Footer from "components/layout/footer";

export const metadata = {
  description:
    "Redesign of Moulton Bicycles website built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:gap-0 md:px-4 min-[1320px]:px-0 space-y-10">
          {/*<video
            width="2000"
            height="240"
            autoPlay
            preload="auto"
            loop
          >
            <source src="/xtb.mp4" type="video/mp4" />
            Your browser does not support the video tag. // #TODO: ADD
            image here.//
          </video> */}
          <div>Hello! This is the main homepage content.</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
