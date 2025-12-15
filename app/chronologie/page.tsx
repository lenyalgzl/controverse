import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const evenements = [
  {
    annee: "42 000 av. J.-C.",
    titre: "Premières œuvres d'art",
    description:
      "Apparition des premières peintures rupestres (grottes de Nerja/Lascaux), marquant le début de l'art par la main de l'homme.",
    type: "Origines",
  },
  {
    annee: "1950",
    titre: "Les Bases Théoriques de l'IA",
    description:
      "Alan Turing pose la question \"Les machines peuvent-elles penser ?\" et le premier modèle mathématique de neurone artificiel est conçu.",
    type: "Fondation",
  },
  {
    annee: "1973",
    titre: "Le Premier Peintre Robot",
    description:
      "Harold Cohen développe AARON, un programme capable de dessiner de manière autonome des formes originales sur du papier.",
    type: "Pionnier",
  },
  {
    annee: "2014",
    titre: "L'Invention des GANs",
    description:
      "Ian Goodfellow crée les \"Réseaux Antagonistes Génératifs\", permettant aux IA de créer des images ultra-réalistes en s'autocorrigeant.",
    type: "Innovation Majeure",
  },
  {
    annee: "2018",
    titre: "Première Enchère Historique",
    description:
      "Le portrait \"Edmond de Belamy\", généré par le collectif Obvious, est vendu 432 500 $ chez Christie's.",
    type: "Événement Symbolique",
  },
  {
    annee: "2021",
    titre: "DALL-E et le \"Text-to-Image\"",
    description:
      "OpenAI lance DALL-E, capable de générer des images complexes à partir d'une simple description textuelle.",
    type: "Innovation Majeure",
  },
  {
    annee: "2022",
    titre: "Victoire de Midjourney",
    description:
      "L'œuvre \"Théâtre d'Opéra Spatial\", générée par IA, remporte la première place à la foire d'État du Colorado, devançant les artistes humains.",
    type: "Controverse",
  },
  {
    annee: "2025",
    titre: "Le Premier N°1 Sans Humain",
    description:
      "Le titre country \"Walk My Walk\" du groupe virtuel Breaking Rust (généré à 100 % par IA) atteint le sommet du Billboard Country Digital Sales. Pour la première fois, le public achète massivement une musique dont il sait qu'elle n'a aucune origine humaine, validant l'IA comme une \"star\" commerciale légitime.",
    type: "Rupture",
  },
]

const typeColors: Record<string, string> = {
  Origines: "bg-chart-1",
  Fondation: "bg-chart-3",
  Pionnier: "bg-chart-4",
  "Innovation Majeure": "bg-accent",
  "Événement Symbolique": "bg-primary",
  Controverse: "bg-destructive",
  Rupture: "bg-destructive",
}

export default function ChronologiePage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Histoire
          </Badge>
          <h1 className="mb-4 text-5xl font-bold">Chronologie</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance">
            Des premières expérimentations algorithmiques des années 60 à l'explosion contemporaine de l'IA générative :
            six décennies d'évolution technique et culturelle.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {evenements.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-[-4px] md:left-1/2 md:ml-[-4px] w-2 h-2 rounded-full ${typeColors[event.type]} z-10`}
                />

                <div className={`md:grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className={`${index % 2 === 0 ? "" : "md:text-right"}`}>
                    <div className={`inline-block ${index % 2 === 0 ? "" : "md:ml-auto"}`}>
                      <Badge variant="outline" className="mb-2">
                        {event.annee}
                      </Badge>
                      <Badge className={`ml-2 ${typeColors[event.type]} text-white`}>{event.type}</Badge>
                    </div>
                  </div>

                  <Card className={`p-6 ml-6 md:ml-0 ${index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"}`}>
                    <h3 className="text-xl font-bold mb-2">{event.titre}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="mt-16 p-8 bg-secondary/20">
          <h3 className="text-xl font-bold mb-4">Une Accélération Exponentielle</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La chronologie révèle une accélération fulgurante. Les 50 premières années (1960-2010) ont posé les
            fondations théoriques et techniques. Les 5 dernières années (2018-2023) ont vu l'explosion commerciale et
            l'accès grand public, déclenchant la controverse actuelle.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cette temporalité compressée explique le choc culturel : le monde de l'art n'a pas eu le temps de s'adapter
            progressivement à une technologie qui, en quelques mois, a bouleversé des siècles de pratiques créatives
            établies.
          </p>
        </Card>
      </div>
    </main>
  )
}
