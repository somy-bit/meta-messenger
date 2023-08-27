/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir:true,
  }
  ,
  images:{
    domains:['links.papareact.com','platform-lookaside.fbsbx.com','avatars.githubusercontent.com']
  }
}

module.exports = nextConfig
