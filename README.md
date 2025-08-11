# Happy birthday Lore

feliz cumpleaños, de regalo te hice un widget que puede correr gifs,
y te paso el repo para que puedas modificarlo hehhe, pero también te paso el ejecutable para que no le batalles

# How to fork it.
I know you probably will wanna fork it so you can edit it or include gifs, remove them or whatever you wish.
so this is a electron repository with vainilla settings.

root/
├── src/
│   ├── assets/               # Static files
│   │   ├── gifs/             # Background GIFs used in the widget
│   │   ├── images/           # Icons, SVGs, etc.
│   │   ├── music/            # (Optional) Music or sounds
│   │   └── styles/           # CSS stylesheets
│   │       └── index.css     # Main style file
│   ├── templates/            # HTML templates
│   │   ├── index.html        # Main UI of the widget
│   │   └── renderer.js       # Frontend JS logic (runs in the renderer process)
│   └── index.js              # Main Electron process (app setup and window management)
├── package.json              # Project config and scripts
└── forge.config.js           # Electron Forge config


## 🚀 Quick Start

### Requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado

### Pasos para correr el proyecto

1. Clona el repositorio:

    ```bash
    git clone https://github.com/your-username/widget-project.git
    cd widget-project
    ```

2. Instala dependencias:

    ```bash
    npm install
    ```

3. Corre el app en modo desarrollo:

    ```bash
    npm start
    ```

4. Para generar el ejecutable:

    ```bash
    npm run make
    ```
