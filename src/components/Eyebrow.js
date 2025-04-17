export const Eyebrow = ({ text }) => {
  return (
    <div>
      <span className="inline-block px-4 py-1.5 text-sm font-medium text-purple-700 bg-linear-to-b from-purple-200 to-purple-100/40 rounded-full -rotate-1 before:absolute before:inset-0 before:rounded-full before:border before:border-purple-900/10 shadow-[0_2px_theme(colors.white/0.25)_inset,0_1px_2px_theme(colors.purple.900/0.25)] text-shadow-2xs">
        {text}
      </span>
    </div>
  )
}
