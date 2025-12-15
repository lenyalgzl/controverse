import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink, FileText, Scale } from "lucide-react"

const sources = [
  {
    categorie: "Articles Académiques",
    icon: BookOpen,
    items: [
      {
        auteur: "Bara, Ionela, Richard Ramsey & Emily S. Cross",
        titre: "AI contextual information shapes moral and aesthetic judgments of AI-generated visual art",
        publication: "Cognition, 257",
        annee: 2025,
        description: "Étude sur l'influence du contexte de l'IA sur les jugements moraux et esthétiques de l'art généré par IA.",
      },
      {
        auteur: "Bellaiche, Lucas et al.",
        titre: "Humans versus AI: whether and why we prefer human-created compared to AI-created artwork",
        publication: "Cognitive Research: Principles and Implications, 8(1), 42",
        annee: 2023,
        description: "Analyse comparative des préférences pour l'art créé par des humains versus l'IA.",
      },
      {
        auteur: "Chiodo, Simona",
        titre: "What AI 'art' can teach us about art",
        publication: "Journal of Aesthetics & Culture, 16(1), 2395511",
        annee: 2024,
        description: "Réflexion sur les enseignements de l'art généré par IA pour notre compréhension de l'art.",
      },
      {
        auteur: "Cornelissen, Adrien",
        titre: "Art et IA, une cohabitation est-elle possible ?",
        publication: "Dossiers Cairn, n°3",
        annee: 2025,
        description: "Exploration des possibilités de cohabitation entre l'art traditionnel et l'IA.",
      },
      {
        auteur: "Cunningham, Joshua",
        titre: "Painting in gray: the legal and ethical ambiguities of AI-generated art",
        publication: "Journal of Information, Communication and Ethics in Society, 23(3), 384-391",
        annee: 2025,
        description: "Analyse des ambiguïtés juridiques et éthiques entourant l'art généré par IA.",
      },
      {
        auteur: "Epstein, Ziv et al.",
        titre: "Who Gets Credit for AI-Generated Art?",
        publication: "iScience, 23(9)",
        annee: 2020,
        description: "Étude sur l'attribution de la paternité et du crédit dans l'art généré par IA.",
      },
      {
        auteur: "Gefen, Alexandre",
        titre: "Ce que l'intelligence artificielle change à l'art",
        publication: "Nouvelle revue d'esthétique, 33(1), 5-9",
        annee: 2024,
        description: "Analyse des transformations apportées par l'IA au domaine de l'art.",
      },
      {
        auteur: "Hitsuwari, Jimpei et al.",
        titre: "Does human–AI collaboration lead to more creative art? Aesthetic evaluation of human-made and AI-generated haiku poetry",
        publication: "Computers in Human Behavior, 139",
        annee: 2023,
        description: "Évaluation esthétique de la collaboration humain-IA dans la création de poésie haiku.",
      },
      {
        auteur: "Kerinska, Nikoleta",
        titre: "Art et intelligence artificielle : dans le contexte d'une expérimentation artistique",
        publication: "Thèse, Université Panthéon-Sorbonne - Paris I",
        annee: 2014,
        description: "Recherche doctorale sur l'art et l'IA dans un contexte d'expérimentation artistique.",
      },
      {
        auteur: "Khatiwada, Prerana et al.",
        titre: "The Ethical Implications of AI in Creative Industries: A Focus on AI-Generated Art",
        publication: "arXiv:2507.05549",
        annee: 2025,
        description: "Analyse des implications éthiques de l'IA dans les industries créatives.",
      },
      {
        auteur: "Latikka, Rita et al.",
        titre: "AI as an Artist? A Two-Wave Survey Study on Attitudes Toward Using Artificial Intelligence in Art",
        publication: "Poetics, 101",
        annee: 2023,
        description: "Étude longitudinale sur les attitudes envers l'utilisation de l'IA dans l'art.",
      },
      {
        auteur: "Allard, Laurence",
        titre: "L'art peut-il résister aux robots et à l'intelligence artificielle ?",
        publication: "NECTART, 12(1), 146-153",
        annee: 2021,
        description: "Réflexion sur la résistance de l'art face à la robotique et l'IA.",
      },
      {
        auteur: "Lima, Gabriel et al.",
        titre: "On the Social-Relational Moral Standing of AI: An Empirical Study Using AI-Generated Art",
        publication: "Frontiers in Robotics and AI, 8",
        annee: 2021,
        description: "Étude empirique sur le statut moral social-relationnel de l'IA à travers l'art généré.",
      },
      {
        auteur: "Lovato, Juniper et al.",
        titre: "Foregrounding Artist Opinions: A Survey Study on Transparency, Ownership, and Fairness in AI Generative Art",
        publication: "Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society, 7(1), 905-916",
        annee: 2024,
        description: "Enquête sur les opinions des artistes concernant la transparence et l'équité dans l'art génératif IA.",
      },
      {
        auteur: "Mikalonytė, Elzė Sigutė & Markus Kneer",
        titre: "Can Artificial Intelligence Make Art?: Folk Intuitions as to whether AI-driven Robots Can Be Viewed as Artists and Produce Art",
        publication: "J. Hum.-Robot Interact., 11(4), 43:1-43:19",
        annee: 2022,
        description: "Étude sur les intuitions populaires concernant la capacité de l'IA à créer de l'art.",
      },
      {
        auteur: "Piskopani, Anna Maria et al.",
        titre: "Responsible AI and the Arts: The Ethical and Legal Implications of AI in the Arts and Creative Industries",
        publication: "Proceedings of the First International Symposium on Trustworthy Autonomous Systems, TAS '23, 1-5",
        annee: 2023,
        description: "Analyse des implications éthiques et juridiques de l'IA responsable dans les arts.",
      },
      {
        auteur: "Salem, Tim",
        titre: "L'artiste à travers l'IA : à la frontière entre propriété intellectuelle et personnalité immortelle",
        publication: "Revue Lexsociété, Les laboratoires sociaux de l'imaginaire, face aux défis de l'anthropocène",
        annee: 2024,
        description: "Exploration de l'intersection entre IA, propriété intellectuelle et identité artistique.",
      },
      {
        auteur: "Shoemaker, Eric",
        titre: "Is AI Art Theft? The Moral Foundations of Copyright Law in the Context of AI Image Generation",
        publication: "37(3), 114",
        annee: 2024,
        description: "Analyse des fondements moraux du droit d'auteur dans le contexte de la génération d'images par IA.",
      },
      {
        auteur: "Sobieszczanski, Marcin",
        titre: "L'œuvre d'art à l'époque de la reproduction informatique de la réceptivité",
        publication: "Proceedings to Ninth International Conference on Virtual Systems and Multimedia (VSMM)",
        annee: 2003,
        description: "Réflexion sur l'œuvre d'art à l'ère de la reproduction numérique.",
      },
      {
        auteur: "Tang, Jiaru & Xiyao Liu",
        titre: "'NO TO AI GENERATED IMAGES': Fan Art Creators Contesting AI Integration on Social Media Platforms",
        publication: "Media International Australia, 1329878X251347005",
        annee: 2025,
        description: "Étude sur la contestation de l'intégration de l'IA par les créateurs de fan art sur les réseaux sociaux.",
      },
      {
        auteur: "Terekhova, Anastasiia",
        titre: "The Impact of AI-Generated NFT Art on the Global Art Market: Trends and Perspectives",
        publication: "Scientific Journal of Bielsko-Biala School of Finance and Law, 29(1)",
        annee: 2025,
        description: "Analyse de l'impact de l'art NFT généré par IA sur le marché de l'art mondial.",
      },
      {
        auteur: "Trentini, Bruno",
        titre: "Usurpation de non-identité. Ce que les productions générées par l'IA disent du rapport de l'art à ses objets",
        publication: "Nouvelle Revue d'Esthétique, Esthétiques artificielles, 2024/1(33), 69-80",
        annee: 2024,
        description: "Réflexion sur ce que les productions IA révèlent de la relation de l'art à ses objets.",
      },
      {
        auteur: "Vyas, Bhuman",
        titre: "Ethical Implications of Generative AI in Art and the Media",
        publication: "International Journal For Multidisciplinary Research, 4, 1-11",
        annee: 2022,
        description: "Analyse des implications éthiques de l'IA générative dans l'art et les médias.",
      },
      {
        auteur: "Weibel, Peter & Hervé Fischer",
        titre: "L'avenir de l'art:AAA. art, algorithmes, I.A.",
        publication: "Ligeia, 201204(1), 165-171",
        annee: 2023,
        description: "Vision prospective sur l'avenir de l'art à l'intersection des algorithmes et de l'IA.",
      },
    ],
  },
  {
    categorie: "Ouvrages de Référence",
    icon: BookOpen,
    items: [
      {
        auteur: "Hageback, Niklas & Daniel Hedblom",
        titre: "AI for Arts",
        publication: "CRC Press",
        annee: 2021,
        description: "Ouvrage de référence sur l'application de l'IA dans le domaine artistique.",
      },
    ],
  },
]

