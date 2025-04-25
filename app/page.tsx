import Image from "next/image"
import { MapPin, Mail, Phone, Clock, Droplets, Wind, ThumbsUp } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/washlogo.png" alt="Washlândia Logo" width={80} height={80} className="mr-3" />
            <h1 className="text-2xl font-bold text-blue-800 hidden sm:block">Washlândia</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#servicos" className="text-blue-700 hover:text-blue-500 font-medium">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#vantagens" className="text-blue-700 hover:text-blue-500 font-medium">
                  Vantagens
                </a>
              </li>
              <li>
                <a href="#lojas" className="text-blue-700 hover:text-blue-500 font-medium">
                  Lojas
                </a>
              </li>
              <li>
                <a href="#contactos" className="text-blue-700 hover:text-blue-500 font-medium">
                  Contactos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Bem-vindo à Washlândia</h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">A sua lavandaria self-service de confiança</h2>
              <p className="text-lg text-gray-700 mb-8">
                Na Washlândia, oferecemos serviços de lavagem, secagem e tratamento de roupa com equipamentos modernos e
                eficientes. Economize tempo e dinheiro com a nossa solução completa para o tratamento da sua roupa.
              </p>
              <a
                href="#contactos"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Visite-nos Hoje
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/images/laundry-service.png"
                alt="Lavandaria Self-Service Washlândia"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
                priority
                query="modern self-service laundry with washing machines and dryers in a clean bright space"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Os Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Droplets className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 text-center mb-3">Lavagem</h3>
                <p className="text-gray-700 text-center">
                  Máquinas de lavar de última geração com diferentes capacidades para atender às suas necessidades.
                  Detergentes de alta qualidade disponíveis.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Wind className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 text-center mb-3">Secagem</h3>
                <p className="text-gray-700 text-center">
                  Secadores eficientes e rápidos que garantem que a sua roupa fique perfeitamente seca em pouco tempo,
                  poupando-lhe tempo e energia.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <ThumbsUp className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 text-center mb-3">Tratamento Especial</h3>
                <p className="text-gray-700 text-center">
                  Serviços adicionais para roupas delicadas, cobertores grandes e outros itens que requerem cuidados
                  especiais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="vantagens" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Porquê Escolher a Washlândia?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Economia de Tempo</h3>
                <p className="text-gray-700">
                  Com as nossas máquinas de alta capacidade, pode lavar e secar grandes quantidades de roupa em menos
                  tempo do que em casa.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Economia de Dinheiro</h3>
                <p className="text-gray-700">
                  Poupe na conta da água e da eletricidade. Os nossos equipamentos são energeticamente eficientes e
                  otimizados para consumir menos recursos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Equipamentos Modernos</h3>
                <p className="text-gray-700">
                  Utilizamos apenas máquinas de última geração, garantindo resultados superiores em cada lavagem e
                  secagem.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Ambiente Confortável</h3>
                <p className="text-gray-700">
                  Espaço limpo, bem iluminado e confortável para que possa esperar enquanto a sua roupa é tratada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">O Que Dizem Os Nossos Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-4">
                  "Desde que descobri a Washlândia, nunca mais tive problemas com a lavagem da roupa. Serviço rápido,
                  eficiente e com excelente qualidade!"
                </p>
                <p className="font-semibold text-blue-800">Maria Silva, Lisboa</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-4">
                  "As máquinas são modernas e fáceis de usar. O espaço é sempre limpo e o atendimento é excelente.
                  Recomendo a todos!"
                </p>
                <p className="font-semibold text-blue-800">João Santos, Porto</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-4">
                  "Consigo lavar e secar toda a roupa da família em menos de duas horas. Uma verdadeira poupança de
                  tempo e dinheiro!"
                </p>
                <p className="font-semibold text-blue-800">Ana Ferreira, Braga</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="lojas" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">As Nossas Lojas</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Sacavém</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Camarate</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Prior Velho</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Forte da Casa</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Torres Vedras</h3>
                  <p className="text-gray-700">Próximo da Expo Torres</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Boavista da Silveira</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Ponte de Rol</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">São Pedro da Cadeira</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Barril na Encarnação</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Nazaré</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Alcobaça</h3>
                  <p className="text-gray-700">Aberto todos os dias</p>
                  <p className="text-gray-700">07:00 - 22:00</p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Com <span className="font-bold text-blue-800">11 lojas</span> em funcionamento, estamos sempre perto
                  de si!
                </p>
                <div className="flex justify-center">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span className="font-semibold">{872}</span>
                    <span>likes</span>
                    <span className="mx-2">•</span>
                    <span className="font-semibold">{884}</span>
                    <span>seguidores</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contactos" className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contacte-nos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-semibold">E-mail:</p>
                    <a href="mailto:geral@washlandia.pt" className="hover:underline">
                      geral@washlandia.pt
                    </a>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <Phone className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-semibold">Telemóvel:</p>
                    <a href="tel:915245444" className="hover:underline">
                      915 245 444
                    </a>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-semibold">Morada:</p>
                    <p>Rua da Lavandaria, 123, Lisboa</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-semibold">Horário:</p>
                    <p>Segunda a Domingo: 07:00 - 22:00</p>
                  </div>
                </div>
              </div>
              <div>
                <form className="bg-white p-6 rounded-lg shadow-md text-gray-800">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Envie-nos uma Mensagem</h3>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="O seu e-mail"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="A sua mensagem"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 w-full"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/images/washlogo.png" alt="Washlândia Logo" width={60} height={60} className="mr-3" />
              <span className="text-xl font-bold">Washlândia</span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Washlândia. Todos os direitos reservados.</p>
              <p className="text-gray-400 text-sm mt-1">A sua lavandaria self-service de confiança</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
