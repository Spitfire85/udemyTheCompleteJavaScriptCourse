import firstCodeTest from './components/firstCodeTest';

const jsCourse = {
  init() {
    const root = document.documentElement;
    root.classList.remove('no-js');
    root.classList.add('js');
    // firstCodeTest.init();

    let firstName = 'John';
    let age = 34;

    if (age < 13) {
      console.log(firstName + ' is a boy');
    } else if (age >= 13 && age < 20) {
      console.log(firstName + ' is a teenager');
    } else if (age >= 20 && age < 30) {
      console.log(firstName + ' is a young man');
    } else {
      console.log(firstName + ' is a man');
    }
  }
};

jsCourse.init();
