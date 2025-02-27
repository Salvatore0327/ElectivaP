'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

// Definimos los enlaces del sidebar
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <nav className="flex flex-col gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md px-4 text-gray-600 transition hover:bg-gray-100',
              {
                'bg-blue-100 text-blue-700 font-semibold': pathname === link.href, // Si está activo, cambia el estilo
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
