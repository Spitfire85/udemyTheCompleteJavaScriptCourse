import firstCodeTest from './components/firstCodeTest';
import secondCodeTest from './components/secondCodeTest';
import thirdCodeTest from './components/thirdCodeTest';
import forthCodeTest from './components/forthCodeTest';
import fifthCodeTest from './components/fifthCodeTest';
import basics from './components/1-basics';
import howItWorks from './components/2-how-it-works';
import DOM from './components/3-dom';
import objFunc from './components/4-objFunc';
// import codingTest7 from './components/codingTest7';
import es6 from './components/7-es6';

const jsCourse = {
  init() {
    const root = document.documentElement;
    root.classList.remove('no-js');
    root.classList.add('js');

    // basics.init();
    // firstCodeTest.init();
    // secondCodeTest.init();
    // thirdCodeTest.init();
    // forthCodeTest.init();
    // codingTest7.init();

    // howItWorks.init();

    // objFunc.init();
    // codingTest7.init();
    es6.init();
  }
};

jsCourse.init();
