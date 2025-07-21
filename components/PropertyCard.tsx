import { Bath, BedDouble, MapPin, SquareGanttChart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Property } from 'lib/properties'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
      <Link href={`/imoveis`}>
        <div className="relative h-56 w-full">
          <Image src={property.imageUrl} alt={property.title} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="p-6">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{property.type}</p>
          <h3 className="mt-2 truncate text-lg font-bold">{property.title}</h3>
          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="mr-1.5 size-4 flex-shrink-0" />
            <span className="truncate">{property.address}</span>
          </div>
          <p className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{property.priceFormatted}</p>
          <div className="mt-4 flex flex-wrap justify-between gap-y-2 border-t pt-4 text-sm text-gray-600 dark:text-gray-300">
            <span className="flex items-center">
              <BedDouble className="mr-1.5 size-4" /> {property.bedrooms} {property.bedrooms > 1 ? 'quartos' : 'quarto'}
            </span>
            <span className="flex items-center">
              <Bath className="mr-1.5 size-4" /> {property.bathrooms} {property.bathrooms > 1 ? 'banheiros' : 'banheiro'}
            </span>
            <span className="flex items-center">
              <SquareGanttChart className="mr-1.5 size-4" /> {property.area} m²
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}