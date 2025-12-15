import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sparkles, AlertTriangle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <Sparkles className="h-8 w-8 text-accent" />
              <span className="text-sm font-medium uppercase tracking-wider text-accent">Controverse Numérique</span>
              <AlertTriangle className="h-8 w-8 text-accent" />
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl">
              L'Intelligence Artificielle dans l'art
            </h1>

            <p className="mb-4 text-3xl font-bold text-accent md:text-4xl">Menace ou Chance ?</p>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-balance">
              Une exploration critique et équilibrée de la révolution numérique qui bouleverse la création artistique,
              entre opportunités démocratiques et menaces existentielles.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/acteurs">
                  Découvrir les acteurs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/arguments">Explorer les arguments</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Résumé de la controverse */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold text-center">La Controverse en Bref</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
              <div className="mb-4 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="text-2xl font-bold text-foreground">Menace</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les artistes traditionnels craignent le remplacement par des algorithmes, la violation des droits
                d'auteur, et la perte de l'âme créative.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dévalorisation du travail artistique</li>
                <li>• Exploitation des œuvres sans consentement</li>
                <li>• Surcharge visuelle et uniformisation</li>
                <li>• Absence d'intentionnalité créative</li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-accent/20 bg-accent/5">
              <div className="mb-4 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Chance</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'IA ouvre l'art à tous, augmente les capacités créatives, et fait émerger de nouvelles formes
                d'expression artistique.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Démocratisation de la création</li>
                <li>• Collaboration homme-machine innovante</li>
                <li>• Gain de temps et d'efficacité</li>
                <li>• Émergence d'un nouvel art génératif</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectifs du site */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Notre Démarche</h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-balance">
            Ce site propose une analyse académique, neutre et documentée de cette controverse. Nous identifions les
            acteurs clés, examinons les arguments de chaque camp, retraçons l'histoire de l'art génératif, et explorons
            les dimensions éthiques, économiques, techniques et esthétiques de ce débat crucial pour l'avenir de la
            création.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Card className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-sm font-medium">Groupes d'acteurs</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">?</div>
              <div className="text-sm font-medium">Arguments analysés</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">?</div>
              <div className="text-sm font-medium">Articles éditoriaux</div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
