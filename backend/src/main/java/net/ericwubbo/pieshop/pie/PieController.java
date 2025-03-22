package net.ericwubbo.pieshop.pie;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/pies")
@CrossOrigin("http://localhost:4200")
public class PieController {

    @GetMapping
    public Pie get() {
        return new Pie("raspberry pie");
    }
}
