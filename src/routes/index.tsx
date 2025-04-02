import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <article className="p-2">
      <header>
        <h2>A Few Simple Steps!</h2>
      </header>
      <p>To get started, follow these steps:</p>
    </article>
  )
}