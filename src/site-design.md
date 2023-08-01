# Site design

## Folder Structure

-   public
    -   images
    -   articles
        -   yoga
            -   01-[name].md
        -   camino-rojo
            -   01-[name].md
-   src
    -   app
        -   `page.tsx`
        -   `layout.tsx` (root layout)
        -   (main)
            -   `layout.tsx`
            -   `page.tsx`
        -   yoga
            -   `layout.tsx`
            -   `page.tsx`
        -   camino-rojo
            -   `layout.tsx`
            -   `page.tsx`
    -   components

## Structure explained

-   RootLayout
    -   Menus
    -   Content
        -   layout (menus) - load articles names
        -   (Main)
            -   layout - content loader
                -   content **(client component)**
        -   [Yoga]
            -   layout - content loader
                -   content **(client component)**
        -   [Camino-rojo]
            -   layout - content loader
                -   content **(client component)**
    -   Footer
