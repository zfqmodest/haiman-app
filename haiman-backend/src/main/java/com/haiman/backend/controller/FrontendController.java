package com.haiman.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 前端路由处理控制器
 * 将非API的前端路由请求转发到index.html
 */
@Controller
public class FrontendController {
    
    /**
     * 处理所有前端路由，将其转发到index.html
     * 注意：不匹配/api开头的请求
     */
    @GetMapping(value = "/**/{path:[^\\.]*}")
    public String forward() {
        return "forward:/index.html";
    }
    
    /**
     * 捕获其他可能的路由
     */
    @RequestMapping(value = "/{path:^(?!api).*$}/**")
    public String forwardAlt() {
        return "forward:/index.html";
    }
}
