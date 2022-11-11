module.exports = {
	HTML:function(title, id, password, post) {
	return
	`
	<!doctype html>
	<html>
	<head>
		<title>temp</title>
		<meta charset="utf-8">
	</head>
	<body>
		<h1>${title}</h1>
		<p>${id}</p>
		<p>${password}</p>
		<p>${post}</p>
		<br>
		<a href="/">
			<button type="button" class="btn btn-primary">Go back</button>
		</a>
	</body>
	</html>
	`;
	}, list:function(filelist) {
		var list = '<ul>';
		var i = 0;
		while(i < res.length) {
			list = list + `<li><a href="/?id=${res[i].id}">${res[i].title}</a></li>`;
			i++;
		}
		list = list+'</ul>';
		return list;
	}
}



