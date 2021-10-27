package com.grupouno.proyectog1.models;

import javax.persistence.*;
@Entity
@Table(name = "users")

public class usersmodels {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique= true, nullable = false)
    private long id_users;

 private String nick_users;
 private String contra_users;
 private String rol_users;

}
