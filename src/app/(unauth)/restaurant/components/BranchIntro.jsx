import React from 'react'
import Image from 'next/image';
import images from '../../../../../public/images';
import AddBtn from '@/app/components/common/buttons/AddBtn';

const BranchIntro = ({ rest }) => {
    const maxStars = 5
    const stars = Array(maxStars).fill(0).map((_, index) => {
        return index < rest.reviews ? <Image src={images.star_fill} alt='star' /> : <Image src={images.star_hollow} alt='star' />;
    });

    return (
        <div className='flex flex-col gap-3 md:flex-row'>
            <div className=' flex flex-col items-center justify-between md:flex-[0.15]'>
                <Image src={rest.image} alt='restaurant image' />
                <span className='text-light-text tracking-tighter'>{rest.cuisines}</span>
            </div>
            <div className='flex-[0.85] space-y-3'>
                <div className="flex justify-between">
                    <div className='flex flex-col '>
                        <h2 className='font-semibold text-2xl text-heading-clr'>{rest.name}</h2>
                        <div className="flex">
                            {stars.map((star, index) => (
                                <span key={index}>{star}</span>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <span className='flex gap-1 text-light-text'>
                                <Image src={images.location_pin} alt='pin' />
                                {rest.location}
                            </span>
                            <span className='flex gap-1 text-light-text'>
                                <Image src={images.clock} className='object-contain' alt='pin' />
                                {rest.time}
                            </span>
                        </div>
                    </div>
                    <AddBtn btnText={"make_reservation"} />

                </div>
                <div >
                    <p className='text-lg text-dark-text'>{rest.para}</p>
                </div>
            </div>
        </div>
    )

}

export default BranchIntro