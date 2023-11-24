package med.foxmed.api.domain.endereco.medico;

public record RecordDadosListarMedicos(
        Long id,
        String nome,
        String email,
        String crm,
        Especialidade especialidade
) {

    public RecordDadosListarMedicos(Medico medico ) {
        this(
                medico.getId(),
                medico.getNome(),
                medico.getEmail(),
                medico.getCrm(),
                medico.getEspecialidade()
        );
    }
}
