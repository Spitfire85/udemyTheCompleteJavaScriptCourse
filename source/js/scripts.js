import firstCodeTest from './components/firstCodeTest';

const jsCourse = {
  init() {
    const root = document.documentElement;
    root.classList.remove('no-js');
    root.classList.add('js');
    firstCodeTest.init();
  }
};

jsCourse.init();
