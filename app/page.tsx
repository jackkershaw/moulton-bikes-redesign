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
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          Hello! This is the main homepage content.
        </div>
      </div>
      <Footer />
    </>
  );
}
