import Image from "next/image";
export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <Image
      src="/images/moulton-logo.jpeg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}
