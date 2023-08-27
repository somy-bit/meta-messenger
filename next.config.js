/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir:true,
  }
  ,
  images:{
    domains:['links.papareact.com','platform-lookaside.fbsbx.com','github.com']
  }
}

module.exports = nextConfig
