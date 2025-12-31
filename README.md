# 3D Vier gewinnt (Connect Four)

Ein "Vier gewinnt" Miniprojekt, welches im Rahmen des Moduls WBE (Webentwicklung) an der ZHAW entwickelt wurde.
Dies ist eine moderne 3D-Implementierung des Spieleklassikers "Vier gewinnt" mit React und Three.js. Das Mini-Projekt entstand im Rahmen des Moduls **Webentwicklung (WBE)** an der ZHAW School of Engineering.

---

## Entwickler: 
Henry Eschenmoser

---

### 3D Steuerung
Da das Spiel in einer 3D-Umgebung stattfindet, kannst du die Ansicht frei wählen:
* **Drehen:** Linke Maustaste gedrückt halten und ziehen. Darauf achten, dass ausserhalb des Spielbretts gedreht wird, da man ansonsten gleich ein Stein setzt.
* **Zoom:** Mausrad scrollen.
* **Verschieben:** Rechte Maustaste gedrückt halten.


**[Hier klicken, um das Spiel zu öffnen](https://henzgo.github.io/Connect_Four/)**

---

## Features & Technologie

Die Anwendung wurde mit **React (v18)**, **Vite** und **React Three Fiber** entwickelt.

* **3D Grafik:** Interaktives 3D-Board mittels `Three.js` und `@react-three/fiber`.
* **Persistenz:** Dank `localStorage` Integration geht der Spielstand auch beim Schließen des Browsers nicht verloren.
* **Orbit Controls:** Volle Kontrolle über die Kamera (Zoom, Pan, Rotate).
* **Responsives Design:** Das Canvas passt sich der Bildschirmgröße an.
* **Win Detection:** Erkennung von Gewinnern in alle Richtungen (Horizontal, Vertikal, Diagonal).

---

## Installation & Setup

**[Hier klicken, um zum Repo zu gelangen](https://github.com/henzgo/connect_four/)**

Um das Projekt lokal auszuführen:

   ```bash
   git clone [https://github.com/henzgo/connect_four.git](https://github.com/henzgo/connect_four.git)
   cd connect_four
   npm install
   npm run dev