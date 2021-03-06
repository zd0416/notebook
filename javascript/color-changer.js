(() => {
  class Color {
    static hex2rgb (str) {
      let char = '[0-9a-fA-F]'

      str = str.slice(1)

      if (!new RegExp(`^${char}{3}|${char}{6}$`).test(str)) {
        throw new Error('can not parse')
      }

      let isShort = str.length === 3
      if (isShort) {
        str = str.replace(new RegExp(`(${char})?`, 'g'), '$1$1')
      }

      let matches = str.match(new RegExp(`${char}{2}`, 'g')).map(num => parseInt(num, 16))

      return `rgb(${matches.join(', ')})`
    }
    static rgb2hex (str) {
      if (!/^rgb(a)?\(/.test(str)) {
        throw new Error('can not parse')
      }

      var matches = str.match(/\d+/g).slice(0, 3).filter(num => +num >= 0 && +num <= 255)

      if (matches.length < 3) {
        throw new Error('wrong value')
      }

      let shortCount = 0

      matches = matches.map(num => {
        let hex = (+num).toString(16)

        shortCount += +(hex[0] === hex[1])

        return hex
      })

      if (shortCount === 3) {
        matches = matches.map(([num]) => num)
      }

      return `#${matches.join('')}`
    }
  }

  console.log(Color.hex2rgb('#000'))
  console.log(Color.rgb2hex('rgba(255, 255, 255, 1)'))
})()
