function Listar() {
  const listaDePacientes = JSON.parse(localStorage.getItem('dadosPac')) || []

  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Data de nascimento</th>
          <th>Sexo</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {listaDePacientes.map(paciente => (
          <tr>
            <td>{paciente.cpf}</td>
            <td>{paciente.name}</td>
            <td>{paciente.address}</td>
            <td>{paciente.birthdate}</td>
            <td>{paciente.gender}</td>
            <td>{paciente.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  )
}

export default Listar