import { ClassNames } from './../src/classnames';

describe('ClassNames function', () => {
  it('should return an empty string if the class does not exist', () => {
    const classNames = ClassNames({});
    const className = classNames('card');

    expect(className).toBe('');
  });

  it('should return the className searched', () => {
    const styles = {
      card: 'card-59494949'
    };
    const classNames = ClassNames(styles);

    expect(classNames('card')).toBe(styles.card);
  });

  it('should return the classNames which are true', () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const classNames = ClassNames(styles);
    const className = classNames({
      'card': true,
      'card-header': false,
      'shadow-1': true
    });

    expect(className).toBe(`${styles.card} shadow-1`);
  });

  it("should inject a dynamic class if it's not undefined", () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const classNames = ClassNames(styles);
    const injectedClassName = 'shadow-1';
    const className = classNames({
      card: true,
      [injectedClassName]: injectedClassName
    });

    expect(className).toBe(`${styles.card} ${injectedClassName}`);
  });

  it("should not apply the class if the property it's undefined", () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const classNames = ClassNames(styles);
    const injectedClassName = undefined;
    const className = classNames({
      card: true,
      card__header: injectedClassName
    });

    expect(className).toBe(`${styles.card}`);
  });

  it("should not inject a dynamic class if it's an empty string", () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    };
    const classNames = ClassNames(styles);
    const injectedClassName = '';
    const className = classNames({
      card: true,
      [injectedClassName]: injectedClassName
    });

    expect(className).toBe(`${styles.card}`);
  });
});
