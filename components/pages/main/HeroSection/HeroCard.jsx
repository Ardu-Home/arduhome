import Image from 'next/image'
import React from 'react'

export default function HeroCard() {
    return (
        <>
            <div>
                <Image src="/assets/image/background/hero.png" width="700" height="500" alt='' className='rounded-tr-4xl rounded-bl-4xl' />
            </div>
        </>
    )
}
