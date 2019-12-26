export default `
//this is javascript code

function doSomething(num) {
	console.log(\`
        \${num} bottles of lacroix on the wall, 
        \${num} bottles of lacroix. 
        Take one down, pass it around, 
        \${num - 1} bottles of lacroix on the wall.\`);
}

for (let i = 0; i < 100; i++) {
	doSomething(i);
}`;
