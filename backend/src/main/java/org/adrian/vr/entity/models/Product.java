package org.adrian.vr.entity.models;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_product")
	private long id_product;
	
	@Column(name = "name_product")
	private String name_product;
	
	@Column(name = "price_product")
	private String price_product;
	
	@Column(name = "image_product")
	private String image_product;

	public Product(String name_product, String price_product, String image_product) {
		super();
		this.name_product = name_product;
		this.price_product = price_product;
		this.image_product = image_product;
	}

	public Product() {
		super();
	}

	public long getId_product() {
		return id_product;
	}

	public void setId_product(long id_product) {
		this.id_product = id_product;
	}

	public String getName_product() {
		return name_product;
	}

	public void setName_product(String name_product) {
		this.name_product = name_product;
	}

	public String getPrice_product() {
		return price_product;
	}

	public void setPrice_product(String price_product) {
		this.price_product = price_product;
	}

	public String getImage_product() {
		return image_product;
	}

	public void setImage_product(String image_product) {
		this.image_product = image_product;
	}
	
	
	
	
	

}
