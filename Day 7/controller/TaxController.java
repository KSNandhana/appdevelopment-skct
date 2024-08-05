package com.example.demo.controller;

import com.example.demo.model.Tax;
import com.example.demo.services.TaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tax")
public class TaxController {

    @Autowired
    private TaxService taxService;

    @PostMapping("/calculate")
    public void calculateTax(@RequestBody Tax tax) {
        taxService.calculateAndSaveTax(tax);
    }
}
