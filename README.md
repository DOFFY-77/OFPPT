## STEPS TO FOLLOW

### Installation
```bash
git clone <url> 
```
```bash
cd OFPPT
```

```bash
composer install
```
```bash
npm i
```
make sure you modified your #.env 
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD= ''' your password '''
```

## How to Lunch Tp

1. Migrate the DB files into your DB
```bash
php artisan migrate
```

2. for Lunch The App use this commande to create listen port

```bash
php artisan serve
```

3. Than use this link 

```
http://127.0.0.1:8000/template
```




