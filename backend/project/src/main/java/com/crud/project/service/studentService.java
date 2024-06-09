package com.crud.project.service;

import com.crud.project.entity.student;
import com.crud.project.reposetory.studentReposetory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class studentService {

    private long index=1L;

    @Autowired
    private final studentReposetory studrepo;

    public student savestud(student stud) {
        stud.setId(index++);
        return studrepo.save(stud);
    }


    public student[] getStuds() {
        List<student> studentList = studrepo.findAll();
        return studentList.toArray(new student[0]);
    }

    public boolean deletestu(Long id) {
        if (studrepo.existsById(id)) {
            studrepo.deleteById(id);
            return true;
        }
        return false;
    }

    public student getStudById(Long Id) {
        return studrepo.findById(Id).orElse(null);
    }

    public boolean updstud(student stud, Long previd) {


            Optional<student> tempstud= studrepo.findById(previd);
            if(tempstud.isPresent()){
                student updstud=tempstud.get();
                updstud.setDepartment(stud.getDepartment());
                updstud.setEmail(stud.getEmail());
                updstud.setName(stud.getName());
                updstud.setPhone(stud.getPhone());
                updstud.setGender(stud.getGender());
                updstud.setId(stud.getId());
                studrepo.save(updstud);
                return true;
            }
            else
                return false;

    }
}