import Document from 'next/document'
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
}

export default MyDocument;