import Link from 'next/link'

import { Icon } from '@/components/Icon'

export function QuickLinks({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}

export function QuickLink({ title, description, href, icon }) {
  const isExternal = href.startsWith('http')
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative overflow-hidden rounded-xl p-6 flex items-center gap-4">
        <div>
          <Icon icon={icon} className="h-8 w-8" />
        </div>
        <div>
          <h2 className="font-display text-base text-slate-900 dark:text-white">
            <Link href={href}>
              <span className="absolute -inset-px rounded-xl" />
              {title}
              {isExternal && (
                <Icon icon='external' color='currentColor' className='inline w-3 ml-1 align-middle' />
              )}
            </Link>
          </h2>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