export default function BibliographiePage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Sources & Références
          </Badge>
          <h1 className="mb-4 text-5xl font-bold">Bibliographie</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance">
            L'ensemble des sources académiques, juridiques, institutionnelles et journalistiques ayant étayé cette
            exploration de la controverse IA dans l'art.
          </p>
        </div>

        <div className="space-y-10">
          {sources.map((section) => {
            const Icon = section.icon
            return (
              <div key={section.categorie}>
                <div className="mb-6 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold">{section.categorie}</h2>
                  <div className="ml-auto">
                    <Badge variant="secondary">{section.items.length}</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  {section.items.map((source, index) => (
                    <Card key={index} className="p-5 hover:border-accent/50 transition-colors">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-foreground">
                              {source.auteur} ({source.annee})
                            </p>
                            <p className="text-sm italic text-muted-foreground mt-1">{source.titre}</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          <strong>Publication :</strong> {source.publication}
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed mt-2">{source.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <Card className="mt-12 p-8 bg-secondary/20">
          <h3 className="text-xl font-bold mb-4">Note Méthodologique</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cette bibliographie privilégie les sources primaires (jurisprudence, rapports officiels) et secondaires de
            qualité (articles académiques à comité de lecture). Les sources tertiaires (presse généraliste) sont
            incluses pour leur valeur documentaire sur les événements récents.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Le débat évoluant rapidement, certaines références datent de 2022-2023. Une veille continue est nécessaire
            pour suivre les développements juridiques et technologiques de cette controverse en cours.
          </p>
        </Card>

        <Card className="mt-6 p-6 bg-accent/5 border-accent/20">
          <div className="flex items-start gap-3">
            <ExternalLink className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">Accès aux Sources</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Les articles académiques sont accessibles en priorité via les ressources numériques de la Bibliothèque Universitaire (BU) de l'Université de Montpellier (catalogue SUDOC, bases de données spécialisées). Pour le droit, la jurisprudence française est consultable sur Légifrance ou les plateformes juridiques professionnelles fournies par la BU. Enfin, les rapports institutionnels et les thèses sont souvent disponibles en libre accès sur les sites officiels des organismes émetteurs et les archives ouvertes nationales comme HAL.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
