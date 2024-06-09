package com.crud.project.reposetory;

import com.crud.project.entity.student;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface studentReposetory extends JpaRepository<student,Long> {

}
