
'use client'

import { useState } from 'react'
import axios from 'axios'

export default function LoginPage() {

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const handleLogin = async () => {

    try {

      const response = await axios.post(

        'http://localhost:8080/api/auth/login',

        {
          email,
          password
        }
      )

      localStorage.setItem(
        'token',
        response.data
      )

      alert('Login Successful')

      window.location.href = '/'

    } catch (error) {

      console.log(error)

      alert('Invalid Credentials')
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-background">

      <div className="w-full max-w-md p-8 border rounded-xl shadow-lg space-y-6 bg-card">

        <h1 className="text-3xl font-bold text-center">

          Login

        </h1>

        {/* Email */}
        <div className="space-y-2">

          <label className="text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

        </div>

        {/* Password */}
        <div className="space-y-2">

          <label className="text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-3 rounded-lg"
          />

        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90"
        >

          Login

        </button>

      </div>

    </div>
  )
}

