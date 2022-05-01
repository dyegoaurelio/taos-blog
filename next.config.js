// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const isCodeServer = process.env.CODE_SERVER === 'true'

const withCodeServerProps = (baseProps) => {
  if (!isCodeServer) return baseProps

  baseProps.basePath = '/absproxy/3454'
  return baseProps
}

module.exports = withCodeServerProps(
  withBundleAnalyzer({
    staticPageGenerationTimeout: 300,
    images: {
      domains: [
        'www.notion.so',
        'notion.so',
        'images.unsplash.com',
        'pbs.twimg.com',
        'abs.twimg.com',
        's3.us-west-2.amazonaws.com'
      ],
      formats: ['image/avif', 'image/webp'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    }
  })
)
