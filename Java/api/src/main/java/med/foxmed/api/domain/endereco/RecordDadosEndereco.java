package med.foxmed.api.endereco;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record RecordDadosEndereco(
        @NotBlank
        String logradouro,
        @NotBlank
        String bairro,
        @NotBlank
        String cidade,
        @NotNull
        String uf,
        @NotBlank @Pattern(regexp = "\\d{8}")
        String cep,
        String numero,
        String complemento
) {
}
