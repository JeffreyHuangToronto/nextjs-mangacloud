import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MangaImage from '../components/MangaImage'
import { useState, useEffect } from 'react'

// export async function getServerSideProps(context) {
//   var mangaData = []
//   await fetch('https://api.mangadex.org/manga?includes[]=cover_art&order[followedCount]=desc&ids[]=f721d5ed-7667-4ff5-8a2f-5e46afaea7d6&ids[]=26937e2f-de0e-498f-9295-7eed381b88b3&ids[]=7e2933d2-8587-4c0f-b69c-4233864b96a8&ids[]=151d1758-f871-46ac-8edc-75ab69b688fe&ids[]=b6b87e4d-c1cc-4d0b-8588-df715dd98624&ids[]=563355c9-65cc-4011-8665-15bdc013d00a&ids[]=975f3334-8395-4393-84a2-50fcaccbcdc0&ids[]=24c0f6c0-ec09-4b83-ab52-a855283bb6e3&ids[]=e3d2897c-ca52-4675-ae0b-0af1bfe534dd&ids[]=4e166e00-a9b3-4f17-8075-441b9745715a&ids[]=4c05b1b4-7da6-4e7a-ae39-5cc2363093f0&ids[]=55a96d76-10a2-4c4b-bc60-3a4aa8325e50&ids[]=aa6c76f7-5f5f-46b6-a800-911145f81b9b&ids[]=c8aebcc7-678e-4682-a727-48febbc325fd&ids[]=70fe972b-3c88-4165-b9a5-3db96d6d2c14&ids[]=1ef6ddce-7930-45ae-a335-9a45604b99f7&ids[]=62608082-d81d-4513-af7d-ae3ffe2423d2&ids[]=770c61b9-0ef2-460b-8c25-c10ab23349ce&ids[]=7433b48f-0bb1-4b72-b88d-07b2939db1ff&ids[]=b603c211-d1f9-4145-a2ac-04dcd5f06329&ids[]=10227f74-9134-4262-b01d-8966bc149c4d&ids[]=308f0355-fedb-4861-a4e0-56fe35ae61d3&ids[]=789642f8-ca89-4e4e-8f7b-eee4d17ea08b&ids[]=248525ed-ad1c-4ddc-a834-5d6ce66a3ad2&ids[]=e1d8b192-fa28-4651-bdaf-d4e0d4418ea8&ids[]=dc34064e-3cd4-48c4-9ec5-550845b96ffb&ids[]=6e445564-d9a8-4862-bff1-f4d6be6dba2c&ids[]=808fdeae-5ea2-4839-8f95-8183dfdddddc&ids[]=b30540c7-bde6-4279-9645-a3eddc5c9e97&ids[]=5ce0d9df-a3cc-421e-bc33-796869b6b9f7&ids[]=304ceac3-8cdb-4fe7-acf7-2b6ff7a60613&limit=31&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic')
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);
//       mangaData = data.data
//     })

//     console.log(mangaData);
//   return {
//     props: { mangaData }, // will be passed to the page component as props
//   }
// }

export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.mangadex.org/manga?includes[]=cover_art&order[followedCount]=desc&ids[]=f721d5ed-7667-4ff5-8a2f-5e46afaea7d6&ids[]=26937e2f-de0e-498f-9295-7eed381b88b3&ids[]=7e2933d2-8587-4c0f-b69c-4233864b96a8&ids[]=151d1758-f871-46ac-8edc-75ab69b688fe&ids[]=b6b87e4d-c1cc-4d0b-8588-df715dd98624&ids[]=563355c9-65cc-4011-8665-15bdc013d00a&ids[]=975f3334-8395-4393-84a2-50fcaccbcdc0&ids[]=24c0f6c0-ec09-4b83-ab52-a855283bb6e3&ids[]=e3d2897c-ca52-4675-ae0b-0af1bfe534dd&ids[]=4e166e00-a9b3-4f17-8075-441b9745715a&ids[]=4c05b1b4-7da6-4e7a-ae39-5cc2363093f0&ids[]=55a96d76-10a2-4c4b-bc60-3a4aa8325e50&ids[]=aa6c76f7-5f5f-46b6-a800-911145f81b9b&ids[]=c8aebcc7-678e-4682-a727-48febbc325fd&ids[]=70fe972b-3c88-4165-b9a5-3db96d6d2c14&ids[]=1ef6ddce-7930-45ae-a335-9a45604b99f7&ids[]=62608082-d81d-4513-af7d-ae3ffe2423d2&ids[]=770c61b9-0ef2-460b-8c25-c10ab23349ce&ids[]=7433b48f-0bb1-4b72-b88d-07b2939db1ff&ids[]=b603c211-d1f9-4145-a2ac-04dcd5f06329&ids[]=10227f74-9134-4262-b01d-8966bc149c4d&ids[]=308f0355-fedb-4861-a4e0-56fe35ae61d3&ids[]=789642f8-ca89-4e4e-8f7b-eee4d17ea08b&ids[]=248525ed-ad1c-4ddc-a834-5d6ce66a3ad2&ids[]=e1d8b192-fa28-4651-bdaf-d4e0d4418ea8&ids[]=dc34064e-3cd4-48c4-9ec5-550845b96ffb&ids[]=6e445564-d9a8-4862-bff1-f4d6be6dba2c&ids[]=808fdeae-5ea2-4839-8f95-8183dfdddddc&ids[]=b30540c7-bde6-4279-9645-a3eddc5c9e97&ids[]=5ce0d9df-a3cc-421e-bc33-796869b6b9f7&ids[]=304ceac3-8cdb-4fe7-acf7-2b6ff7a60613&limit=31&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setLoading(false)
        console.log(data.data)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const list = []

  
  data.forEach((manga) => {
    manga.relationships.forEach((relationship)=> {
      // console.log(relationship)
      if (relationship.type = "cover_art" && relationship.attributes){
        // console.log(relationship)
        // console.log(relationship.attributes.filename)
        list.push(<Image src={`https://uploads.mangadex.org/covers/${manga.id}/${relationship.attributes.fileName}`} width={300} height={400}/>)
      }
    })
  })

  return (

    <div className={styles.container}>
      <Head>
        <title>Manga Cloud Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {list}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
