package com.albamoa.back_end.repository;

import com.albamoa.back_end.entity.ViewLog;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ViewLogRepository extends CrudRepository<ViewLog, Long> {
    List<ViewLog> findByViewedAtBetween(LocalDateTime start, LocalDateTime end);
}
