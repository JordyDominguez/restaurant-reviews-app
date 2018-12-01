//Register Service Worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
	.then(function(registration) {
		console.log(`Registration worked! Scope is ${registration.scope}`);
	})
	.catch(function(error) {
		console.log(`Registration failed, error: ${error}`);
	});
}