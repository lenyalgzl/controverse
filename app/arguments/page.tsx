import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Sparkles } from "lucide-react"

const menaces = [
  {
    titre: "Remplacement des Artistes",
    resume: "L'IA menace directement les emplois créatifs",
    arguments: [
      "Les commandes d'illustrations diminuent drastiquement depuis l'arrivée de Midjourney et Stable Diffusion",
      "Les entreprises préfèrent générer des visuels instantanément plutôt que payer des graphistes",
      "Les débutants n'ont plus l'opportunité de se former via des commandes simples",
      "La dévalorisation du travail artistique s'accélère avec la facilité de production massive",
    ],
    impact: "Économique & Social",
  },
  {
    titre: "Violation du Droit d'Auteur",
    resume: "L'entraînement des IA utilise des œuvres sans consentement",
    arguments: [
      "Les modèles sont entraînés sur des millions d'œuvres protégées sans autorisation ni rémunération",
      "Les artistes voient leur style reproduit et commercialisé par des tiers",
      "Le cadre légal actuel ne protège pas efficacement contre cette exploitation",
      "Les recours en justice sont coûteux et lents face aux géants technologiques",
    ],
    impact: "Juridique & Éthique",
  },
  {
    titre: "Absence d'Âme Créative",
    resume: "L'IA ne crée pas, elle recombine mécaniquement",
    arguments: [
      "L'art véritable requiert intention, émotion, vécu et conscience que l'IA ne possède pas",
      "Les œuvres générées manquent de profondeur conceptuelle et de message authentique",
      "La créativité humaine implique prise de risque, vulnérabilité et subjectivité",
      "L'IA ne peut transcender ses données d'entraînement pour proposer une vision originale",
    ],
    impact: "Esthétique & Philosophique",
  },
  {
    titre: "Surcharge Visuelle & Uniformisation",
    resume: "L'IA produit une pollution esthétique",
    arguments: [
      "La facilité de génération crée une surproduction d'images de qualité médiocre",
      "Les œuvres IA se ressemblent, suivant des patterns reconnaissables et répétitifs",
      "L'attention du public est diluée dans un flux incessant de contenu généré",
      "La saturation visuelle dévalue l'ensemble de la production artistique",
    ],
    impact: "Culturel & Environnemental",
  },
]

const chances = [
  {
    titre: "Démocratisation de la Création",
    resume: "L'IA rend l'art accessible à tous",
    arguments: [
      "Toute personne peut désormais exprimer sa vision créative sans années de formation technique",
      "Les barrières économiques d'accès aux outils professionnels disparaissent",
      "Les handicaps physiques ne limitent plus la capacité créative",
      "De nouvelles voix et perspectives peuvent enrichir le paysage artistique",
    ],
    impact: "Social & Inclusif",
  },
  {
    titre: "Augmentation Créative",
    resume: "L'IA amplifie les capacités des artistes",
    arguments: [
      "Les artistes utilisent l'IA comme outil d'exploration et d'idéation rapide",
      "La collaboration homme-machine permet d'atteindre des résultats impossibles seul",
      "L'IA gère les tâches répétitives, libérant du temps pour la conceptualisation",
      "Les créateurs conservent le contrôle créatif final et la direction artistique",
    ],
    impact: "Technique & Créatif",
  },
  {
    titre: "Efficacité & Productivité",
    resume: "L'IA accélère considérablement les processus créatifs",
    arguments: [
      "La génération d'itérations et de variations devient quasi-instantanée",
      "Les délais de livraison se réduisent drastiquement pour les projets visuels",
      "Les coûts de production diminuent, rendant certains projets viables",
      "Les indépendants peuvent concurrencer les studios grâce à l'IA",
    ],
    impact: "Économique & Pratique",
  },
  {
    titre: "Émergence d'un Nouvel Art",
    resume: "L'IA crée un nouveau médium artistique légitime",
    arguments: [
      "L'art génératif rejoint la photographie et le cinéma comme forme artistique moderne",
      "Le prompt devient un nouveau langage créatif à part entière, nécessitant maîtrise",
      "Les artistes IA développent signature esthétique et démarche conceptuelle propres",
      "L'histoire de l'art montre que chaque nouvelle technologie finit par être acceptée",
    ],
    impact: "Esthétique & Historique",
  },
]

export default function ArgumentsPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Analyse Critique
          </Badge>
          <h1 className="mb-4 text-5xl font-bold">Arguments du Débat</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed text-balance">
            Une exploration équilibrée des arguments avancés par chaque camp. Huit thématiques structurent la
            controverse, divisées entre menaces et opportunités.
          </p>
        </div>

        <Tabs defaultValue="menaces" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger
              value="menaces"
              className="data-[state=active]:bg-destructive/10 data-[state=active]:text-destructive"
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Menaces
            </TabsTrigger>
            <TabsTrigger value="chances" className="data-[state=active]:bg-accent/10 data-[state=active]:text-accent">
              <Sparkles className="mr-2 h-4 w-4" />
              Chances
            </TabsTrigger>
          </TabsList>

          <TabsContent value="menaces" className="space-y-6">
            {menaces.map((argument, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-destructive">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-2xl font-bold">{argument.titre}</h2>
                    <Badge variant="destructive">{argument.impact}</Badge>
                  </div>
                  <p className="text-muted-foreground">{argument.resume}</p>
                </div>

                <div className="space-y-3">
                  {argument.arguments.map((arg, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-md bg-destructive/5">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0" />
                      <p className="text-sm leading-relaxed text-foreground/90">{arg}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="chances" className="space-y-6">
            {chances.map((argument, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-accent">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-2xl font-bold">{argument.titre}</h2>
                    <Badge className="bg-accent hover:bg-accent/90 text-accent-foreground">{argument.impact}</Badge>
                  </div>
                  <p className="text-muted-foreground">{argument.resume}</p>
                </div>

                <div className="space-y-3">
                  {argument.arguments.map((arg, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-md bg-accent/5">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <p className="text-sm leading-relaxed text-foreground/90">{arg}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <Card className="mt-12 p-8 bg-secondary/20">
          <h3 className="text-xl font-bold mb-4">Nécessité d'une Vision Nuancée</h3>
          <p className="text-muted-foreground leading-relaxed">
            Ces huit arguments révèlent la complexité du débat. Aucun camp ne détient la vérité absolue. La réalité se
            situe dans un équilibre subtil entre protection des créateurs et innovation technologique, entre
            préservation culturelle et démocratisation créative. Une régulation intelligente doit reconnaître
            simultanément les risques légitimes et les opportunités indéniables que représente l'IA générative pour
            l'art.
          </p>
        </Card>
      </div>
    </main>
  )
}
