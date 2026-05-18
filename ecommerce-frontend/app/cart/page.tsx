
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

interface CartItem {
  id: number
  productId: number
  quantity: number
}

interface Product {
  id: number
  name: string
  description: string
  price: number
}

export default function CartPage() {

  const [cart, setCart] =
    useState<CartItem[]>([])

  const [products, setProducts] =
    useState<Product[]>([])

  useEffect(() => {

    fetchCart()
    fetchProducts()

  }, [])

  const fetchCart = async () => {

    try {

      const token =
        localStorage.getItem('token')

      const response =
        await axios.get(

          'http://localhost:8080/api/cart',

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        )

      setCart(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  const fetchProducts = async () => {

    try {

      const response =
        await axios.get(
          'http://localhost:8080/api/products'
        )

      setProducts(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  const getProduct = (
    productId: number
  ) => {

    return products.find(
      (p) => p.id === productId
    )
  }

  const getTotal = () => {

    return cart.reduce((total, item) => {

      const product =
        getProduct(item.productId)

      if (!product) return total

      return total +
        product.price * item.quantity

    }, 0)
  }

  const placeOrder = async (
    productId: number,
    quantity: number
  ) => {

    try {

      const token =
        localStorage.getItem('token')

      await axios.post(

        'http://localhost:8080/api/orders',

        {
          productId,
          quantity
        },

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      )

      alert('Order Placed Successfully')

    } catch (error) {

      console.log(error)

      alert('Order Failed')
    }
  }

  return (

    <div className="min-h-screen bg-background p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          My Cart

        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => {

              const product =
                getProduct(item.productId)

              if (!product) return null

              return (

                <div
                  key={item.id}
                  className="border rounded-2xl p-6 shadow-sm flex justify-between items-center"
                >

                  <div className="space-y-2">

                    <h2 className="text-2xl font-semibold">

                      {product.name}

                    </h2>

                    <p className="text-muted-foreground">

                      {product.description}

                    </p>

                    <p>

                      Quantity:
                      <span className="font-semibold ml-2">

                        {item.quantity}

                      </span>

                    </p>

                    <p className="text-primary font-bold text-xl">

                      ₹ {product.price}

                    </p>

                    <p className="font-semibold">

                      Subtotal:
                      ₹ {
                        product.price *
                        item.quantity
                      }

                    </p>

                  </div>

                  <button
                    onClick={() =>
                      placeOrder(
                        item.productId,
                        item.quantity
                      )
                    }
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl"
                  >

                    Place Order

                  </button>

                </div>
              )
            })}

          </div>

          {/* Invoice */}
          <div className="border rounded-2xl p-8 h-fit shadow-md bg-card">

            <h2 className="text-3xl font-bold mb-6">

              Invoice

            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">

                <span>Items</span>

                <span>

                  {cart.length}

                </span>

              </div>

              <div className="flex justify-between">

                <span>Shipping</span>

                <span>

                  FREE

                </span>

              </div>

              <div className="border-t pt-4 flex justify-between text-2xl font-bold">

                <span>Total</span>

                <span>

                  ₹ {getTotal()}

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

