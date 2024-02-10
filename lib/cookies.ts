"use client"

import { useCookies } from "next-client-cookies"

export function getCookie(key: string) {
  const cookies = useCookies()

  const cookie = cookies.get(key)

  return cookie ? JSON.parse(cookie) : undefined
}
