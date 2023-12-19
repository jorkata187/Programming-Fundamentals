function loadingBar(num) {
    if (num == 100) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else if (num == 10) {
        console.log(`${num}% [%.........]`);
        console.log(`Still loading...`);
    } else if (num == 20) {
        console.log(`${num}% [%%........]`);
        console.log(`Still loading...`);
    } else if (num == 30) {
        console.log(`${num}% [%%%.......]`);
        console.log(`Still loading...`);
    } else if (num == 40) {
        console.log(`${num}% [%%%%......]`);
        console.log(`Still loading...`);
    } else if (num == 50) {
        console.log(`${num}% [%%%%%.....]`);
        console.log(`Still loading...`);
    } else if (num == 60) {
        console.log(`${num}% [%%%%%%....]`);
        console.log(`Still loading...`);
    } else if (num == 70) {
        console.log(`${num}% [%%%%%%%...]`);
        console.log(`Still loading...`);
    } else if (num == 80) {
        console.log(`${num}% [%%%%%%%%..]`);
        console.log(`Still loading...`);
    }
    else {
        console.log(`90% [%%%%%%%%%.]`);
        console.log(`Still loading...`);
    }
}

loadingBar(30);