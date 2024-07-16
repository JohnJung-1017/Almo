package com.albamoa.back_end.exception;

public class EntityNotFoundException extends RuntimeException{
    public EntityNotFoundException(Long id, Class<?> entity){
        super("The " + entity.getSimpleName().toLowerCase() + " with id '" + id + "' does not exist in our records");

    }

    public EntityNotFoundException(String username, Class<?> entity){
        super("The " + entity.getSimpleName().toLowerCase() + " with username '" + username + "' does not exist in our records");

    }

}
