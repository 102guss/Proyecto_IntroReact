function Tarjeta () {
  // Definimos toda la información de la tarjeta (incluyendo la nueva leyenda)
  const nombre = 'Gustavo Pozos'
  const profesion = 'Desarrollador Web'
  const mensaje = '¡Bienvenido a mi tarjeta de presentación!'
  const leyenda = '¡Gracias por visitar mi perfil!' // Nueva leyenda fija

  return (
    <center>
      <div style={{
        border: '4px solid #b69ff7',
        padding: '20px',
        width: '300px',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#f9f5ff'
      }}
      >
        <h2>{nombre}</h2>
        <h4>{profesion}</h4>
        <p>{mensaje}</p>

        {/* Leyenda adicional fija */}
        <p style={{
          marginTop: '10px',
          fontStyle: 'italic',
          color: '#666'
        }}
        >
          {leyenda}
        </p>
      </div>
    </center>
  )
}

export default Tarjeta
