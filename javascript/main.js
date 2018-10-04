	function calculartotal() {

		var can1 = document.getElementById("cant1").value;
			var va1 = document.getElementById("val1").value;
		var can2 = document.getElementById("cant2").value;
			var va2 = document.getElementById("val2").value;
		var can3 = document.getElementById("cant3").value;
			var va3 = document.getElementById("val3").value;
		var can4 = document.getElementById("cant4").value;
			var va4 = document.getElementById("val4").value;
		var can5 = document.getElementById("cant5").value;
			var va5 = document.getElementById("val5").value;
		var can6 = document.getElementById("cant6").value;
			var va6 = document.getElementById("val6").value;

		var iv1 = document.getElementById("viva1").value;
		var iv2 = document.getElementById("viva2").value;

		var p1 = (va1*can1);
		var p2 = (va2*can2);
		var p3 = (va3*can3);
		var p4 = (va4*can4);
		var p5 = (va5*can5);
		var p6 = (va6*can6);

		var subtotal1= (p1+p2+p3);
		var subtotal2 =	(p4+p5+p6);

		document.getElementById("subt1").value=subtotal1;
		document.getElementById("subt2").value=subtotal2;

		var iva1 = calculariva(subtotal1,iv1);
		var iva2 = calculariva(subtotal2,iv2);

		
		document.getElementById("txtiva1").value=iva1;
		document.getElementById("txtiva2").value=iva2;

		var sutt =(subtotal1+subtotal2);

		document.getElementById("stf").value=sutt;

		var ivv = (iva1+iva2);

		document.getElementById("ivafinal").value=ivv;

		var ff = (sutt+ivv);

		document.getElementById("totalfactura").value=ff;

	// body...
	}

		function calculariva(subtotal,iva){

			var ivacalculado=((subtotal*iva)/100);
			return ivacalculado;
		}

