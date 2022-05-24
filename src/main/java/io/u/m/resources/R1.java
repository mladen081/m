package io.u.m.resources;

import io.u.m.daos.LoginService;
import io.u.m.domain.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class R1 {
    @Autowired
    LoginService loginService;

    @RequestMapping("/getAllLogins")
    public List<Login> getAllLogins() {
        return loginService.getAllLogins();
    }

    @RequestMapping("/getLogin/{id}")
    public Login getLogin(@PathVariable Long id) {
        return loginService.getLogin(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/addLogin")
    public void addLogin(@RequestBody Login login) {
        loginService.addLogin(login);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/updateLogin/{id}")
    public void updateLogin(@RequestBody Login login, @PathVariable Long id) {
        loginService.updateLogin(id, login);
    }

    @RequestMapping(method = {RequestMethod.DELETE, RequestMethod.GET}, value = "/deleteLogin/{id}")
    public void deleteLogin(@PathVariable Long id) {
        loginService.deleteLogin(id);
    }
}
