package com.example.demo.controller;

import com.example.demo.model.Tax;
import com.example.demo.services.UserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/calculate")
public class CalculateController {

    @Autowired
    private UserDataService userDataService;

    @PostMapping
    public void calculateTax(@RequestBody Tax tax) {
        userDataService.calculateAndSaveTax(tax);
    }
}
