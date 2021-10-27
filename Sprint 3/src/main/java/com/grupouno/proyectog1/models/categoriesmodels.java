package com.grupouno.proyectog1.models;
import javax.persistence.*;
@Entity
@Table(name = "categories")
public class categoriesmodels {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique= true, nullable = false)
    private long id_categories;

 private String nick_categories;
 private String contra_categories;
 private String rol_categories;
}
