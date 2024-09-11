"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Navigation = () => {

    // Client side navigation
    const pathname = usePathname();
    const searchParams = useSearchParams();

    console.log(pathname)
const q = searchParams.get('q')

    const router = useRouter();
    const handleClick =()=>{
        router.push("/");
    }
  return (
    <div>
        <Link href="/" prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  )
}

export default Navigation
