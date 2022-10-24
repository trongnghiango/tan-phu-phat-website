import { FC } from "react"

const features = [
  {
    id: '1',
    title: 'This is Amazing for people to visit.',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.',
    desc: '',
    image: 'https://images.unsplash.com/photo-1627751476653-e954179b174a'
  },
  {
    id: '',
    title: 'This is Amazing for people to visit.',
    subtitle: '',
    desc: '',
    image: 'https://images.unsplash.com/photo-1572431447238-425af66a273b',
  },
  {
    id: '',
    title: ' Ngay mai la thu 2',
    subtitle: '',
    desc: '',
    image: 'https://images.unsplash.com/photo-1540202404-1b927e27fa8b',
  },
  {
    id: '',
    title: 'Hom nay la chu nhat',
    subtitle: '',
    desc: '',
    image: 'https://images.unsplash.com/photo-1506790409786-287062b21cfe',
  },
  {
    id: '',
    title: 'Hello 123',
    subtitle: '',
    desc: '',
    image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762',
  },
  {
    id: '',
    title: 'Ma sao ban Thiinh BB',
    subtitle: '',
    desc: '',
    image: 'https://images.unsplash.com/photo-1544473244-f6895e69ad8b'
  }
]

const ItemFeature = ({ image, title, subtitle }: {
  image: string,
  title: string,
  subtitle: string,
  desc?: string,
}) => {

  return (
    <div className="container mx-auto shadow-md rounded-lg max-w-md hover:shadow-2xl transition duration-300 cursor-pointer">
      <img src={image} alt="" className="rounded-t-lg w-full" />
      <div className="p-6">
        <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
          {title}
        </h1>
        <p className="text-gray-700 my-2 hover-text-900 ">
          {subtitle}
        </p>
      </div>
    </div>

  );
}

const FeaturedSection: FC = () => {

  return (
    <div className="bg-gray-100 min-h-screen py-32 px-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">

        {features.map(({ title, subtitle, image }, index) => (
          <ItemFeature
            key={index}
            title={title}
            subtitle={subtitle}
            image={image}
          />
        ))}

      </div>
    </div>
  )
}
export default FeaturedSection;
