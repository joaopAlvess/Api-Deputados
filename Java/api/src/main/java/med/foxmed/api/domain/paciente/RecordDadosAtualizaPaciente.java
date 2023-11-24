package med.foxmed.api.domain.endereco.paciente;

import jakarta.validation.constraints.NotNull;
import med.foxmed.api.domain.endereco.RecordDadosEndereco;

public record RecordDadosAtualizaPaciente(
        @NotNull
        Long id,
        String nome,
        String telefone,
        RecordDadosEndereco endereco
) {
}
