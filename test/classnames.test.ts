import ClassNames from './../src/classnames'

describe('ClassNames function', () => {
  it('should return an empty string if the class does not exist', () => {
    const classNames = ClassNames({})
    const className = classNames('card')

    expect(className).toBe('')
  })

  it('should return the className searched', () => {
    const styles = {
      card: 'card-59494949'
    }
    const classNames = ClassNames(styles)

    expect(classNames('card')).toBe(styles.card)
  })

  it('should return the classNames which are true', () => {
    const styles = {
      card: 'card-59494949',
      card__header: 'card__header-505959'
    }
    const classNames = ClassNames(styles)
    const className = classNames({
      card: true,
      'card-header': false,
      'shadow-1': true
    })

    expect(className).toBe(`${styles.card} shadow-1`)
  })
})
