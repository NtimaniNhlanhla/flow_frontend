import React from 'react'
import styles from './ListingItem.module.scss'
import Image from 'next/image'

const ListingItem = ({listing}) => {

 console.log(`Image Url ${listing.images[0]}`)
  return (
    <div className={styles.listingItem}>
        <div className={styles.listingItem__imgContainer}>
          <Image 
             className={styles.listingItem__image}
             src={listing.images[0] ? listing.images[0] :  'https://placehold.co/600x400/png'} alt='image'
             width={0}
             height={0}
             sizes='100vw'
          />
          <span className={styles.listingItem__price}>R {listing.unit.price.toLocaleString()}</span>
          <span className={styles.listingItem__organisation}>
            <Image src={listing.organisation[0].logoUrl} alt='image' 
                width={90}
                height={50}
            />
          </span>
        </div>
        
        <div className={styles.listingItem__type}>House for sale</div>
        <div className={styles.listingItem__title}>
            {listing.title}
        </div>
        <div className={styles.listingItem__description}>
          {listing.description.slice(0, 80)}...
        </div>
    </div>
  )
}

export default ListingItem