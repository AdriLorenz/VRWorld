package org.adrian.vr.entity.services;

import java.util.List;

import org.adrian.vr.entity.models.Product;

public interface IProductService {
	
	public Product get(long id_product);
	public List <Product> getAll();
}
