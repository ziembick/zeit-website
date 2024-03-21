'use client'

import React, { useState } from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'

import classes from './index.module.scss'
import Image from 'next/image'
import MobileNav from '../MobileNav'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { NavItem } from './nav-item'

const NAV_ITEMS = [
  {
    label: 'LOOKBOOK',
    href: '/lookbook',
  },
  {
    label: 'INSIDE ZEIT',
    href: '/inside',
  },
  {
    label: 'ONDE ENCONTRAR',
    href: '/encontrar',
  },
  {
    label: 'FALE CONOSCO',
    href: '/contato',
  },
]

export default function HeaderComponent({ header }: { header: Header }) {
  const pathname = usePathname()

  return (
    <nav
      className={[
        classes.header,
        noHeaderFooterUrls.includes(pathname) && classes.hide && classes.sticky,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={`${classes.wrap} content-below-header`}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="Logo" width={170} height={50} />
        </Link>
        <nav className={classes.teste}>
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
        <HeaderNav header={header} />
        {/* <MobileNav header={header} /> */}
      </Gutter>
    </nav>
  )
}
