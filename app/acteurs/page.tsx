import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Code, Palette, Scale } from "lucide-react"

const acteurs = [
  {
    icon: Palette,
    nom: "Artistes Traditionnels",
    role: "Créateurs humains",
    description:
      "Peintres, illustrateurs, graphistes et photographes qui voient leur métier menacé par l'automatisation. Ils défendent la valeur du geste créatif, du savoir-faire technique acquis sur des années, et l'intentionnalité artistique.",
    position: "Majoritairement opposés",
    enjeux: [
      "Protection de leur gagne-pain",
      "Reconnaissance de leur expertise",
      "Défense du droit d'auteur",
      "Préservation de l'âme dans l'art",
    ],
    color: "text-destructive",
  },
  {
    icon: Code,
    nom: "Développeurs & Tech Giants",
    role: "Créateurs d'outils IA",
    description:
      "Entreprises comme OpenAI, Midjourney, Stability AI, et développeurs qui conçoivent les modèles génératifs. Ils promeuvent l'innovation technologique et la démocratisation de la création, tout en défendant leurs intérêts commerciaux.",
    position: "Favorables",
    enjeux: [
      "Innovation et recherche",
      "Modèles économiques viables",
      "Cadre légal permissif",
      "Adoption massive de leurs outils",
    ],
    color: "text-chart-4",
  },
  {
    icon: Users,
    nom: "Artistes Prompters",
    role: "Nouveaux créateurs",
    description:
      "Génération émergente qui utilise l'IA comme médium artistique principal. Ils se considèrent comme de véritables artistes, maîtrisant l'art du prompt et la curation des résultats, revendiquant une nouvelle forme de créativité.",
    position: "Favorables",
    enjeux: [
      "Légitimité artistique",
      "Droits sur leurs créations IA",
      "Accès aux outils génératifs",
      "Reconnaissance institutionnelle",
    ],
    color: "text-accent",
  },
  {
    icon: Scale,
    nom: "Législateurs & Régulateurs",
    role: "Arbitres du débat",
    description:
      "Gouvernements, institutions juridiques et organisations comme l'UE qui tentent d'encadrer l'IA générative. Ils doivent équilibrer innovation, protection des artistes, et intérêts économiques dans un contexte juridique en pleine évolution.",
    position: "Position d'arbitrage",
    enjeux: [
      "Définition du droit d'auteur IA",
      "Régulation de l'entraînement des modèles",
      "Protection des créateurs humains",
      "Compétitivité économique",
    ],
    color: "text-primary",
  },
]

export default function ActeursPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Les Protagonistes
          </Badge>
          <h1 className="mb-4 text-5xl font-bold">Les Acteurs de la Controverse</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed text-balance">
            Le débat sur l'IA dans l'art mobilise quatre groupes aux intérêts divergents. Chacun défend une vision
            distincte de l'avenir de la création artistique.
          </p>
        </div>

        <div className="grid gap-8">
          {acteurs.map((acteur) => {
            const Icon = acteur.icon
            return (
              <Card key={acteur.nom} className="p-8 hover:border-accent/50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-secondary/50 flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${acteur.color}`} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold mb-1">{acteur.nom}</h2>
                      <p className="text-sm text-muted-foreground">{acteur.role}</p>
                      <Badge variant="secondary" className="mt-2">
                        {acteur.position}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{acteur.description}</p>

                    <div>
                      <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Enjeux Principaux</h3>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {acteur.enjeux.map((enjeu) => (
                          <div key={enjeu} className="flex items-start gap-2">
                            <div className={`mt-1 h-1.5 w-1.5 rounded-full ${acteur.color.replace("text-", "bg-")}`} />
                            <span className="text-sm text-muted-foreground">{enjeu}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 p-8 bg-accent/5 border-accent/20">
          <h3 className="text-xl font-bold mb-4">Tensions et Alliances</h3>
          <p className="text-muted-foreground leading-relaxed">
            Ces quatre groupes entretiennent des relations complexes. Les artistes traditionnels s'opposent souvent aux
            développeurs et prompters, tandis que les législateurs tentent de médier entre innovation et protection.
            Certains artistes collaborent avec l'IA, brouillant les frontières. Les tech giants négocient avec les
            régulateurs pour préserver leur liberté d'innovation. Ce jeu d'acteurs façonne l'avenir de la création.
          </p>
        </Card>
      </div>
    </main>
  )
}
