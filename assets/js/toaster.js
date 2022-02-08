function showSuccessToast(message) {
	$.toast({
		heading : 'Message Send👍',
		text : message,
		showHideTransition : 'slide',
		icon : 'success',
		loaderBg : '#f2a654',
		position : 'top-right'
	})
}

function showErrorToast(message) {
	$.toast({
		heading : 'Sorry !!!',
		text : message,
		showHideTransition : 'slide',
		icon : 'error',
		loaderBg : '#f2a654',
		position : 'top-right'
	})
}