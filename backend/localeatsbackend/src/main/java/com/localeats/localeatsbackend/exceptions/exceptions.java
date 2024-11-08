package com.localeats.localeatsbackend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class exceptions {
    @ExceptionHandler
    @ResponseStatus(HttpStatus.CONFLICT)
    public String generalException(Exception ex)
    {
        return "An error has occurred \n" + ex.getMessage();
    }
}
