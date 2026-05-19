'use client'

import { useScroll, useTransform } from 'framer-motion'

export function useParallax(inputRange: [number, number], outputRange: [number, number]) {
  const { scrollY } = useScroll()
  return useTransform(scrollY, inputRange, outputRange)
}