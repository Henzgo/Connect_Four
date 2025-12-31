# 3D Vier gewinnt (Connect Four)

Ein "Vier gewinnt" Miniprojekt, welches im Rahmen des Moduls WBE (Webentwicklung) an der ZHAW entwickelt wurde.
---

## Screenshots:
![Blender Screenshot](public/images/Blender.png)
[![Gameplay Screenshot](public/images/Gameplay.png)](https://henzgo.github.io/Connect_Four/)

---

## Entwickler: 
Henry Eschenmoser (eschehen@students.zhaw.ch)

---

### 3D Steuerung
Da das Spiel in einer 3D-Umgebung stattfindet, kannst man die Ansicht frei wählen:
* **Drehen:** Linke Maustaste gedrückt halten und ziehen. Darauf achten, dass ausserhalb des Spielbretts gedreht wird, da man ansonsten gleich ein Stein setzt.
* **Zoom:** Mausrad scrollen.
* **Verschieben:** Rechte Maustaste gedrückt halten.
---

## Links:
**[Hier klicken, um das Spiel zu öffnen](https://henzgo.github.io/Connect_Four/)**<br />
**[Link zum Repo](https://github.com/Henzgo/Connect_Four)**

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
Um das Projekt lokal auszuführen:

   ```bash
   git clone https://github.com/henzgo/Connect_Four.git
   cd Connect_Four
   npm install
   npm run dev
