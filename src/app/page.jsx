'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import ListingItem from '../../components/ListingItem/ListingItem'
import { useEffect, useState } from 'react'

export default function Home() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
     fetch(`${process.env.NEXT_PUBLIC_API_UR}/listings`)
         .then((response) => {
           return response.json();
         })
         .then((data) => {
          setListings(data)
         })
  },[]);

  return (
  
     <div className={styles.content}>
       <div className={styles.content__heading}>
            Showing all results
       </div>
       <div className={styles.content__items}>
        {
          listings && listings.length > 0 && 
              listings.map((listing) => (
                <ListingItem listing={listing} />
              ))
        }
             
            
       </div>
     </div>
   
  )
}
