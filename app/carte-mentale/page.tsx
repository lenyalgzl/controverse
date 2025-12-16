"use client"

import React from "react"

export default function CarteMentalePage() {
  return (
    <main className="min-h-screen w-full bg-background flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Conteneur principal */}
      <div className="w-full max-w-6xl space-y-8">
        
        {/* Titre et description */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Carte Mentale
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visualisation graphique des acteurs et des arguments de la controverse.
          </p>
        </div>

        {/* Cadre de l'image */}
        <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
          
          {/* Zone d'affichage de l'image avec fond contrasté */}
          <div className="p-2 md:p-6 bg-muted/20 flex justify-center">
            <figure className="relative w-full">
              <img 
                src="mindmap.png" 
                alt="Carte mentale de la controverse" 
                className="w-full h-auto object-contain rounded-lg shadow-sm border bg-background max-h-[85vh] mx-auto" 
              />
            </figure>
          </div>

          {/* Bas de carte avec lien de téléchargement */}
          <div className="p-4 bg-card border-t flex justify-center items-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span>L'image ne s'affiche pas correctement ?</span>
              <a 
                href="mindmap.png" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 font-medium text-primary hover:underline hover:text-primary/80 transition-colors"
              >
                Ouvrir en haute qualité
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}