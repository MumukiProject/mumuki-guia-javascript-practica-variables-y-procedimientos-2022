Por una nueva reglamentación, todos pozos de dinero que tengan más de $15000, deberán tributar un impuesto (llamado I.V.G.: Impuesto a las Variables Globales) del 1% si el pozo. Sabemos también que el valor máximo del impuesto es de $500.
Necesitamos una función para poder calcular el monto a pagar y un procedimiento que descuente del pozo el valor del impuesto que corresponda.

Por ejemplo:

```javascript
ム pozo = 1000
ム calcularMontoIvg()
0 // porque para tributar el monto debe ser de al menos $15000
ム pozo = 16000
ム calcularMontoIvg()
160 // porque es un pozo de más de $15000, y debe tributar el 1%
ム pozo = 125000
ム calcularMontoIvg()
500 // porque el valor máximo del impuesto es 500 (el 1% de 125000 hubiera sido $1250)
ム aplicarIvg()
ム pozo()
124500 // porque le restó los $500 del impuesto
```

> Definí la función `calcularMontoIvg` y el procedimiento `aplicarIvg`.

