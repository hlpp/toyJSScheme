var SCHEME_LIB_SRC = "(define (zero? z)\r\n  (= z 0))\r\n\r\n(define (positive? x)\r\n  (> x 0))\r\n\r\n(define (negative? x)\r\n  (< x 0))\r\n\r\n(define (odd? z)\r\n  (not (= (remainder z 2) 0)))\r\n\r\n(define (even? z)\r\n  (= (remainder z 2) 0))\r\n\r\n(define (square x)\r\n  (* x x))\r\n\r\n(define (cube x)\r\n  (* x x x))\r\n\r\n(define (inc x)\r\n  (+ x 1))\r\n\r\n(define (dec x)\r\n  (- x 1))\r\n\r\n(define (abs x)\r\n  (if (> x 0) x (- x)))\r\n\r\n(define max\r\n  (lambda (x y)\r\n    (if (> x y) x y)))\r\n\r\n(define min\r\n  (lambda (x y)\r\n    (if (< x y) x y)))\r\n\r\n(define (expt b n)\r\n  (define (expt-iter b counter product)\r\n    (if (= counter 0)\r\n        product\r\n        (expt-iter b\r\n                   (- counter 1)\r\n                   (* b product))))\r\n  (expt-iter b n 1))\r\n \r\n (define (gcd a b)\r\n    (if (= b 0)\r\n\ta\r\n\t(gcd b (remainder a b))))\r\n \r\n \r\n \r\n(define nil '())\r\n\r\n(define (atom? x)\r\n  (not (pair? x)))\r\n\r\n\r\n(define (memq obj list)\r\n  (cond ((null? list) #f)\r\n        ((eq? obj (car list)) list)\r\n        (else (memq obj (cdr list)))))\r\n\r\n(define (memv obj list)\r\n  (cond ((null? list) #f)\r\n        ((eqv? obj (car list)) list)\r\n        (else (memv obj (cdr list)))))\r\n\r\n(define (assoc x y)\r\n  (cond ((null? y) '())\r\n        ((equal? x (caar y)) (car y))\r\n        ((assoc x (cdr y)))))\r\n\r\n(define (assv x y)\r\n  (cond ((null? y) '())\r\n        ((eqv? x (caar y)) (car y))\r\n        ((assv x (cdr y)))))\r\n\r\n(define (assq x y)\r\n  (cond ((null? y) '())\r\n        ((eq? x (caar y)) (car y))\r\n        ((assq x (cdr y)))))\r\n\r\n\r\n\r\n(define subst\r\n    (lambda (new old slist)\r\n      (if (null? slist)\r\n\t  '() (cons\r\n\t       (subst-in-s-exp new old (car slist)) \r\n\t       (subst new old (cdr slist))))))\r\n\r\n(define subst-in-s-exp\r\n    (lambda (new old sexp)\r\n      (if (symbol? sexp)\r\n\t  (if (eqv? sexp old) new sexp)\r\n\t  (subst new old sexp))))\r\n\r\n      \r\n(define (println obj)\r\n  (display obj)\r\n  (newline))\r\n";