# Requirements
1. PHP >= 5.5.9
2. OpenSSL PHP Extension
3. PDO PHP Extension
4. Mbstring PHP Extension
5. Tokenizer PHP Extension

# Installation

1. Install PHP 5.5.9
2. Install [Composer](https://getcomposer.org)
3. Create a mysql database and name it.
4. Edit .env.example and config/database.php file with:
    1. The correct url connection string
    2. The name of the database
    3. The correct username and password
    4. Rename .env.example to .env
5. Open the application folder with a terminal/console and type
    1. **composer install**
    2. **php artisan migrate**
        - This creates the needed tables in your database
    3. **php artisan key:generate**
    4. **php artisan serve**
        - This creates a local server on your [localhost with port 8000](http://localhost:8000/)

# Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, queueing, and caching.

Laravel is accessible, yet powerful, providing tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
