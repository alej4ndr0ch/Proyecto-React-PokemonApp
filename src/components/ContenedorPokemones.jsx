export const ContenedorPokemon = ({ pokemon }) => {
  return (
      <div className="card" style={{ width: '18rem' }} class="position-absolute top-50 start-50 translate-middle : p-3 mb-2 bg-danger text-white" >
          {pokemon && (
              <>
                  <img
                      src={pokemon.sprites.other.home.front_default}
                      alt={pokemon.name}
                      className="card-img-top"
                  />
                  <div className="card-body">
                      <h5 className="card-title">{pokemon.name}</h5>
                      <p className="card-text">ID: {pokemon.id}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                  <li className="list-group-item">Altura: {pokemon.height / 10} m</li>
                  <li className="list-group-item">Peso: {pokemon.weight / 10} kg</li>
                  </ul>

                  <div class="card-body">
  </div>
     
              </>
          )}
      </div>
  )
}