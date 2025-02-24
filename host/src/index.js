import('remote/sayHello')
    .then((module) => {
        const sayHello = module.sayHello;
        document.body.innerHTML += `<p>${sayHello()}</p>`;
    })
    .catch((err) => {
        console.error('Failed to load remote module:', err);
    });
