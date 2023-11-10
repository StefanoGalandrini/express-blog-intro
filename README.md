# EXPRESS BLOG INTRO

## Panoramica

Questo file `README.md` è la guida per creare un blog personale utilizzando Express. Segui questi passaggi per costruire la tua applicazione blog e personalizzarla con nuove funzionalità.

## Passi Iniziali

1. **Configurazione del Progetto Base:**

   - Configura un progetto Express.
   - Crea una rotta `/` che restituisce un `<h1>` con il testo "Benvenuto nel mio blog!".

2. **Creazione Array di Post:**

   - Crea un array per memorizzare i post.
   - Ogni post deve includere: titolo, contenuto, immagine, e tags (array di stringhe).
   - Assicurati di avere almeno 5 post nell'array.

3. **Rotta per i Post:**

   - Implementa una rotta `/posts`.
   - Utilizza la content negotiation per ritornare la lista dei post in formato JSON e HTML.
   - In formato HTML, visualizza i post utilizzando un elemento `<ul>`.

4. **Controller dei Post:**

   - Le rotte relative ai post devono invocare funzioni dal controller `controllers/posts.js`.

5. **Configurazione degli Asset Statici:**
   - Configura gli asset statici per visualizzare le immagini dei post.
   - Testa le immagini inserendo manualmente il loro link nel browser.

## Bonus

- **Enhanced HTML Output:**
  - Nella visualizzazione HTML dei post, includi un tag `<img>`, la descrizione e la lista dei tag per ogni post.
- **Separazione dei Dati:**
  - Sposta l'array dei post in un file separato e importalo nel controller.

## Test e Debug

- **Verifica le Immagini:**
  - Controlla manualmente i link delle immagini per assicurarti che siano visualizzate correttamente.
- **Testing delle Rotte:**
  - Assicurati che tutte le rotte restituiscano i dati attesi in entrambi i formati, JSON e HTML.

---

Con questi passaggi, avrai creato una solida base per il tuo blog personale su Express, pronta per essere arricchita con ulteriori funzionalità nel tempo. Buona programmazione!
