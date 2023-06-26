import Image from "next/image"


export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto p-4">
      <Image className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto" src='/images/82097583.jpg' alt="Lucas" width={200} height={200} priority={true} />
    </section>
  )
}
