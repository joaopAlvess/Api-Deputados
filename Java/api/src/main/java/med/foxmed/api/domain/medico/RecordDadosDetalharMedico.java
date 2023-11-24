package med.foxmed.api.domain.endereco.medico;

import med.foxmed.api.domain.endereco.Endereco;

public record RecordDadosDetalharMedico(
        Long id,
        String nome,
        String email,
        String telefone,
        String crm,
        Especialidade especialidade,
        Endereco endereco
) {

    public RecordDadosDetalharMedico(Medico medico){
        this(
                medico.getId(),
                medico.getNome(),
                medico.getEmail(),
                medico.getTelefone(),
                medico.getCrm(),
                medico.getEspecialidade(),
                medico.getEndereco()
        );
    }
}
