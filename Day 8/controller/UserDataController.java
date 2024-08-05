package com.example.demo.controller;

import com.example.demo.model.Tax;
import com.example.demo.model.UserData;
import com.example.demo.services.UserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userdata")
public class UserDataController {

    @Autowired
    private UserDataService userDataService;

    @PostMapping("/calculate")
    public void calculateTax(@RequestBody Tax tax) {
        userDataService.calculateAndSaveTax(tax);
    }

    @GetMapping("/{id}")
    public UserData getUserData(@PathVariable Long id) {
        return userDataService.getUserData(id);
    }
}
