package org.adrian.vr.entity.services;

import java.util.List;

import org.adrian.vr.entity.dao.IProductDao;
import org.adrian.vr.entity.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements IProductService {
	
	@Autowired
	private IProductDao productDao;

	@Override
	public Product get(long id_product) {
		return productDao.findById(id_product).get();
	}

	@Override
	public List<Product> getAll() {
		return (List<Product>)productDao.findAll();
	}

}
