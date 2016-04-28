(function(window) {
	var dateb = document.getElementById('bdate'),
		e_mail = document.getElementById('email2'),
		telnum = document.getElementById('telnum'),
		posti = document.getElementById('posti'),
		btn = document.getElementById('send'),
		bbn = document.getElementById('bbn'),
		bbe = document.getElementById('bbe');


	function init() {
		_setUpListener();
		//		_sulbbn();
		//		_sulbbe();
	}

	function _getValue() {
		return {
			one: dateb.value,
			two: e_mail.value,
			three: telnum.value,
			four: posti.value
		}
	}

	function _setUpListener() {
		btn.onclick = _submit;
		bbn.onclick = _valid_posti;
		bbe.onclick = _submit2;

	}

	function _submit() {
		var valid = _validation();
		if (!valid.err) {
			console.info(valid.msg);
		} else {
			console.error(valid.msg);
		}
	}

	function _submit2() {
		var valid = _valid_ep();
		if (!valid.err) {
			console.info(valid.msg);
		} else {
			console.error(valid.msg);
		}
	}



	function _validation() {
		var date = _getValue(),
			index;
		if (date.one != "" && date.two != "" && date.three != "" && date.four != "") {
			console.log(date);

			return {
				err: 0,
				msg: "Done"
			};
		} else {
			return {
				err: 1,
				msg: 'Empty date'
			};
		}
	}

	/*	function _sulbbn() {
			bbn.onclick = _valid_posti;
		};*/

	function _valid_posti() {
		var _posti = document.getElementById('posti');
		if (_posti.value != "") {
			if (_posti.value > 1000 && _posti.value < 90001) {
				console.info('Такой индекс есть')
			} else {
				console.info('Такого индекса быть не может')
			}
		} else {
			console.info('Нетути индекса')
		};
	};

	/*	function _sulbbe() {
			bbe.onclick = _valid_ep;
		};*/

	function _valid_ep() {
		var _ep = e_mail.value,
			index;
		_ep = _ep.split('');
		console.log(_ep);

		function _isem(elem) {
			return elem = '5'
		};
		if (_ep.some(_isem)) {
			return {
				err: 0,
				msg: "Годный адрес"
			};
			} else {
				return {
					err: 1,
					msg: " Не похоже - нет собачки"

				};
			};
		}
		/*for (index in _ep) {
			if (_ep[index] == '@') {
				//				console.log('Oh! Ja,ja')
				return {
					err: 0,
					msg: "Годный адрес"
				};

			};
			return {
				err: 1,
				msg: " Не похоже - нет собачки"

			};


			//	console.log(msg)
*/
	


	window.app = init;
}(window));
app();