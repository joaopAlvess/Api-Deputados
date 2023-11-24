package med.foxmed.api.domain.endereco.medico;

import jakarta.validation.constraints.NotNull;
import med.foxmed.api.domain.endereco.RecordDadosEndereco;

public record RecordDadosAtaualizarMedico(
        @NotNull
        Long id,
        String nome,
        String telefone,
        RecordDadosEndereco endereco
) {
}
