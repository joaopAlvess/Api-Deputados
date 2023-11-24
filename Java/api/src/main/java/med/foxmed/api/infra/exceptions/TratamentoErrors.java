package med.foxmed.api.infra;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratamentoErrors {



    //Error 404, não encontrou nada no banco de dados
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity tratarError404(){
        return ResponseEntity.notFound().build();
    }

    //Error 400, BinValidation errada, verificar digitação.
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity tratarErrorBinValidation(MethodArgumentNotValidException exception){
        var error = exception.getFieldErrors();
        return ResponseEntity.badRequest().body(error);
    }

    //.stream().map(RecordDadosErrorsValidation::new).toList()
    private record RecordDadosErrorsValidation(
            String campo,
            String mensagem
    ){
        public RecordDadosErrorsValidation(FieldError error){
            this(error.getField(), error.getDefaultMessage());
        }
    }

}
