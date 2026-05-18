
package com.example.ecommerce.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import org.springframework.web.bind.MethodArgumentNotValidException;


@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntimeException(
            RuntimeException ex
    ) {

        return new ResponseEntity<>(
                ex.getMessage(),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(
            Exception ex
    ) {

        return new ResponseEntity<>(
                "Something went wrong",
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<String> handleValidationException(
        MethodArgumentNotValidException ex
) {

    String errorMessage =
            ex.getBindingResult()
                    .getFieldError()
                    .getDefaultMessage();

    return new ResponseEntity<>(
            errorMessage,
            HttpStatus.BAD_REQUEST
    );
}


}
