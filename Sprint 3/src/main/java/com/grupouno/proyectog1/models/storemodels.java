package com.grupouno.proyectog1.models;
import javax.persistence.*;
@Entity
@Table(name = "store")
public class storemodels {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique= true, nullable = false)
    private long id_users;

 private String nick_store;
 private String contra_store;
 private String rol_store;  
}
