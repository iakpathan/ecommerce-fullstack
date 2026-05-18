
'use client'

import { useState } from 'react'
import axios from 'axios'

export default function AdminPage() {

  const [name, setName] =
    useState('')

  const [description, setDescription] =
    useState('')

  const [price, setPrice] =
    useState('')

  const [quantity, setQuantity] =
    useState('')

  const addProduct = async () => {

    try {

      const token =
        localStorage.getItem('token')

      await axios.post(

        'http://localhost:8080/api/products',

        {
          name,
          description,
          price: Number(price),
          quantity: Number(quantity)
        },

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      )

      alert('Product Added Successfully')

      setName('')
      setDescription('')
      setPrice('')
      setQuantity('')

    } catch (error) {

      console.log(error)

      alert('Failed To Add Product')
    }
  }

  return (

    <div className="min-h-screen bg-background p-10">

      <div className="max-w-2xl mx-auto border rounded-2xl p-10 shadow-lg">

        <h1 className="text-4xl font-bold mb-8">

          Admin Dashboard

        </h1>

        <div className="space-y-6">

          {/* Name */}
          <div>

            <label className="block mb-2 font-medium">

              Product Name

            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border p-3 rounded-lg"
              placeholder="MacBook Pro"
            />

          </div>

          {/* Description */}
          <div>

            <label className="block mb-2 font-medium">

              Description

            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full border p-3 rounded-lg"
              placeholder="Apple Laptop"
            />

          </div>

          {/* Price */}
          <div>

            <label className="block mb-2 font-medium">

              Price

            </label>

            <input
              type="number"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
              className="w-full border p-3 rounded-lg"
              placeholder="199999"
            />

          </div>

          {/* Quantity */}
          <div>

            <label className="block mb-2 font-medium">

              Quantity

            </label>

            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
              className="w-full border p-3 rounded-lg"
              placeholder="5"
            />

          </div>

          {/* Submit */}
          <button
            onClick={addProduct}
            className="w-full bg-primary text-white py-3 rounded-xl hover:opacity-90"
          >

            Add Product

          </button>

        </div>

      </div>

    </div>
  )
}
