import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  input: {
    margin: '4px',
  },
}))

const Politics = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Paper elevation={3} className={classes.root}>
        <Typography align="center" variant="h4" component="h1" gutterBottom>
          Política de privacidad para aplicaciones desarrolladas por Jose Miguel
          Hernandez Perez
        </Typography>
        <Typography align="center" gutterBottom>
          A continuación se enuncia la política de privacidad para las
          aplicaciones móviles desarrolladas por Jose Miguel Hernandez Perez.
        </Typography>
        <Typography align="center" variant="h7" component="h1" gutterBottom>
          Política de privacidad en español
        </Typography>
        <Typography align="center" gutterBottom>
          Esta política de privacidad rige para todas las aplicaciones móviles
          para Android creadas por "Jose Miguel Hernandez Perez" y publicadas en
          la cuenta de desarrollador con el nombre antes mencionado.
        </Typography>
        <Typography align="center" variant="h6" component="h1" gutterBottom>
          ¿Que tipo de información recolectamos?
        </Typography>
        <Typography align="center" gutterBottom>
          Para el correcto funcionamiento de las aplicaciones que construimos o
          desarrollamos, estos son algunos de los datos que recolectamos:
        </Typography>
        {/*<Typography align="center" variant="h6" component="h1" gutterBottom>
          Ubicación
        </Typography>
        <Typography align="center" gutterBottom>
          Para el caso de las aplicaciones que sea necesario accedemos a los
          datos proporcionados por el GPS. Estos datos no los manejamos
          nosotros, son directamente manejado por Google Maps (nuestro proveedor
          de mapas).
        </Typography>
        <Typography align="center" variant="h6" component="h1" gutterBottom>
          Dato de registro
        </Typography>
        <Typography align="center" gutterBottom>
          Quiero informarle que cada vez que utiliza mi Servicio, en caso de un
          error en la aplicación, recopilo datos e información (a través de
          productos de terceros) en su teléfono llamados Datos de registro.
          Estos datos de registro pueden incluir información como la dirección
          del Protocolo de Internet («IP») de su dispositivo, el nombre del
          dispositivo, la versión del sistema operativo, la configuración de la
          aplicación cuando utiliza mi Servicio, la hora y la fecha de uso del
          Servicio y otras estadísticas.
          </Typography>*/}
        <Typography align="center" variant="h6" component="h1" gutterBottom>
          Datos locales
        </Typography>
        <Typography align="center" gutterBottom>
          Mis aplicaciones podrian a llegar a guardar data local para mantener
          su estado, estos datos generalmente sn json encriptados que solo
          deberia entender mi aplicacion para su correcto funcionamiento. en
          juegos podria ser estadisticas del usuario puntos .etc
        </Typography>
        <Typography align="center" variant="h6" component="h1" gutterBottom>
          Seguridad
        </Typography>
        <Typography align="center" gutterBottom>
          Valoro su confianza en proporcionarnos su información personal, por lo
          tanto, nos esforzamos por utilizar medios comercialmente aceptables
          para protegerla. Pero recuerde que ningún método de transmisión por
          Internet o método de almacenamiento electrónico es 100% seguro y
          confiable, y no puedo garantizar su seguridad absoluta.
        </Typography>
        <Typography align="center" variant="h6" component="h1" gutterBottom>
          Enlaces a otros sitios
        </Typography>
        <Typography align="center" gutterBottom>
          Este servicio puede contener enlaces a otros sitios. Si hace clic en
          un enlace de un tercero, será dirigido a ese sitio. Tenga en cuenta
          que estos sitios externos no son operados por mí. Por lo tanto, le
          recomiendo que revise la Política de privacidad de estos sitios web.
          No tengo control ni asumo ninguna responsabilidad por el contenido,
          las políticas de privacidad o las prácticas de sitios o servicios de
          terceros.
        </Typography>
        <Typography align="center" variant="h6" component="h1" gutterBottom>
          Privacidad de los niños
        </Typography>
        <Typography align="center" gutterBottom>
          Estos Servicios no se dirigen a ninguna persona menor de 13 años. No
          recopilo a sabiendas información de identificación personal de niños
          menores de 13 años. En el caso de que descubra que un niño menor de 13
          años me ha proporcionado información personal, la borro inmediatamente
          de nuestros servidores si la aplicacion tuviese. Si usted es padre o
          tutor y sabe que su hijo nos ha proporcionado información personal,
          comuníquese conmigo para que pueda realizar las acciones necesarias.
          Mi intencion es que mis aplicaciones sean para mayores a 12 años como
          minimo.
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Politics
