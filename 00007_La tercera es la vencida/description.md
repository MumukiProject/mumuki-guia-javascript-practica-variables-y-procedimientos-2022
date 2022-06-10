¡Otra nueva reglamentación! Después de algunas quejas contra el I.V.G. 😡, se determinó que ningún pozo deberá pagar el impuesto más de tres veces. En otras palabras, al aplicar el impuesto, sólo deberemos descontar del pozo su monto si se aplicó hasta 3 veces. 

Por ejemplo:

```javascript
ム pozo = 100000
ム aplicarIvg() // primera aplicación
ム pozo
99500
ム aplicarIvg() // segunda aplicación
ム pozo
99000
ム aplicarIvg() // tercera aplicación
ム pozo
98500
ム aplicarIvg() // cuarta aplicación
ム aplicarIvg() // quinta aplicación
ム aplicarIvg() // etc
ム aplicarIvg() // etc
ム pozo
98500 // a partir de la cuarta aplicación ya no se descuenta más del pozo
```
> Modificá el procedimiento `aplicarIvg` para que refleje estos cambios de reglamentación.
