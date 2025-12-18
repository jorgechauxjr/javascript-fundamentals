const promesa = new Promise((resolve, reject) => {
    const operationSuccessFull = true;

    setTimeout(() => {
        if (operationSuccessFull) {
            resolve('La operación fue exitosa');
        } else {
            reject('La operación falló');
        }
    }, 2000);
});

promesa
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.error(errorMessage);
    });
/*
- Then: Se ejecuta cuando la promesa se resuelve. 
- Catch: Se utiliza para manejar errores.

- Resolve: Se ejecuta cuando la promesa se resuelve exitosamente.
- Reject: Se activa cuando la promesa no se puede completar, indicando un fallo.
*/
