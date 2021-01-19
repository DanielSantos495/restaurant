import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      // Crear instancia del ServerStyleSheet
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage

      try {
         // Recuperar los estilos de los componentes en la página
         ctx.renderPage = () => {
            return originalRenderPage({
               enhanceApp: (App) => (props) => {
                  return sheet.collectStyles(<App {...props} />)
               }
            })
         }

         const initialProps = await Document.getInitialProps(ctx)
         // Extraer los estilos como <etiquetas> etiquetas
         const styleTags = sheet.getStyleElement()

         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {styleTags}
               </>
            )
         }
      } finally {
         sheet.seal()
      }
   }

   render = () => {
      return (
         <Html >
            <Head >
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Sofia&display=swap" rel="stylesheet" />
            </Head>
            <body>
               <Main />
               <NextScript/>
            </body>
         </Html>
      )
   }
}

export default MyDocument;