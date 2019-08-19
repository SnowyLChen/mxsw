package com.mx.service.Impl;

import com.mx.mapper.CartMapper;
import com.mx.pojo.Cart;
import com.mx.service.CartService;
import com.mx.utils.ConvertJson.ConvertJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 购物车
 */
@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartMapper cartMapper;

    @Override
    public boolean addItemToCart(Cart cart) {
        try{
            int row=cartMapper.addCart(cart);
            if (row==0){
                return false;
            }else return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public String queryCart(Integer uid) {
        try{
            List<Cart> cartlist=cartMapper.SeeCart(uid);
            //将查询结果转换成json数组
            int count=cartMapper.SeeCartCount(uid);
            if (count==0){
                return null;
            }
            String str= ConvertJson.ConvertCart(count,cartlist);
            return str;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean editCount(Integer cart_id, Integer count) {
        try{
            boolean row=cartMapper.editCount(cart_id,count);
            if (!row){
                return false;
            }else return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteCartItem(Integer cart_id) {
        try{
            boolean row= cartMapper.delCartItem(cart_id);
            if (!row){
                return false;
            }else return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean repeatToCart(int uid, Integer item_id) {
        try{
            Cart repeat= cartMapper.repeatToCart(uid,item_id);
            System.out.println("rep:"+repeat);
           if (repeat==null){
               //不存在
               return true;
           }else {
               //存在
               return false;
           }
        }catch (Exception e){
            //异常(查不到数据)
            return false;
        }
    }
}