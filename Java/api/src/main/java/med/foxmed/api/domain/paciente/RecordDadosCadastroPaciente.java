package med.foxmed.api.domain.endereco.paciente;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import med.foxmed.api.domain.endereco.RecordDadosEndereco;

public record RecordDadosCadastroPaciente(

        @NotBlank(message = "Nome deve ser preenchido")
        String nome,
        @Email(message = "Informe um email válido")
        String email,
        @NotBlank(message = "Informe um telefone válido")
        String telefone,
        @NotBlank(message = "Informe um cpf válido")
        @Pattern(regexp = "\\d{11}")
        String cpf,
        @NotNull(message = "Endereço deve ser preenchido")
        @Valid
        RecordDadosEndereco endereco
) {
}
