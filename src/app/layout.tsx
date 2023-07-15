'use client'
import './globals.css'
import React from 'react'
import { AppProps } from "next/app";
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react"
import TextareaAutosize from 'react-textarea-autosize'



const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ja">
        <body className='w-screen h-screen'>
          <ChakraProvider resetCSS={false}>
            {children}
          </ChakraProvider>
        </body>
      </html>
  )
}
