
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  description: string
  price: number
  quantity: number
}

export default function ProductGrid() {

  const [favorites, setFavorites] =
    useState<Set<number>>(new Set())

  const [products, setProducts] =
    useState<Product[]>([])

  useEffect(() => {

    axios
      .get('http://localhost:8080/api/products')
      .then((response) => {

        setProducts(response.data)

      })
      .catch((error) => {

        console.log(error)

      })

  }, [])

  const toggleFavorite = (id: number) => {

    const newFavorites =
      new Set(favorites)

    if (newFavorites.has(id)) {

      newFavorites.delete(id)

    } else {

      newFavorites.add(id)

    }

    setFavorites(newFavorites)
  }

  const addToCart = async (
    productId: number
  ) => {

    try {

      const token =
        localStorage.getItem('token')

      if (!token) {

        alert('Please Login First')
        return
      }

      await axios.post(

        'http://localhost:8080/api/cart',

        {
          productId,
          quantity: 1
        },

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      )

      alert('Added To Cart')

    } catch (error) {

      console.log(error)

      alert('Failed To Add Cart')
    }
  }

  return (

    <section
      id="products"
      className="py-20 md:py-28"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="space-y-4 mb-12 text-center">

          <p className="text-primary font-semibold text-sm tracking-wide uppercase">
            Featured Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Handpicked Products
          </h2>

          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Explore our curated selection of premium items designed for modern living
          </p>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (

            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >

              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-muted to-muted/50 h-56 flex items-center justify-center overflow-hidden">

                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  📦
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() =>
                    toggleFavorite(product.id)
                  }
                  className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors opacity-0 group-hover:opacity-100"
                >

                  <Heart
                    className="w-4 h-4"
                    fill={
                      favorites.has(product.id)
                        ? 'currentColor'
                        : 'none'
                    }
                  />

                </button>

              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">

                <p className="text-xs text-foreground/60 uppercase tracking-wider">
                  Product
                </p>

                <h3 className="font-semibold text-foreground line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-green-600 font-medium">
  Stock Available: {product.quantity}
</p>

                {/* Price */}
                <div className="flex items-center gap-2">

                  <span className="text-lg font-bold text-primary">
                    ₹ {product.price}
                  </span>

                </div>

                {/* Add To Cart */}
                <Button
                  onClick={() =>
                    addToCart(product.id)
                  }
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-2"
                  size="sm"
                >

                  <ShoppingCart className="w-4 h-4" />

                  Add to Cart

                </Button>

              </div>

            </Card>

          ))}

        </div>

      </div>

    </section>
  )
}
