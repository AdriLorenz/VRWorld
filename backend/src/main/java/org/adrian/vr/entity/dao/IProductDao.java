package org.adrian.vr.entity.dao;

import org.adrian.vr.entity.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface IProductDao extends CrudRepository<Product, Long>{

}
