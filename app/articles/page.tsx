import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink } from "lucide-react"

export default function ArticlesPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Analyses Éditoriales
          </Badge>
          <h1 className="mb-4 text-5xl font-bold">Articles</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance">
            Deux essais journalistiques originaux explorant les dimensions éthiques et juridiques de la controverse,
            étayés par des sources académiques et institutionnelles.
          </p>
        </div>

        <div className="space-y-12">
          {/* Article 1 */}
          <article>
            <Card className="p-8 border-l-4 border-l-accent">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <Badge className="bg-accent hover:bg-accent/90 text-accent-foreground">Éthique</Badge>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-balance">
                  L'IA Générative et l'Éthique de la Création : Peut-on voler un style ?
                </h2>
                <p className="text-sm text-muted-foreground">Analyse du cadre éthique de l'art IA</p>
              </div>

              <div className="prose prose-invert max-w-none space-y-4 text-foreground/90">
                <p className="text-base leading-relaxed">
                  Le cœur éthique de la controverse réside dans une question fondamentale : l'entraînement d'un modèle
                  d'IA sur des millions d'œuvres protégées, sans consentement ni rémunération, constitue-t-il un vol
                  créatif ?
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Le Dilemme du Dataset</h3>
                <p className="text-base leading-relaxed">
                  Les modèles comme Stable Diffusion utilisent LAION-5B, un dataset contenant 5 milliards d'images
                  scrapées sur Internet, incluant des œuvres d'artistes vivants identifiables. Selon une étude de
                  l'Université de Stanford (2023), les artistes peuvent détecter leur style reproduit par l'IA sans
                  qu'ils n'aient jamais autorisé l'utilisation de leurs œuvres pour l'entraînement. Karla Ortiz, artiste
                  plaignante dans le procès contre Stability AI, témoigne : "Ils ont pris 20 ans de mon travail sans me
                  demander".
                </p>

                <p className="text-base leading-relaxed">
                  Les entreprises d'IA invoquent le "fair use" américain, arguant que l'apprentissage machine constitue
                  une transformation substantielle. Mais cette défense juridique élude la question éthique : est-il
                  moralement acceptable d'exploiter le travail d'autrui sans reconnaissance ni partage de valeur, même
                  si c'est techniquement légal ?
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">L'Intentionnalité Créative en Question</h3>
                <p className="text-base leading-relaxed">
                  Au-delà du droit d'auteur, se pose la question de l'authenticité. L'art, selon les philosophes de
                  l'esthétique comme Denis Dutton, requiert une intentionnalité créative humaine. L'IA, dépourvue de
                  conscience et d'expérience vécue, ne peut avoir d'intention artistique véritable. Elle recombine des
                  patterns statistiques sans compréhension de leur signification culturelle ou émotionnelle.
                </p>

                <p className="text-base leading-relaxed">
                  Cependant, des artistes-prompters comme Holly Herndon défendent une vision différente : "Mon intention
                  se manifeste dans le choix du prompt, la curation des résultats, la construction d'un corpus
                  cohérent". L'IA devient outil, comme le pinceau ou l'appareil photo avant elle.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Vers une Éthique de l'IA Artistique</h3>
                <p className="text-base leading-relaxed">
                  Des initiatives émergent pour réconcilier innovation et respect. Spawning AI propose "Have I Been
                  Trained", permettant aux artistes de vérifier si leurs œuvres ont servi à l'entraînement et de s'en
                  exclure. Adobe développe Firefly, entraîné uniquement sur des images libres de droits ou licenciées.
                  La start-up Fairly Trained certifie les modèles respectueux des créateurs.
                </p>

                <p className="text-base leading-relaxed">
                  L'éthique de l'IA générative nécessite un équilibre : reconnaître le droit des artistes sur leurs
                  créations tout en permettant l'innovation technologique. Cela implique transparence sur les données
                  d'entraînement, options de retrait (opt-out), et potentiellement un système de rémunération collective
                  inspiré des droits voisins musicaux. Sans ce compromis éthique, la technologie continuera de diviser
                  plutôt que d'enrichir la communauté créative.
                </p>

                <div className="mt-6 p-4 bg-secondary/50 rounded-md border border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Sources principales :</strong> Stanford University - "Generative AI and Copyright" (2023),
                    Procès Andersen et al. v. Stability AI Ltd. et al. (2023), Spawning AI - Have I Been Trained, Denis
                    Dutton - "The Art Instinct" (2009)
                  </p>
                </div>
              </div>
            </Card>
          </article>

          {/* Article 2 */}
          <article>
            <Card className="p-8 border-l-4 border-l-chart-2">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-chart-2" />
                  <Badge className="bg-chart-2 hover:bg-chart-2/90 text-white">Juridique</Badge>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-balance">
                  Le Vide Juridique de l'Art IA : Entre Innovation et Protection
                </h2>
                <p className="text-sm text-muted-foreground">État des lieux du cadre légal international</p>
              </div>

              <div className="prose prose-invert max-w-none space-y-4 text-foreground/90">
                <p className="text-base leading-relaxed">
                  Le droit actuel, conçu pour un monde pré-IA, peine à s'adapter à la génération d'images par
                  algorithmes. Entre systèmes juridiques divergents et évolution technologique fulgurante, législateurs
                  et tribunaux tentent de définir de nouvelles règles du jeu.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Le Statut Juridique des Œuvres IA</h3>
                <p className="text-base leading-relaxed">
                  La première question est déterminante : une œuvre générée par IA peut-elle bénéficier du droit
                  d'auteur ? Aux États-Unis, le Copyright Office a statué en février 2023 que les images entièrement
                  générées par IA ne sont pas protégeables, car le droit d'auteur requiert une "authorship" humaine.
                  L'affaire Zarya of the Dawn de Kristina Kashtanova illustre ce principe : seuls le texte et la mise en
                  page (contributions humaines) sont protégés, pas les images Midjourney.
                </p>

                <p className="text-base leading-relaxed">
                  En Europe, la situation diffère légèrement. La directive européenne de 2019 sur le droit d'auteur ne
                  mentionne pas explicitement l'IA, créant une zone grise. Certains juristes argumentent qu'un apport
                  créatif humain suffisant (choix du prompt, curation, post-traitement) pourrait justifier une
                  protection, mais aucun consensus n'émerge.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">L'Entraînement : Fair Use ou Contrefaçon ?</h3>
                <p className="text-base leading-relaxed">
                  Le débat juridique central concerne l'utilisation d'œuvres protégées pour entraîner les modèles. Les
                  poursuites de 2023 (artistes contre Stability AI, Midjourney, DeviantArt) testent les limites du fair
                  use. Les plaignants arguent qu'il s'agit de contrefaçon massive et de création de produits dérivés.
                  Les défendeurs invoquent une transformation substantielle, comparable au web scraping des moteurs de
                  recherche (validé dans Google Books).
                </p>

                <p className="text-base leading-relaxed">
                  Le professeur de droit Matthew Sag (Loyola University Chicago) note que les tribunaux devront
                  clarifier si l'IA "apprend" comme un humain (acceptable) ou "stocke et recrache" (violation). La
                  réponse déterminera l'avenir légal de l'industrie de l'IA générative.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Les Réponses Législatives Émergentes</h3>
                <p className="text-base leading-relaxed">
                  Face au vide juridique, des cadres réglementaires émergent. L'AI Act européen (adopté en 2023) impose
                  la transparence sur les données d'entraînement et respecte le droit d'auteur. Le Japon adopte une
                  position plus permissive, autorisant explicitement l'entraînement sans autorisation préalable. La
                  Chine exige l'approbation gouvernementale des modèles génératifs.
                </p>

                <p className="text-base leading-relaxed">
                  Aux États-Unis, plusieurs projets de loi sont en discussion, dont le "NO FAKES Act" visant à protéger
                  la voix et l'image des artistes. Le Congrès auditionne régulièrement créateurs et entreprises tech,
                  cherchant un équilibre entre protection et innovation.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Pistes pour un Cadre Juridique Adapté</h3>
                <p className="text-base leading-relaxed">
                  Les experts proposent plusieurs pistes : un droit à l'opt-out permettant aux artistes d'exclure leurs
                  œuvres des datasets ; une licence collective obligatoire rémunérant les créateurs dont le travail a
                  servi à l'entraînement ; un "label IA" transparent sur les contenus générés ; des limitations d'usage
                  commercial sans apport humain substantiel.
                </p>

                <p className="text-base leading-relaxed">
                  Le défi législatif est de taille : créer un cadre protecteur sans étouffer l'innovation, dans un
                  contexte technologique évoluant plus vite que le droit. Les décisions prises dans les prochaines
                  années façonneront durablement l'équilibre entre créateurs humains et intelligence artificielle.
                </p>

                <div className="mt-6 p-4 bg-secondary/50 rounded-md border border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Sources principales :</strong> US Copyright Office - "Copyright Registration Guidance"
                    (2023), AI Act - Règlement européen sur l'IA (2023), Andersen v. Stability AI - Class Action
                    Complaint, Matthew Sag - "Copyright and Copy-Reliant Technology" (2009), Stanford Law Review -
                    "Generative AI Has an Intellectual Property Problem" (2023)
                  </p>
                </div>
              </div>
            </Card>
          </article>
        </div>

        <Card className="mt-12 p-8 bg-accent/5 border-accent/20">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-accent" />
            Approfondir la Réflexion
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Ces analyses ne constituent qu'une introduction aux enjeux éthiques et juridiques. Pour approfondir,
            consultez la bibliographie complète incluant articles académiques, jurisprudence, rapports institutionnels
            et témoignages d'acteurs du débat.
          </p>
        </Card>
      </div>
    </main>
  )
}
