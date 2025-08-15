'use client'

import { useEffect } from 'react'

interface BlogSchemaProps {
  schema: {
    '@context': string
    '@type': string
    headline: string
    image: string
    datePublished: string
    author: {
      '@type': string
      name: string
    }
    publisher: {
      '@type': string
      name: string
      logo: {
        '@type': string
        url: string
      }
    }
  }
}

export default function BlogSchema({ schema }: BlogSchemaProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [schema])

  return null
}
