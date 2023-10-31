import Image from 'next/image'
import Categories from './components/categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from './components/productList';
import SectionTitle from './components/sectionTitle';
import PromoBanner from './components/promoBanner';



export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards'
      }
    }
  })

  return (
    <div className='flex flex-col gap-8'>
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto em mouses!"

      />

      <div className=' px-5'>
        <Categories />
      </div>

      <div className=''>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"

      />

      <div className=''>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses!"

      />


    </div>
  )
}
