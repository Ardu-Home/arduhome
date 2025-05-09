import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import MenuMobile from "@/components/layout/MenuMobile"
import Link from 'next/link';
import { navlinks } from '@/data/header';

const Header = () => {
    return (
        <>
            <div className='border-b-1 bg-background fixed w-full z-50'>
                <div className='py-4 flex-between container-lg '>
                    <Image src="/assets/image/logo/Logo-White.svg" width={60} height={60} alt='Logotipo - Ardu Home' />
                    <div className="hidden md:visible md:flex items-center gap-8">
                        <ul className="flex space-x-2">
                            {navlinks.map((link) => (
                                <Button asChild variant={'ghost'} key={link.id} className="text-white px-6 py-5 text-base">
                                    <Link href={link.href}>
                                        {link.link}
                                    </Link>
                                </Button>
                            ))}
                        </ul>
                        <Button asChild variant={'primary_gradient'} size="lg" className='rounded-full text-base'><Link href={"#"}>Get Started</Link></Button>
                    </div>
                    <MenuMobile/>
                </div>
            </div>
            
        </>
    )
}

export default Header