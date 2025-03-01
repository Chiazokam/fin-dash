import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getExpDate = (date: Date) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB')
   const dateArray = formattedDate.split('/')
   return [dateArray[1], dateArray[2].substring(dateArray[2].length - 2)].join('/')
}

export const  maskCardNumberDigits = (cardNumber: string) => {
  const firstFour = cardNumber.slice(0, 4);
  const lastFour = cardNumber.slice(-4);

  return `${firstFour}  ${"*".repeat(4)} ${"*".repeat(4)} ${lastFour}`;
}

export const getDateText = (date: Date) => {
  return new Date(date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })
}