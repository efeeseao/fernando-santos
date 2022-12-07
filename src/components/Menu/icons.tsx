export const MenuIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className="h-5 w-5 absolute text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const CrossIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className="h-5 w-5 absolute text-neutral-700 dark:text-neutral-300 hover:text-neutral-500 hover:dark:text-neutral-500"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}
