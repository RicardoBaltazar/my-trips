// Escolher se o módulo vai ser carregado no SSR ou no browser
// Melhorando a performance ou conseguindo executar módulos que são carregados só no browser
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return <Map />
}
