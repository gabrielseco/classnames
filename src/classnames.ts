const applyClassNames = (obj: { [key: string]: string | boolean }) => {
  return Object.keys(obj)
    .map(key => {
      return obj[key] ? key : ''
    })
    .filter(item => {
      return item !== ''
    })
    .join(' ')
    .trim()
}

const ClassNames = (styles: { [key: string]: string }) => {
  const _styles = styles

  const bem = (className: string) => {
    return _styles[className] ? _styles[className] : ''
  }

  const classNames = (obj: { [key: string]: string | boolean }) => {
    const classNamesToBeApplied = applyClassNames(obj).split(' ')
    const stylesClasses = Object.keys(_styles)

    const finalClassNames = classNamesToBeApplied.map(className => {
      return stylesClasses.includes(className) ? _styles[className] : className
    })

    return finalClassNames.join(' ')
  }

  return function(items: string | { [key: string]: string | boolean }) {
    if (typeof items === 'string') {
      return bem(items)
    }

    return classNames(items)
  }
}

export default ClassNames
