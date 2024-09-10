package com.rik.su.seamazon.service;

import com.rik.su.seamazon.model.Product;
import java.util.List;

public interface ProductService {
    Product createProduct(Product product);
    Product getProductById(Long id);
    List<Product> getAllProducts();
    Product updateProduct(Long id, Product productDetails);
    void deleteProduct(Long id);
    List<Product> searchProductsByName(String name);
}
