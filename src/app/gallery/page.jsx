import { Gallery } from '@/components/Gallery'
import { GalleryHero } from '@/components/GalleryHero'
import { getAllItems, getGalleryTags } from '@/lib/getItems'
import 'lightgallery/css/lightgallery.css'

export const metadata = {
  title: 'Gallery - Texas Twisters Gymnastics',
  description:
    'Step inside Texas Twisters Gymnastics and get an inside look at gym life with our photo gallery.',
  alternates: {
    canonical: './'
  }
}

export default function GalleryPage() {
  const gallery = getAllItems('gallery')
  const tags = getGalleryTags()

  return (
    <>
      <GalleryHero />
      <Gallery gallery={gallery} tags={tags} />
    </>
  )
}
