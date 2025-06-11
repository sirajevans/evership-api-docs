import { GridPattern } from '@/components/GridPattern'

export function HeroPattern() {
  return (
    <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
      <div className="absolute top-0 left-1/2 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5515F1] via-[#6c31ff] to-[#09050a] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#5515F1]/30 dark:via-[#6c31ff]/30 dark:to-[#09050a]/30 dark:opacity-100">
        </div>
      </div>
    </div>
  )
}