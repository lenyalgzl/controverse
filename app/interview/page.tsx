import DetailsPdf from "@/components/details-pdf"
import { Card, CardContent } from "@/components/ui/card"

export default function InterviewPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold">Interview avec Nikoleta Kerinska</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed text-balance">
            Un entretien avec Nikoleta Kerinska sur l'usage de l'IA dans le design et la création artistique.
          </p>
        </div>


        <Card className="mb-8">
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">IA, design et art</h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 mt-3">
              <li>L’IA est légitime en design et communication visuelle pour la productivité et la résolution de problèmes.</li>
              <li>Automatiser l’art vide selon elle la création de sa dimension humaine.</li>
              <li>L’IA devient intéressante artistiquement seulement si elle explore de nouvelles formes de créativité plutôt que l’imitation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Esthétique et rôle de l’artiste</h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 mt-3">
              <li>Les IA génératives produisent une moyenne esthétique issue de données humaines existantes.</li>
              <li>Elles n’ont ni conscience ni jugement esthétique.</li>
              <li>L’artiste devient celui qui décide, sélectionne et valide les propositions de la machine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Enseignement et compétences</h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 mt-3">
              <li>L’apprentissage des techniques traditionnelles est indispensable avant l’usage de l’IA.</li>
              <li>Un usage précoce de l’IA peut créer une dépendance intellectuelle.</li>
              <li>Les compétences clés seront culturelles, critiques et analytiques plutôt que techniques.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Éthique et avenir</h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 mt-3">
              <li>Les modèles actuels reposent sur une exploitation non consentie des œuvres d’artistes.</li>
              <li>Les alternatives éthiques existent mais sont moins riches créativement.</li>
              <li>L’avenir pourrait valoriser le fait main et des IA entraînées sur des corpus personnels d’artistes.</li>
            </ul>
          </CardContent>
        </Card>
        
        <section className="mt-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src="/images/N_Kerinska.jpg"
                alt="Portrait Nikoleta"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">Nikoleta Kerinska, Souvenirs from the earth: seabed, I.A. générative, Impression numérique, peinture à l'huile et acrylique, 100x100cm, 2024. </h2>
              <p className="text-muted-foreground leading-relaxed">
               Lors de l’interview avec Nikoleta Kerinska consacrée aux relations entre l’art et l’intelligence artificielle, elle nous a présenté l’une de ses œuvres afin d’illustrer concrètement sa démarche. Elle a expliqué qu’elle avait constitué sa propre base de données, composée exclusivement de ses créations personnelles, afin d’entraîner l’IA sans soulever de problèmes éthiques liés à l’appropriation du travail d’autres artistes. 
               Cette œuvre, une peinture, résulte ainsi d’un mélange de plusieurs procédés artistiques et technologiques : l’artiste intervient à la fois dans la composition, dans le choix des paramètres et dans la sélection du résultat final. Le tableau présenté a donc été généré par une IA, mais s’inscrit pleinement dans une démarche artistique consciente et maîtrisée.</p>

              <DetailsPdf pdfUrl="/pdf/CompteRenduInterview.pdf" />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
