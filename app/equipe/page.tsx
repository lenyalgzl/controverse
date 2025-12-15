import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Lightbulb } from "lucide-react"

const equipe = [
  {
    nom: "Sarah Martin",
    role: "Chercheuse Principale & Rédaction",
    motivation:
      "Passionnée par l'intersection entre technologie et culture, j'ai initié ce projet pour dépasser les discours polarisés et offrir une analyse académique rigoureuse de cette controverse qui façonne l'avenir de la création.",
    contributions: ["Recherche bibliographique", "Rédaction des articles", "Coordination générale"],
  },
  {
    nom: "Thomas Dubois",
    role: "Analyse Juridique",
    motivation:
      "En tant que juriste spécialisé en propriété intellectuelle, je suis fasciné par le défi que représente l'adaptation du droit à l'ère de l'IA. Ce projet me permet d'explorer les zones grises légales de manière pédagogique.",
    contributions: ["Veille jurisprudentielle", "Analyse du cadre légal", "Article sur les enjeux juridiques"],
  },
  {
    nom: "Léa Chen",
    role: "Perspective Artistique",
    motivation:
      "Illustratrice professionnelle confrontée quotidiennement aux impacts de l'IA sur mon métier, je voulais contribuer à une réflexion équilibrée, documentant à la fois les menaces réelles et les opportunités créatives potentielles.",
    contributions: ["Témoignages d'artistes", "Analyse des enjeux esthétiques", "Section Acteurs"],
  },
  {
    nom: "Marc Lefebvre",
    role: "Expertise Technique",
    motivation:
      "Ingénieur en machine learning, je travaille sur des modèles génératifs. Je souhaitais apporter une compréhension technique accessible au public, démystifiant le fonctionnement de l'IA sans jargon ésotérique.",
    contributions: ["Explication des technologies", "Chronologie technique", "Vulgarisation scientifique"],
  },
  {
    nom: "Emma Rousseau",
    role: "Design & Architecture Web",
    motivation:
      "Designer UX/UI investie dans la transmission de connaissances complexes, j'ai conçu l'architecture de ce site pour favoriser une navigation intuitive et une compréhension progressive de cette controverse multidimensionnelle.",
    contributions: ["Design du site", "Architecture de l'information", "Carte mentale visuelle"],
  },
]

export default function EquipePage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            <Users className="mr-2 h-3 w-3" />
            Les Contributeurs
          </Badge>
          <h1 className="mb-4 text-5xl font-bold">L'Équipe</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance">
            Une équipe pluridisciplinaire réunissant chercheurs, juristes, artistes, ingénieurs et designers pour offrir
            une perspective holistique sur la controverse de l'IA dans l'art.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {equipe.map((membre) => (
            <Card key={membre.nom} className="p-6 hover:border-accent/50 transition-colors">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-1">{membre.nom}</h2>
                <Badge variant="secondary" className="text-xs">
                  {membre.role}
                </Badge>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4 text-accent" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide">Motivation</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{membre.motivation}"</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">Contributions</h3>
                <ul className="space-y-1">
                  {membre.contributions.map((contribution) => (
                    <li key={contribution} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-foreground/80">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-accent/5 border-accent/20">
          <h3 className="text-xl font-bold mb-4">Notre Démarche Collective</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ce projet est né d'un constat partagé : le débat sur l'IA dans l'art se polarise entre technophiles
            enthousiastes et artistes alarmistes, sans espace pour une réflexion nuancée. Notre équipe
            multidisciplinaire s'est réunie pour combler ce vide.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Chaque membre apporte son expertise spécifique, mais tous partagent un engagement : présenter les faits
            objectivement, reconnaître la légitimité de chaque position, et favoriser un dialogue constructif plutôt
            qu'un affrontement stérile.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nous espérons que ce site contribuera à élever le niveau du débat public, en fournissant une base factuelle
            solide pour une controverse qui déterminera l'avenir de la création à l'ère numérique.
          </p>
        </Card>

        <Card className="mt-6 p-6 bg-secondary/20">
          <h3 className="text-lg font-bold mb-3">Contact & Contributions</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ce site est un projet vivant qui évoluera avec les développements de la controverse. Si vous souhaitez
            proposer des sources complémentaires, signaler des inexactitudes, ou contribuer à l'enrichissement du
            contenu, n'hésitez pas à nous contacter. Nous valorisons particulièrement les témoignages d'artistes et de
            professionnels directement concernés par ces enjeux.
          </p>
        </Card>
      </div>
    </main>
  )
}
