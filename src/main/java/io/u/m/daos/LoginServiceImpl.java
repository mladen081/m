package io.u.m.daos;

import io.u.m.domain.Login;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LoginServiceImpl implements LoginService {
    LoginRepository loginRepository;

    LoginServiceImpl(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    @Override
    public List<Login> getAllLogins() {
        List<Login> logins = new ArrayList<>();
        loginRepository.findAll().forEach(logins::add);
        return logins;
    }

    @Override
    public Login getLogin(Long id) {
        Optional<Login> login = loginRepository.findById(id);
        return login.get();
    }

    @Override
    public void addLogin(Login login) {
        loginRepository.save(login);
    }

    @Override
    public void updateLogin(Long id, Login login) {
        loginRepository.save(login);
    }

    @Override
    public void deleteLogin(Long id) {
        loginRepository.deleteById(id);
    }

}
