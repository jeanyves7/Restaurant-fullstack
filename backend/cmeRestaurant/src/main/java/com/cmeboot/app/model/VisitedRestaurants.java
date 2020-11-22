package com.cmeboot.app.model;


import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name="visitedrestaurants")
public class VisitedRestaurants {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private Long id;

    @Column(name="Name")
    private String name;

    @Column(name="visiteddate")
    private Date visiteddate;

    public VisitedRestaurants(Long id, String name, java.sql.Date visiteddate) {
        this.id = id;
        this.name = name;
        this.visiteddate = visiteddate;
    }

    public VisitedRestaurants() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "VisitedRestaurants{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", visiteddate=" + visiteddate +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getVisiteddate() {
        return visiteddate;
    }

    public void setVisiteddate(Date visiteddate) {
        this.visiteddate = visiteddate;
    }
}
