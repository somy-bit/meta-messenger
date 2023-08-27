import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import GitHubProvider from 'next-auth/providers/github'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    
    FacebookProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    // // ...add more providers here
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
   
  ],
  secret : process.env.NEXTAUTH_SECRET,
  pages:{
    signIn:'/auth/signin'
  }
}
export default NextAuth(authOptions)