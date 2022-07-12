const path = require('path')

module.exports = {
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/i,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
          options: {
            additionalData: async (content, loaderContext) => {
              const { resourcePath, rootContext } = loaderContext

              const variablesFilename = 'variables.module.less'
              const mixinsFilename = 'mixins.module.less'

              const pathToStyleVariables = `${rootContext}/src/styles/${variablesFilename}`
              const pathToStyleMixins = `${rootContext}/src/styles/${mixinsFilename}`

              // automatically import style variables and mixins into each less module file
              if (
                resourcePath.endsWith('.module.less') &&
                !(resourcePath.endsWith(variablesFilename) || resourcePath.endsWith(mixinsFilename))
              ) {
                const relativeVariableImport = `@import (reference) '${path.relative(
                  `${resourcePath}/../`,
                  pathToStyleVariables
                )}';`
                const relativeMixinsImport = `@import (reference) '${path.relative(
                  `${resourcePath}/../`,
                  pathToStyleMixins
                )}';`

                return `${relativeVariableImport}\n${relativeMixinsImport}\n${content}`
              }

              return content
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    })
    return config
  },
}
