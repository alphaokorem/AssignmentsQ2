import Link from 'next/link'

const Footer = () => {
  return (
    <div className='px-4 bg-[#8b5e34] border-4 border-x-[#2E1B12] border-t-0 border-b-[#2E1B12] border-b-8 py-4 text-sm text-center font-semibold'>
  <div className="mb-2">
    <Link href={"/"} className="hover:underline mx-2">Home</Link> |
    <Link href={"about"} className="hover:underline mx-2">About</Link> |
    <Link href={"contact"} className="hover:underline mx-2">Contact</Link>
  </div>
  <p>&copy; 2025 Blessed Bakers. All rights reserved.</p>

    </div>
  )
}

export default Footer
