import registry from './registry'

export default function EasterEggs() {
  return (
    <>
      {registry.map((Egg, i) => (
        <Egg key={i} />
      ))}
    </>
  )
}