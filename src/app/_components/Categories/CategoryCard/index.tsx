import React from 'react'

import classes from './index.module.scss'
import Link from 'next/link'
import { Category } from '../../../../payload/payload-types'

type CategoryCardProps = {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href="/products" className={classes.card}>
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}
