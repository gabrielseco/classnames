# ClassNames

> A small utility to get classnames for css-modules and apply classes conditionally in react

## Install

```sh
  npm i --save @rogal/classnames
```

### Implementation

When you import ClassNames you have to initialize them with the styles coming from CSS Modules.

Then you have a function with accepts a string or an object with keys and booleans

If you pass a string the function is going to search in the styles if the class exists

If you pass an object the function is going to search first if it exists in the styles, if not it understands that they are global classes and apply only the truthy values

## Usage

```js
import ClassNames from '@rogal/classnames'
```

```jsx
import ClassNames from '@rogal/classnames'
import styles from './styles'

const classNames = ClassNames(styles)

const Example = () => (
  <div
    className={classNames({
      example: true,
      hidden: false
    })}
  >
    <h1 className={classNames('example__title')}>hello world</h1>
    <h1 className={classNames('not_found_class_in_styles')}>not found class</h1>
  </div>
)
```

```html
<div class="example">
  <h1 class="example__title">hello world</h1>
  <h1 class>not found class</h1>
</div>
```
