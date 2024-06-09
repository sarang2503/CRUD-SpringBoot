package com.crud.project.controller;

import com.crud.project.entity.student;
import com.crud.project.service.studentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("")
@RequiredArgsConstructor
public class studController {
    @Autowired
    public final studentService studserv;

    @PostMapping("/students")
    public student postStudent(@RequestBody student stud){
        return studserv.savestud(stud);
    }

    @GetMapping("/students")
    public student[] getstudent(){
        return studserv.getStuds();
    }
    @DeleteMapping("/students/{id}")
    public ResponseEntity<String> deletestud(@PathVariable long id){
        boolean k =studserv.deletestu(id);
        if(k)
            return new ResponseEntity<>("delete succesffully", HttpStatus.OK);
        return new ResponseEntity<>("not deleted",HttpStatus.NOT_FOUND);

    }


    @GetMapping("/students/{Id}")
    public ResponseEntity<student> getbyid(@PathVariable long Id){
        student k;
        k=studserv.getStudById(Id);
        if(k!=null)
            return new ResponseEntity<>(k,HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @PutMapping("/students")
    public ResponseEntity<student> updatestud(@RequestBody student stud){
        boolean k=studserv.updstud(stud,stud.getId());
        if(k)
            return new ResponseEntity<>(stud,HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }




}
