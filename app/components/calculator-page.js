import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalculatorPageComponent extends Component {
  @tracked a;
  @tracked b;
  @tracked result;
  @tracked operator = '+';
  @tracked history = [];
  @tracked lastOperator = '';
  @tracked showResult = false;

  /**
   * Update the currently selected operator.
   */
  @action
  selectOperator(operator) {
    this.operator = operator;
  }

  /**
   * Calculate the outcome of the selected calculation
   * with the input numbers, then store the calculation to history.
   */
  @action
  calculate(event) {
    if (event) event.preventDefault();

    const aInt = parseInt(this.a);
    const bInt = parseInt(this.b);
    this.lastOperator = this.operator;
    switch (this.operator) {
      case '+':
        this.result = aInt + bInt;
        break;
      case '-':
        this.result = aInt - bInt;
        break;
      case '*':
        this.result = aInt * bInt;
        break;
      case '/':
        this.result = aInt / bInt;
        break;
      case '%':
        this.result = aInt % bInt;
        break;
    }
    this.result = this.result.toFixed(2);
    if (this.result || this.result == 0) {
      this.showResult = true;
    }

    this.history.reverseObjects();
    this.history.pushObject({
      a: this.a,
      operator: this.operator,
      b: this.b,
      result: this.result,
    });
    this.history.reverseObjects();
  }

  /**
   * Restore calculation arguments from history and re-evaluate the outcome.
   */
  @action
  recalculate(item) {
    this.a = item.a;
    this.operator = item.operator;
    this.b = item.b;
    this.calculate();
  }

  /**
   * Handle typing in number input fields, reset the calculation result.
   */
  @action
  typing() {
    this.result = null;
  }
}
