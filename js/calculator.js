$(function(){

	calc();

	$('#plancalc').on('change', calc);
	$('#new_Sum, #inv_days, #compount_rate').bind('change keyup', calc).on('keypress');



});


function calc() {

	var plan, amount, percent, days, total, p1, p2, p3, p4, p5, plantxt;

	plan = $('#plancalc').val();
	amount = $('#new_Sum').val();


	switch (plan) {
					case '1':
			switch (true) {
				    case (amount<10):
					percent = 0;
					days = 0;
                    
		$('#daily_profit').text('min $10');
		$('#total_percent').text('min $10');
		$('#total_return').text('min $10');
		$('#net_profit').text('min $10');
                    
					break;

				    case (amount<=10000000):
					percent = 13;
					days = 13;
                    
		var totPerc = ((amount*percent/100)).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));
		var sum4 = (eval (totRet)-(amount));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#daily_profit').text('$'+(sum1).toFixed(2));
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#net_profit').text('$'+(sum4).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1));

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#daily_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
		$('#net_profit').text('max $10000000');
                    

			};
  
    
    }
    
    

    
    

	switch (plan) {
					case '2':
			switch (true) {
				    case (amount<200):
					percent = 0;
					days = 0;
                    
		$('#daily_profit').text('min $200');
		$('#total_percent').text('min $200');
		$('#total_return').text('min $200');
		$('#net_profit').text('min $200');
                    
					break;

				    case (amount<=10000000):
					percent = 14;
					days = 10;
                    
		var totPerc = ((amount*percent/100)).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));
		var sum4 = (eval (totRet)-(amount));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#daily_profit').text('$'+(sum1).toFixed(2));
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#net_profit').text('$'+(sum4).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1));

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#daily_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
		$('#net_profit').text('max $10000000');
                    

			};
  
    
    }
    
    

    
    

	switch (plan) {
					case '3':
			switch (true) {
				    case (amount<500):
					percent = 0;
					days = 0;
                    
		$('#daily_profit').text('min $500');
		$('#total_percent').text('min $500');
		$('#total_return').text('min $500');
		$('#net_profit').text('min $500');
                    
					break;

				    case (amount<=10000000):
					percent = 11;
					days = 15;
                    
		var totPerc = ((amount*percent/100)).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));
		var sum4 = (eval (totRet)-(amount));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#daily_profit').text('$'+(sum1).toFixed(2));
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#net_profit').text('$'+(sum4).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1));

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#daily_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
		$('#net_profit').text('max $10000000');
                    

			};
  
    
    }
    
    
    
    
    

	switch (plan) {
					case '4':
			switch (true) {
				    case (amount<100):
					percent = 0;
					days = 0;
                    
		$('#daily_profit').text('min $100');
		$('#total_percent').text('min $100');
		$('#total_return').text('min $100');
		$('#net_profit').text('min $100');
                    
					break;

				    case (amount<=10000000):
					percent = 125;
					days = 1;
                    
		var totPerc = ((amount*percent/100)).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));
		var sum4 = (eval (totRet)-(amount));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#daily_profit').text('$'+(sum1).toFixed(2));
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#net_profit').text('$'+(sum4).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1));

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#daily_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
		$('#net_profit').text('max $10000000');
                    

			};
  
    
    }
    
    
    
    
    

	switch (plan) {
					case '5':
			switch (true) {
				    case (amount<500):
					percent = 0;
					days = 0;
                    
		$('#daily_profit').text('min $500');
		$('#total_percent').text('min $500');
		$('#total_return').text('min $500');
		$('#net_profit').text('min $500');
                    
					break;

				    case (amount<=10000000):
					percent = 160;
					days = 1;
                    
		var totPerc = ((amount*percent/100)).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));
		var sum4 = (eval (totRet)-(amount));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#daily_profit').text('$'+(sum1).toFixed(2));
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#net_profit').text('$'+(sum4).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1));

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#daily_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
		$('#net_profit').text('max $10000000');
                    

			};
  
    
    }
    
    

    

	switch (plan) {
					case '6':
			switch (true) {
				    case (amount<1000):
					percent = 0;
					days = 0;
                    
		$('#daily_profit').text('min $1000');
		$('#total_percent').text('min $1000');
		$('#total_return').text('min $1000');
		$('#net_profit').text('min $1000');
                    
					break;

				    case (amount<=10000000):
					percent = 200;
					days = 1;
                    
		var totPerc = ((amount*percent/100)).toFixed(2);
		var totRet = ((amount*percent/100)*days).toFixed(2);
                
		var sum1 = (eval (totPerc));
		var sum2 = (eval (totRet));
		var sum4 = (eval (totRet)-(amount));

		var totPercc = ((days*percent)).toFixed(2);  
		var sum3 = (eval (totPercc));
                    
		$('#daily_profit').text('$'+(sum1).toFixed(2));
		$('#total_return').text('$'+(sum2).toFixed(2));
		$('#net_profit').text('$'+(sum4).toFixed(2));
		$('#total_percent').text((sum3).toFixed(1));

					break;

                    
				    case (amount<=999999999999999):
					percent = 0;
					days = 0;


		$('#daily_profit').text('max $10000000');
		$('#total_percent').text('max $10000000');
		$('#total_return').text('max $10000000');
		$('#net_profit').text('max $10000000');
                    

			};
  
    
    } 
    

}