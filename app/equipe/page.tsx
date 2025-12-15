import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

const equipe = [
  {
    nom: "Lény Alguazil",
  },
  {
    nom: "Logan Boix",
  },
  {
    nom: "Norman François",
  },
  {
    nom: "Mathieu Marty",
  },
  {
    nom: "Zainab Otmani",
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
            Cinq étudiants de 3ème année du département DaMS de Polytech Montpellier ayant collaboré sur ce projet dans le cadre du cours de Controverse Numérique.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {equipe.map((membre) => (
            <Card key={membre.nom} className="p-6 hover:border-accent/50 transition-colors">
              <div>
                <h2 className="text-2xl font-bold">{membre.nom}</h2>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-accent/5 border-accent/20">
          <h3 className="text-xl font-bold mb-4">Notre Démarche</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ce projet est né d'un constat partagé : le débat sur l'IA dans l'art se polarise entre technophiles
            enthousiastes et artistes alarmistes, sans espace pour une réflexion nuancée. Notre équipe
            s'est réunie pour combler ce vide.
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
          <h3 className="text-lg font-bold mb-3">Clause de non responsabilité</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Le site web suivant est un exercice réalisé par des élèves de 3ème année de l'école Polytech Montpellier dans le cadre du cours d'introduction au système d'information du département IG.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Ces sites sont le résultat de travail d'étudiants et sont mis en ligne pour des raisons pédagogiques et didactiques; une fois en ligne, ils ne sont plus mis à jour. Vos réactions et commentaires sont très bienvenus.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pour signaler une erreur, réagir à un contenu ou demander une modification, merci d'écrire aux élèves et à la responsable de l'enseignement (<a href="mailto:isabelle.bourdon@umontpellier.fr" className="text-accent hover:underline">isabelle.bourdon@umontpellier.fr</a>). Polytech Montpellier décline toute responsabilité pour les erreurs et les imprécisions que peuvent contenir ces sites.
          </p>
        </Card>
      </div>
    </main>
  )
}
