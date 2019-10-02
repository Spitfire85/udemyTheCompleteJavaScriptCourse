import firstCodeTest from './components/firstCodeTest';
import secondCodeTest from './components/secondCodeTest';
import thirdCodeTest from './components/thirdCodeTest';
import forthCodeTest from './components/forthCodeTest';
import fifthCodeTest from './components/fifthCodeTest';
import basics from './components/1-basics';
import howItWorks from './components/2-how-it-works';
import DOM from './components/3-dom';

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
    // fifthCodeTest.init();

    // howItWorks.init();

    DOM.init();
  }
};

jsCourse.init();
