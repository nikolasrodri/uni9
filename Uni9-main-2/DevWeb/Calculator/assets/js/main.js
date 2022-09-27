function Calculator() {
  this.form = document.querySelector('.form');
  this.calc = document.querySelector('.calculadora');

  this.start = () => {
    this.event();
    
  };


  this.event = () => {
    
    document.addEventListener('submit', e => {
      e.preventDefault();

      this.makeAccount();
    });
  };

  this.makeAccount = () => {
    x1 = document.querySelector('.x1');
    x1 = parseInt(x1.value);

    x2 = document.querySelector('.x2'); 
    x2 = parseInt(x2.value);
    
    y1 = document.querySelector('.y1');
    y1 = parseInt(y1.value);

    y2 = document.querySelector('.y2');
    y2 =parseInt(y2.value);


    const result =  MakeAccount(x1, x2, y1, y2);

  
    for(let errorText of this.calc.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    this.validator(result);


  }

  this.validator = (result) => {

    if((!result) || (result==='NaN')) {
      this.makeErr('Operação Invalida');
      return;
    }

    this.addNumResult(result);

  }

  this.addNumResult = el => {
    res = document.querySelector('.result');
    el = el.toString();    
    res.value = el;
  };

  this.makeErr = (msg) => { 
    
    const div = document.createElement('div'); 
    div.innerHTML = msg; 
    div.classList.add('error-text');
    this.form.insertAdjacentElement('afterend', div); 

    res = document.querySelector('.result');
    res.value = '';
  }
}

const calculator = new Calculator();
calculator.start();