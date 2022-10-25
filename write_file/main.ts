const file = "./writeData/hello.txt";

Deno.writeTextFileSync(file, "Hello, World!!\n");
console.log("hello.txt is writed\n");

// 追記する場合
Deno.writeTextFileSync(file, "second writing!", { append: true });
console.log("second writing");
