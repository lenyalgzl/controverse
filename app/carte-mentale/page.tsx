"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, TrendingUp, Code, Palette } from "lucide-react"

const dimensions = [
  {
    icon: Scale,
    titre: "Éthique",
    color: "text-accent border-accent bg-accent/10",
    concepts: [
      "Consentement des artistes",
      "Intentionnalité créative",
      "Authenticité vs. Simulation",
      "Transparence des datasets",
      "Responsabilité algorithmique",
    ],
    liens: ["Juridique: cadre légal du consentement", "Esthétique: valeur de l'authenticité"],
  },
  {
    icon: TrendingUp,
    titre: "Économie",
    color: "text-chart-2 border-chart-2 bg-chart-2/10",
    concepts: [
      "Remplacement des emplois créatifs",
      "Dévalorisation du travail artistique",
      "Nouveaux modèles économiques",
      "Rémunération des artistes d'origine",
      "Accessibilité démocratique",
    ],
    liens: ["Technique: efficacité des outils", "Éthique: justice distributive"],
  },
  {
    icon: Code,
    titre: "Technique",
    color: "text-chart-4 border-chart-4 bg-chart-4/10",
    concepts: [
      "Réseaux de neurones (GANs, Diffusion)",
      "Qualité et réalisme des outputs",
      "Prompt engineering comme compétence",
      "Open-source vs. Propriétaire",
      "Évolution rapide des capacités",
    ],
    liens: ["Économie: disruption des marchés", "Esthétique: nouvelles possibilités créatives"],
  },
  {
    icon: Palette,
    titre: "Esthétique",
    color: "text-destructive border-destructive bg-destructive/10",
    concepts: [
      "Définition de l'art et de la créativité",
      "Signature stylistique humaine vs. IA",
      "Émergence de nouvelles formes esthétiques",
      "Uniformisation vs. Diversité",
      "Légitimité institutionnelle",
    ],
    liens: ["Éthique: âme créative", "Technique: potentiel génératif"],
  },
]

export default function CarteMentalePage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Cartographie Conceptuelle
          </Badge>
          <h1 className="mb-4 text-5xl font-bold">Carte Mentale</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed text-balance">
            Le débat sur l'IA dans l'art ne peut se réduire à une dimension unique. Quatre sphères interconnectées
            structurent la controverse : éthique, économie, technique et esthétique.
          </p>
        </div>

        {/* Central concept */}
        <div className="mb-16 flex justify-center">
          <Card className="p-8 text-center border-2 border-accent max-w-md">
            <h2 className="text-3xl font-bold mb-2">IA & Art</h2>
            <p className="text-muted-foreground text-sm">Controverse centrale : Menace ou Chance ?</p>
          </Card>
        </div>

        {/* Four dimensions */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {dimensions.map((dimension) => {
            const Icon = dimension.icon
            return (
              <Card key={dimension.titre} className={`p-6 border-2 ${dimension.color}`}>
                <div className="mb-4 flex items-center gap-3">
                  <Icon className={`h-6 w-6 ${dimension.color.split(" ")[0]}`} />
                  <h3 className="text-2xl font-bold">{dimension.titre}</h3>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-muted-foreground">
                    Concepts Clés
                  </h4>
                  <ul className="space-y-2">
                    {dimension.concepts.map((concept) => (
                      <li key={concept} className="flex items-start gap-2">
                        <div
                          className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${dimension.color.split(" ")[0].replace("text-", "bg-")}`}
                        />
                        <span className="text-sm text-foreground/90">{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 uppercase tracking-wide text-muted-foreground">
                    Liens Interdimensionnels
                  </h4>
                  <div className="space-y-1">
                    {dimension.liens.map((lien) => (
                      <p key={lien} className="text-xs text-muted-foreground italic">
                        → {lien}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Interconnections */}
        <Card className="p-8 bg-secondary/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Interconnexions du Système</h3>

          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div className="p-4 bg-background/50 rounded-md">
              <strong className="text-foreground">Éthique ↔ Juridique ↔ Économie</strong>
              <p className="mt-2">
                Les questions éthiques (consentement) déterminent les cadres juridiques (droit d'auteur), qui
                influencent les modèles économiques (rémunération collective).
              </p>
            </div>

            <div className="p-4 bg-background/50 rounded-md">
              <strong className="text-foreground">Technique ↔ Esthétique ↔ Éthique</strong>
              <p className="mt-2">
                Les avancées techniques (réalisme) posent des questions esthétiques (qu'est-ce que l'art ?) et éthiques
                (l'intention créative est-elle nécessaire ?).
              </p>
            </div>

            <div className="p-4 bg-background/50 rounded-md">
              <strong className="text-foreground">Économie ↔ Technique ↔ Esthétique</strong>
              <p className="mt-2">
                L'efficacité technique (génération rapide) bouleverse l'économie créative (dévalorisation) et influence
                l'esthétique (prolifération vs. rareté).
              </p>
            </div>

            <div className="p-4 bg-background/50 rounded-md">
              <strong className="text-foreground">Juridique ↔ Innovation ↔ Marché</strong>
              <p className="mt-2">
                Le cadre légal (permissif ou restrictif) détermine la viabilité de l'innovation IA et structure les
                dynamiques de marché entre entreprises tech et créateurs indépendants.
              </p>
            </div>
          </div>
        </Card>

        <Card className="mt-8 p-8 bg-accent/5 border-accent/20">
          <h3 className="text-xl font-bold mb-4">Pensée Systémique Nécessaire</h3>
          <p className="text-muted-foreground leading-relaxed">
            Comprendre la controverse exige une approche systémique. Chaque dimension influence les autres dans un
            réseau complexe de causalités. Une solution purement technique ignorant les enjeux éthiques échouera. Une
            régulation juridique négligeant la réalité économique sera inefficace. Seule une vision intégrative,
            reconnaissant les interdépendances entre éthique, économie, technique et esthétique, peut aboutir à un
            consensus durable.
          </p>
        </Card>
      </div>
    </main>
  )
}
