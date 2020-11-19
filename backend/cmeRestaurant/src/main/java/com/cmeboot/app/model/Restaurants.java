package com.cmeboot.app.model;



import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name="restaurants")
public class Restaurants {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="type")
    private String type;

    @Column(name="avgcostf2")
    private String cost;

    @Column(name="address")
    private String address;

    @Column(name="phonenumber")
    private String phoneNumber;

    @Column(name="image")
    private String img;

    public Restaurants(Long id, String name, String type, String costLL, String address, String phoneNumber, String img) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.cost = costLL;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.img = img;
    }

    public Restaurants() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCostLL() {
        return cost;
    }

    public void setCostLL(String cost) {
        this.cost = cost;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

}
