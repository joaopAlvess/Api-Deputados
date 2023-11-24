package med.foxmed.api.domain.endereco.paciente;

import med.foxmed.api.domain.endereco.Endereco;

public record RecordDadosDetalharPaciente(
        Long id,
        String nome,
        String email,
        String cpf,
        String telefone,
        Endereco endereco
) {

    public RecordDadosDetalharPaciente (Paciente paciente){
        this(
                paciente.getId(),
                paciente.getNome(),
                paciente.getEmail(),
                paciente.getCpf(),
                paciente.getTelefone(),
                paciente.getEndereco()
                );
    }
}
