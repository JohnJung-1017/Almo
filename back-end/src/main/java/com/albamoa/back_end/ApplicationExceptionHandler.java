package com.albamoa.back_end;

import com.albamoa.back_end.exception.EntityNotFoundException;
import com.albamoa.back_end.exception.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Arrays;

@ControllerAdvice
public class ApplicationExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<Object> handleResourceNotFoundException(RuntimeException ex){
        ErrorResponse error = new ErrorResponse(Arrays.asList(ex.getMessage()));
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

}
