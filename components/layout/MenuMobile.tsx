import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Icon } from "@iconify/react";
import { Button } from '../ui/button';
import Link from 'next/link';
import { navlinks } from '@/data/header';

const MenuMobile = () => {
    return (
        <div className='md:hidden'>
            <Sheet>
                <SheetTrigger>
                    <Button asChild variant={'secondary'}>
                        <a>
                            <Icon icon="hugeicons:menu-04" width="30" height="30" className='text-white' />
                        </a>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetTitle className='hidden'>Menu Mobile</SheetTitle>
                    <div className="flex flex-col space-y-2 mt-8">
                        {navlinks.map((link) => (
                            <Link key={link.id} href={link.href}>
                                <div className='text-slate px-6 py-5 text-base font-medium p-4'>
                                {link.link}
                                </div>
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MenuMobile