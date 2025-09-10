package com.haiman.backend.config;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 * 全局CORS过滤器，确保在所有过滤器链前应用CORS策略
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        // 获取请求的Origin
        String origin = request.getHeader("Origin");
        
        // 设置允许的Origin，如果不为空则允许
        if (origin != null) {
            response.setHeader("Access-Control-Allow-Origin", origin);
        }
        
        // 允许的HTTP方法
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        
        // 允许的请求头
        response.setHeader("Access-Control-Allow-Headers", 
                "Authorization, Content-Type, X-Requested-With, Accept, Origin, " +
                "Access-Control-Request-Method, Access-Control-Request-Headers");
        
        // 暴露的响应头
        response.setHeader("Access-Control-Expose-Headers", "Authorization, Content-Type");
        
        // 允许凭证
        response.setHeader("Access-Control-Allow-Credentials", "true");
        
        // 预检请求缓存时间（秒）
        response.setHeader("Access-Control-Max-Age", "3600");

        // 对于OPTIONS请求（预检请求），直接返回200
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            chain.doFilter(req, res);
        }
    }
}
