package med.foxmed.api.domain.endereco.medico;

import jakarta.persistence.*;
import lombok.*;
import med.foxmed.api.domain.endereco.Endereco;


@Table(name = "medicos") //mesmo nome da rota passada no controler (estou definindo o nome da tabela)
@Entity(name = "Medico")  //Definindo entidade para "Medico"
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Medico {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String crm;
    @Enumerated(EnumType.STRING)
    private Especialidade especialidade;
    @Embedded private Endereco endereco; // o Embadded é para fornecer e passar para o banco de dados e aplicação que o a entidade de endereço faz parte de medicos.
    private Boolean ativo;

    public Medico(RecordDadosCadastroMedico dados){
        this.ativo = true;
        this.nome = dados.nome();
        this.email = dados.email();
        this.telefone = dados.telefone();
        this.crm = dados.crm();
        this.especialidade = dados.especialidade();
        this.endereco = new Endereco(dados.endereco());
    }

    //Fazendo uma class para verificar as atualizações, caso o valor seja diferente de null, persista os dados com o novo valor no Banco de Dados.
    public void atualizarMedico(RecordDadosAtaualizarMedico dados) {
        if(dados.nome() != null){
            this.nome = dados.nome();
        }
        if(dados.telefone() != null){
            this.telefone = dados.telefone();
        }
        if(dados.endereco() != null){
            this.endereco.atualizarInformacoes(dados.endereco());
        // A linha acima significa que estou utilizando a mesma estrátégia, dentro da Class (Endereco) também estouf azendo um método para verificar se os campos estam preenchidos, caso estejam, atualiza e persista no Banco de Dados.
        }
    }

    public void exclusao() {
        this.ativo = false;
    }
}
