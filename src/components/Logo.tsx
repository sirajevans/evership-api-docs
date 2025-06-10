import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image 
        src="/evership-docs-icon.png"
        alt="Evership"
        width={75}
        height={20}
        priority
        className="h-5 w-auto dark:invert"
      />
    </div>
  )
}
