# eslint-config-qymh

This is a group which contains rules of eslint that I use habitually

Visite [CHANGELOG](https://github.com/Qymh/eslint-config-qymh/blob/master/CHANGELOG.md) to see changes

## Usage

If you'd like you can try this

### Must Install

Every case you need input this command

```shell
yarn add eslint prettier eslint-config-qymh eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-standard babel-eslint -D
```

### javascript or node

- .eslintrc

```javascript
{
  "extends":["qymh"]
}
```

### typescript

- install

you need install more modules

```shell
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

- .eslintrc

```javascript
{
  "extends":["qymh/typescript"]
}
```

### vue

- install

you need install more modules

```shell
yarn add eslint-plugin-vue -D
```

- .eslintrc

```javascript
{
  "extends":["qymh/vue"]
}
```

### react

you need install more modules

```shell
yarn add eslint-plugin-react-hooks -D
```

- .eslintrc

```javascript
{
  "extends":["qymh/react"]
}
```
