package io.u.m.daos;

import io.u.m.domain.Login;

import java.util.List;

public interface LoginService {
    List<Login> getAllLogins();

    Login getLogin(Long id);

    void addLogin(Login login);

    void updateLogin(Long id, Login login);

    void deleteLogin(Long id);
}
