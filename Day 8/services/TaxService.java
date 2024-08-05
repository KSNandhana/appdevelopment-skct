package com.example.demo.services;

import com.example.demo.model.Tax;
import com.example.demo.model.UserData;
import com.example.demo.repository.TaxRepository;
import com.example.demo.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaxService {

    @Autowired
    private TaxRepository taxRepository;

    @Autowired
    private UserDataRepository userDataRepository;

    public void calculateAndSaveTax(Tax tax) {
        Double total = tax.getTotal();
        Double taxAmount = tax.getTax();

        UserData userData = new UserData();
        userData.setTax(tax);
        userData.setTotal(total);
        userData.setTaxAmount(taxAmount);

        tax.setUserData(userData);

        taxRepository.save(tax);
        userDataRepository.save(userData);
    }
}
