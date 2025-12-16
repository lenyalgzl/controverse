import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import DetailsPdf from "@/components/details-pdf"

export default function ArticlesPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Analyses Éditoriales
          </Badge>
          <h1 className="mb-4 text-4xl font-bold">Analyse de la controverse : L’IA dans le domaine artistique, danger ou opportunité nouvelle ?</h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground leading-relaxed">
            Par Leny ALGUAZIL, Logan BOIX, Norman FRANCOIS, Mathieu MARTY et Zainab OTMANI
          </p>
        </div>

        <Card className="p-8 mb-8">
          <div className="prose prose-invert max-w-none space-y-4 text-foreground/90">
            <h2 className="text-2xl font-bold">Introduction : Un débat clivant au coeur de la création</h2>
            <p>
              La question de l’intelligence artificielle (IA) dans l’art oppose deux visions radicales :
              outil d’innovation créative pour les uns, menace existentielle pour les autres. Cette
              controverse, récemment exacerbée par la démocratisation d’outils génératifs comme Midjourney,
              divise jusqu’au corps artistique lui-même.
            </p>

            <h2 className="text-2xl font-bold">Cartographie des acteurs : des positions irréconciliables ?</h2>
            <h3 className="text-lg font-semibold">Les “pour” : l’IA, levier de démocratisation et d’innovation</h3>
            <p>
              Les entreprises technologiques (OpenAI, Stability AI) et une partie des artistes “augmentés” défendent
              l’IA comme un outil d’exploration de nouveaux langages visuels ou sonores. Pour eux, l’IA élargit
              l’accès à la création et permet de repousser les limites de l’imaginaire.
            </p>

            <h3 className="text-lg font-semibold">Les “contre” : la défense de l’humain et du droit d’auteur</h3>
            <p>
              Une majorité d’artistes traditionnels, regroupés en collectifs ou syndicats (ex: Fabrication Humaine),
              dénoncent un vol de leurs oeuvres utilisées sans consentement pour entraîner les modèles. Ils craignent
              une dévalorisation économique de leur métier et une uniformisation des productions.
            </p>

            <h3 className="text-lg font-semibold">Les “neutres” : entre observation et régulation</h3>
            <p>
              Les institutions culturelles (musées, galeries) et les États adoptent des positions souvent ambiguës,
              partagées entre l’attrait de l’innovation et la nécessité de protéger les créateurs. L'Union européenne,
              via l'AI Act, tente de poser un cadre juridique encore en construction.
            </p>
          </div>
        </Card>

        <Card className="p-8 mb-8">
          <div className="prose prose-invert max-w-none space-y-4 text-foreground/90">
            <h2 className="text-2xl font-bold">Arguments clés : entre droit et éthique</h2>

            <h3 className="text-lg font-semibold">Arguments juridiques et économiques</h3>
            <p>
              Le point de controverse principal réside dans l’utilisation non autorisée d'oeuvres protégées pour
              l’entraînement des modèles. Sur le plan économique, l’automatisation de certaines tâches créatives
              menace des revenus déjà précaires, tandis que les géants de la tech capitalisent sur ces nouveaux marchés.
            </p>

            <h3 className="text-lg font-semibold">Arguments philosophiques et esthétiques</h3>
            <p>
              La controverse interroge la définition même de l’art : une oeuvre sans intention humaine peut-elle être
              considérée comme artistique ? Pour les opposants, l’IA ne fait que recycler des styles existants sans
              émotion ni expérience vécue. Pour ses défenseurs, elle ouvre au contraire de nouveaux régimes de sens,
              hybridant culture et algorithmes.
            </p>

            <h3 className="text-lg font-semibold">Arguments sociétaux et environnementaux</h3>
            <p>
              Au-delà des questions artistiques, cette controverse préfigure les débats sur l’automatisation des métiers
              intellectuels. Elle soulève également la question, souvent occultée, de l’impact environnemental de l’IA,
              gourmande en énergie et en ressources.
            </p>
          </div>
        </Card>

        <Card className="p-8 mb-8">
          <div className="prose prose-invert max-w-none space-y-4 text-foreground/90">
            <h2 className="text-2xl font-bold">Conclusion : un débat emblématique de notre époque</h2>
            <p>
              La controverse de l’IA dans l’art dépasse le seul domaine esthétique. Elle cristallise des tensions plus larges
              entre innovation technologique et protection des communs, entre intérêts économiques privés et préservation
              des biens culturels. Sa résolution – ou sa perpétuation – dépendra largement de la capacité des législateurs
              à imposer un cadre équitable, reconnaissant à la fois le potentiel créatif de l’IA et les droits indispensables
              des créateurs humains.
            </p>

            <h3 className="text-sm font-semibold">Remarque sur l’utilisation de l’IA</h3>
            <p className="text-sm text-muted-foreground">
              Cet article a été rédigé par les auteurs, avec une vérification des faits et des sources. Une IA a été utilisée
              en phase de relecture pour suggérer des améliorations stylistiques et vérifier la cohérence structurelle du texte.
            </p>

            <div className="mt-4">
              <DetailsPdf pdfUrl="/pdf/articleAmue.pdf" />
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
