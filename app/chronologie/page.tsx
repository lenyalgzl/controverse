import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const evenements = [
  {
    annee: "1960-1970",
    titre: "Naissance de l'Art Informatique",
    description:
      "Les premiers artistes (Frieder Nake, Georg Nees, Vera Molnár) utilisent des ordinateurs pour créer des œuvres génératives algorithmiques. L'art computationnel émerge comme pratique expérimentale.",
    type: "Fondation",
  },
  {
    annee: "1986",
    titre: "Harold Cohen & AARON",
    description:
      "Le programme AARON créé par Harold Cohen produit des peintures autonomes, posant pour la première fois la question de l'auteur en art généré par machine.",
    type: "Pionnier",
  },
  {
    annee: "2006",
    titre: "Deep Learning Renaissance",
    description:
      "Geoffrey Hinton et son équipe relancent les réseaux de neurones profonds, ouvrant la voie aux avancées modernes de l'IA.",
    type: "Technique",
  },
  {
    annee: "2014",
    titre: "Invention des GANs",
    description:
      "Ian Goodfellow présente les Generative Adversarial Networks (GANs), révolutionnant la génération d'images par IA avec un réalisme inédit.",
    type: "Innovation Majeure",
  },
  {
    annee: "2015",
    titre: "DeepDream de Google",
    description:
      "Google Research publie DeepDream, créant un engouement public pour les images psychédéliques générées par IA et popularisant le concept.",
    type: "Popularisation",
  },
  {
    annee: "2018",
    titre: "Portrait d'Edmond de Belamy",
    description:
      "Le collectif Obvious vend chez Christie's une œuvre générée par IA pour 432 500$, légitimant l'art IA sur le marché traditionnel et créant la controverse.",
    type: "Événement Symbolique",
  },
  {
    annee: "2021",
    titre: "DALL-E et CLIP d'OpenAI",
    description:
      "OpenAI présente DALL-E, permettant de générer des images à partir de descriptions textuelles. Un tournant dans l'accessibilité de l'art génératif.",
    type: "Innovation Majeure",
  },
  {
    annee: "2022",
    titre: "Explosion Grand Public",
    description:
      "Lancement de Midjourney, Stable Diffusion (open-source), et DALL-E 2. L'art IA devient accessible au grand public. Les artistes lancent des campagnes de protestation.",
    type: "Rupture",
  },
  {
    annee: "2022",
    titre: "Victoire aux Colorado State Fair",
    description:
      "Jason Allen remporte un concours d'art avec une œuvre générée par Midjourney, déclenchant un débat intense sur la légitimité de l'art IA dans les compétitions.",
    type: "Controverse",
  },
  {
    annee: "2023",
    titre: "Procès Juridiques Massifs",
    description:
      "Des artistes poursuivent en justice Stability AI, Midjourney et DeviantArt pour violation de droits d'auteur. Les législateurs intensifient leurs réflexions sur la régulation.",
    type: "Juridique",
  },
  {
    annee: "2023",
    titre: "AI Act Européen",
    description:
      "L'Union Européenne adopte l'AI Act, premier cadre réglementaire majeur encadrant l'intelligence artificielle, incluant des dispositions sur les droits d'auteur.",
    type: "Régulation",
  },
  {
    annee: "2024",
    titre: "Modèles Vidéo (Sora, Runway)",
    description:
      "L'IA générative s'étend à la vidéo avec des outils comme Sora (OpenAI) et Runway Gen-2, élargissant encore le champ de la controverse au cinéma et à l'animation.",
    type: "Expansion",
  },
  {
    annee: "2024-2025",
    titre: "Débat Actuel",
    description:
      "Le débat s'intensifie entre régulation stricte et innovation libre. Recherche de modèles éthiques d'entraînement, rémunération des artistes, et définition du statut juridique des œuvres IA.",
    type: "En Cours",
  },
]

const typeColors: Record<string, string> = {
  Fondation: "bg-chart-3",
  Pionnier: "bg-chart-4",
  Technique: "bg-chart-2",
  "Innovation Majeure": "bg-accent",
  Popularisation: "bg-chart-5",
  "Événement Symbolique": "bg-primary",
  Rupture: "bg-destructive",
  Controverse: "bg-destructive",
  Juridique: "bg-chart-4",
  Régulation: "bg-chart-2",
  Expansion: "bg-accent",
  "En Cours": "bg-accent",
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
