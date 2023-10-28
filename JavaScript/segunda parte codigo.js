async function a() {
    b();
    await c();
    await d();
    alertUser("a");
}
a();

function b() {
    return;
    alertUser('b');            // esse alertUser nunca será chamado pois está depois do return.
}

function c() {
    return new Promise((resolve) => {
        resolve();             // seria mais interessante apos o alertUser.
        alertUser('c');
    });
}

function d() {
    return new Promise((resolve) => {
        alertUser('d');
    });
}

function alertUser(message){
    console.log('A função é: ' + message);
}