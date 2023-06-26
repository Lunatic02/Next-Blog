import Image from "next/image"


export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image src='/images/82097583.jpg' alt="Lucas" width={200} height={200} priority={true} />
    </section>
  )
}
