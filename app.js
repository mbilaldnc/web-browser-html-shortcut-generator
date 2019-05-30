const fs = require('fs'),
	readlineSync = require('readline-sync');
var fileName = readlineSync.question('Enter file name to generate: '),
	link = readlineSync.question('Paste the link: '),
	data = '';

if (!fileName.includes('.html')) {
	fileName += '.html';
}
if (!link.includes('http')) {
	link = 'http://' + link;
}

console.log('Creating file...');
data =
	'<meta http-equiv="refresh" content="0;URL=\'' +
	link +
	'\'" /><p>1 saniye içerisinde site açılmazsa <a href="' +
	link +
	'">BURAYA</a> tıklayın.</p>';
fs.writeFile(fileName, data, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Dosyaya başarıyla yazıldı!');
	}
});
