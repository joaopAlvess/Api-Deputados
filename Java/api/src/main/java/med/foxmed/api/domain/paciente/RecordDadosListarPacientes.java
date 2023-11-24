package med.foxmed.api.domain.endereco.paciente;

public record RecordDadosListarPacientes(
        Long id,
        String nome,
        String email,
        String cpf
) {

    public RecordDadosListarPacientes(Paciente paciente) {
        this(
                paciente.getId(),
                paciente.getNome(),
                paciente.getEmail(),
                paciente.getCpf());
    }
}
