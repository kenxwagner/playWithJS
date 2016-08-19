function someClosure() {
	var x = 4;
	function closeX () {
		return x;
	}
	return closeX;
}